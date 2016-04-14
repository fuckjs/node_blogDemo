var User = require('../models/user.js')

module.exports = function(app){
	app.get('/',function(req,res){
		res.render('index',{
			title : '主页'
		});
	});
	app.get('/reg',function(req,res){
		res.render('reg',{
			title : '注册页'
		});
		var newUser = new User({
			name: "lisle",
			password: "1231213",
			email: "lisle@163.com"
		})

		newUser.save();
	});
	app.post('/reg',function(req,res){
/*		var newUser = new User({
			name: "lisle",
			password: "1231213",
			email: 13231131213
		})*/
	});
	app.get('/login',function(req,res){
		res.render('login',{
			title : '登陆页'
		})
	});
	app.post('/login',function(req,res){
		
	});
	app.get('/post', function (req, res) {
	   res.render('post', { title: '发表' });
	});
	app.post('/post', function (req, res) {
	});
	app.get('/logout', function (req, res) {
	});
}