const ctrlAuth = require('../controllers/authentication');
const ctrlProfile = require('../controllers/profile');
const express = require('express');
const jwt = require('express-jwt');
const router = express();
const bodyParser = require('body-parser');
const morgan = require('morgan')

router.use(morgan('dev'));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true}));

const auth = jwt({
  secret: 'TEAM_X', //temporary
  userProperty: 'payload'
});

// profile
router.get('/profile', auth, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

/*backend testing
router.listen(8080,function(){
  console.log("running");
});
//*/

module.exports = router;
