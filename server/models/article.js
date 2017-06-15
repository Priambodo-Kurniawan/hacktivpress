'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Please enter your adds title']
  },
  content: {
    type: String,
    required: [true, 'Please enter your house description']
  },
  image: Array,
  city: {
    type: String,
    required: [true, 'Please enter your city']
  },
  creator: {
    type: Schema.Types.ObjectId, ref: 'User'
  },
  createdAt: Date
})

var Article = mongoose.model('Article', articleSchema);

module.exports = Article;
