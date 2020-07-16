//var FacebookStrategy = require('passport-facebook').Strategy; // Import Passport-Facebook Package
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = mongoose.model('User');

passport.use(
  new LocalStrategy(
    {
      usernameField: 'name'
    },
    function(username, password, done) {
      User.findOne({ name: username }, function(err, user) {
        if (err) {
          return done(err);
        }
        // Return if user not found in database
        if (!user) {
          return done(null, false, {
            message: 'User not found'
          });
        }
        // // Return if password is wrong
        // if (!user.validPassword(password)) {
        //   return done(null, false, {
        //     message: 'Password is wrong'
        //   });
        // }
        // If credentials are correct, return the user object
        return done(null, user);
      });
    }
  )
);


// passport.use(new FacebookStrategy({
//   clientID: '', // Replace with Facebook Developer App client ID
//   clientSecret: '', // Replace with Facebook Developer client secret
//   callbackURL: "", // Replace with Facebook Developer App callback URL
//   profileFields: ['id', 'displayName', 'email']
// },
// function(accessToken, refreshToken, profile, done) {
//   User.findOne({ email: profile._json.email }).select('username active password email').exec(function(err, user) {
//       if (err) done(err);

//       if (user && user !== null) {
//           done(null, user);
//       } else {
//           done(err);
//       }
//   });
// }
// ));

