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
const accountSid = process.env.accountSid;
const authToken = process.env.authToken;
const client = require('twilio')(accountSid, authToken);


const AccessToken = require('twilio').jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;

// Used when generating any kind of Access Token
const twilioApiKey = process.env.SID;

const twilioApiSecret = process.env.Secret;




let state = { 
    isArthurTaken: false,
    isArthurReady: false,
    isStarmantaken: false,
    isStarmanReady: false,
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
            state.isArthurReady = false;
        }

        if(characterState === 'ARTHUR_READY') {
            state.isArthurReady = true;
        }

        if(characterState === 'STARMAN_TAKEN') {
            state.isStarmantaken = true;
        }

        if(characterState === 'STARMAN_AVAILABLE') {
            state.isStarmantaken = false;
            state.isStarmanReady = false;
        }

        if(characterState === 'STARMAN_READY') {
            state.isStarmanReady = true;
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

                state = {...state, phoneCall: {...state.phoneCall, ...phoneCall, roomsid: room.sid, starmanCallingArthur: false, arthurCallingStarman: false, roomUniqueName: state.phoneCall.roomUniqueName}};
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
                    console.log(ran)
                });
                state = {...state, phoneCall: {...state.phoneCall, ...phoneCall, roomUniqueName: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)}};
                io.to('retrotalk').emit('appState', state);
            } else {
                state = {...state, phoneCall: {...state.phoneCall, ...phoneCall, roomUniqueName: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)}};
                io.to('retrotalk').emit('appState', state);
            }
        }
        console.log(phoneCall);
    });

    socket.on('resetState', (reset) => {
        if(reset === true){
            const resetState = { 
                isArthurTaken: false,
                isArthurReady: false,
                isStarmantaken: false,
                isStarmanReady: false,
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