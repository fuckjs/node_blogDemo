var mongoose = require('mongoose');
var User = require('../models/user.js');
mongoose.connect('mongodb://localhost/blog');

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
	});
	app.post('/reg',function(req,res){
		//console.log(req.body);
		var newUser = new User({
			username: req.body.username,
			password: req.body.password,
			email: req.body.email
		});
		newUser.save(function(){
			console.log(arguments);
		});
		// res.redirect('/login')
	});
	app.get('/login',function(req,res){
		res.render('login',{
			title : '登陆页'
		})
	});
	app.post('/login',function(req,res){
		res.redirect('/')
	});
	app.get('/post', function (req, res) {
	   res.render('post', { title: '发表' });
	});
	app.post('/post', function (req, res) {
	});
	app.get('/logout', function (req, res) {
	});
}