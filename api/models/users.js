const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fbID: { type: String, unique: true, required: true },
  name: { type: String, required: true },
  photo: { type: String },
  active: { type: Boolean, required: true, default: false},
  contacts: { type: Array }
});

userSchema.methods.addContact = function(contact) {
  const id = contact.ObjectID();
  if(!userSchema.findById(id))
    return(err)
  else
    this.contacts.append(id);
}

userSchema.methods.generateJwt = function() {
  const expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign(
    {
      _id: this._id,
      fbID: this.fbID,
      name: this.name,
      exp: parseInt(expiry.getTime() / 1000)
    },
    'TEAM_X'
  );
};

mongoose.model('User', userSchema);
