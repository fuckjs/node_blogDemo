var mongoose = require('mongoose');
var User = require('../models/user.js');
var Article = require('../models/arti.js');
mongoose.connect('mongodb://localhost/blog');
mongoose.connection.on('error', function(err) {
	console.log(err);
});

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
		newUser.save(function(err,data){
			if(err){
				console.log(err);
			}else{
				console.log('存入用户信息成功');
				res.redirect('/login');
			}
		});
		// res.redirect('/login')
	});
	app.get('/login',function(req,res){
		res.render('login',{
			title : '登陆页'
		})
	});
	app.post('/login',function(req,res){
		//console.log(req.body);
		User.find({'username' : req.body.username,'password':req.body.password},function(err,data){
			if (err) {
				console.log('查询数据库错误');
			}else{
				//console.log('返回数据'+data);
				if(!data.length){
					console.log('用户名或密码错误');
					res.redirect('error');
					return;
				}
				console.log('登陆成功');
				res.redirect('/blog?username='+req.body.username)
			}
			//console.log(arguments);
		})

	});
	app.get('/error',function(req,res){
		res.render('err',{
			title : '登陆异常'
		});
	});
	app.get('/write', function (req, res) {
	   res.render('write', { title: '发表' });
	});
	app.post('/write', function (req, res) {
		console.log(req.body);
		var newArticle = new Article({
			username: req.body.username,
			title: req.body.title,
			content: req.body.text
		});
		newArticle.save(function(err,data){
			if(err){
				console.log(err);
			}else{
				console.log('存入用户'+req.body.username+'文章成功');
				res.redirect('/blog?username='+req.body.username);
			}
		});
	});
	app.get('/blog',function(req,res){
		console.log('start');
		console.log(req.query);
		var articleArr = [];
		Article.find({'username' : req.query.username},function(err,data){
			if (err) {
				console.log('查询数据库错误');
			}else{
				articleArr=data;
				console.log(articleArr);
				res.render('blog',{
					title : '博文',
					articleList : articleArr
				});
			}
		})
	});
	app.post('/blog',function(req,res){
		res.render('blog',{
			title : '博文'
		});
	})
}