var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  username : {
    type: String,
    unique: true
  },
  password : String,
  email : String
});

//var UserModel = mongoose.model('User',UserSchema);

module.exports = UserSchema;