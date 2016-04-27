var mongoose = require('mongoose');
var ArticleSchema = require('../schemas/ArticleSchema');

var ArticleModel = mongoose.model('article',ArticleSchema);

module.exports = ArticleModel;