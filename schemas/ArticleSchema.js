var mongoose = require('mongoose');

var ArticleSchema = new mongoose.Schema({
  username : String,
  title : String,
  content : String
});

//var UserModel = mongoose.model('User',UserSchema);

module.exports = ArticleSchema;