module.exports = {

    'facebookAuth' : {
        'clientID'        : 'App ID',
        'clientSecret'    : 'App Secret',
        'callbackURL'     : 'http://localhost:3000/auth/facebook/callback',
        'profileFields'   : ['id', 'displayName', 'email', 'photos']
        // 'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email'

    }

};