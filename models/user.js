/*var mongoose = require('mongoose');





function User(user){
	this.username = user.username;
	this.password = user.password;
	this.email = user.email;
}
User.prototype.save = function(){
    var user = {
        username: this.username,
        password: this.password,
        email: this.email
      };
    var userSchema = mongoose.Schema({
      username : {
        type: String,
        unique: true
      },
      password : String,
      email : String
    });
  	var db = mongoose.connection;
  	db.on('error', function(event) {
      console.log(event);
  		console.log('连接数据库失败');
      return;
  	});

		console.log('连接数据库成功');
		
		var User = mongoose.model('User',userSchema);
		var userInfo = new User(user);
		//userInfo.speak();
		userInfo.save(function(){
		});

}*/

var mongoose = require('mongoose');
var UserSchema = require('../schemas/UserSchema');

//mongoose.connect('mongodb://localhost/blog');

var UserModel = mongoose.model('user',UserSchema);

module.exports = UserModel;

//var db = mongoose.connect