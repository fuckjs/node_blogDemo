var mongoose = require('mongoose');

function User(user){
	this.name = user.name;
	this.password = user.password;
	this.email = user.email;
}

User.prototype.save = function(){
	var user = {
      name: this.name,
      password: this.password,
      email: this.email
  	};

  	mongoose.connect('mongodb://localhost/blog');
  	var db = mongoose.connection;
  	db.on('error', function(event) {
  		console.log('连接数据库失败');
  	});
  	db.once('open',function(){
  		console.log('连接数据库成功');
  		var userSchema = mongoose.Schema({
  			name : String,
  			pass : String,
  			email : String
  		});
/*  		userSchema.methods.speak = function(){
  			var name = this.name;
  			console.log('my name is '+name);
  		}*/
  		var User = mongoose.model('User',userSchema);
  		var userInfo = new User(user);
  		//userInfo.speak();
  		userInfo.save(function(){
  			User.find({name:'haiyang'},function(err,data){
  				console.log(data);
  			})
  		});

  	})
}

module.exports = User;