'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Please enter your article title']
  },
  content: {
    type: String,
    required: [true, 'Please enter your article description']
  },
  image: Array,
  category: {
    type: String,
    required: [true, 'Please enter your category']
  },
  creator: {
    type: Schema.Types.ObjectId, ref: 'User'
  },
  createdAt: Date
})

var Article = mongoose.model('Article', articleSchema);

module.exports = Article;
