const express = require('express')
const path = require('path');
const app = express();

const http = require('http');
const server = http.Server(app);

const socketIO = require('socket.io');
const io = socketIO(server);

const port = process.env.PORT || 3000;

// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'ACd1b4707920db5c13b078db0c02732122';
const authToken = 'f795edadf5078f7cc8e32314bf0995a0';
const client = require('twilio')(accountSid, authToken);


const AccessToken = require('twilio').jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;

// Used when generating any kind of Access Token
const twilioApiKey = 'SK14dd48d995c9d04bcd383430bb2ba40f';
const twilioApiSecret = 'JuAlyDVJnJ88Kk6tWdDaoiKipiajxjXx';




let state = { 
    isArthurTaken: false,
    isStarmantaken: false,
    phoneCall: {
        arthurToken: null,
        starmanToken: null,
        arthurCallingStarman: false,
        starmanCallingArthur: false,
        phoneCallActive: false,
        roomsid: null,
        roomUniqueName: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    }
};
io.on('connection', (socket) => {
    socket.join('retrotalk');


    socket.on('toggleCharacterTaken', (characterState) => {

        if(characterState === 'ARTHUR_TAKEN') {
            state.isArthurTaken = true;
        }

        if(characterState === 'ARTHUR_AVAILABLE') {
            state.isArthurTaken = false;
        }

        if(characterState === 'STARMAN_TAKEN') {
            state.isStarmantaken = true;
        }

        if(characterState === 'STARMAN_AVAILABLE') {
            state.isArthurTaken = false;
        }

        io.to('retrotalk').emit('appState', state);
    });

    socket.on('phoneCall', (phoneCall) => {

        if(phoneCall.phoneCallActive === true) {
            client.video.rooms
            .create({
               type: 'peer-to-peer',
               uniqueName: state.phoneCall.roomUniqueName
             })
            .then(room => {
                // Create an access token which we will sign and return to the client,
                // containing the grant we just created
                const token = new AccessToken(accountSid, twilioApiKey, twilioApiSecret);
                const token2 = new AccessToken(accountSid, twilioApiKey, twilioApiSecret);
                token.identity = 'arthur';
                token2.identity = 'starman';

                // Create a Video grant which enables a client to use Video 
                // and limits access to the specified Room (DailyStandup)
                const videoGrant = new VideoGrant({
                    room: state.phoneCall.roomUniqueName
                });
                const videoGrant2 = new VideoGrant({
                    room: state.phoneCall.roomUniqueName
                });

                // Add the grant to the token
                token.addGrant(videoGrant);
                token2.addGrant(videoGrant2);

                state = {...state, phoneCall: {...state.phoneCall, ...phoneCall, roomsid: room.sid, starmanCallingArthur: false, arthurCallingStarman: false}};
                // Serialize the token to a JWT string
                state.phoneCall.arthurToken = token.toJwt();
                state.phoneCall.starmanToken = token2.toJwt();
                io.to('retrotalk').emit('appState', state);
            });
        } else {
            if(state.phoneCall.roomsid !== null) {
                client.video.rooms('retrotalk')
                .update({status: 'completed'})
                .then(room => {
                    state = {...state, phoneCall: {...state.phoneCall, ...phoneCall, roomsid: null, arthurToken: null, starmanToken: null}};
                    io.to('retrotalk').emit('appState', state);
                });
            } else {
                state = {...state, phoneCall: {...state.phoneCall, ...phoneCall}};
                io.to('retrotalk').emit('appState', state);
            }
        }
    });

    socket.on('resetState', (reset) => {
        if(reset === true){
            const resetState = { 
                isArthurTaken: false,
                isStarmantaken: false,
                phoneCall: {
                    arthurToken: null,
                    starmanToken: null,
                    arthurCallingStarman: false,
                    starmanCallingArthur: false,
                    phoneCallActive: false,
                    sid: null,
                    roomUniqueName: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
                }
            };
            
            state = {...resetState};
    
            io.to('retrotalk').emit('appState', state);
        }
    });



    io.to('retrotalk').emit('appState', state);

});


server.listen(port, () => {
    console.log(`started on port: ${port}`);
});

app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;