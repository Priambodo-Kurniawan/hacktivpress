var express = require('express');
var logger = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors')

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var db_config = {
  development: 'mongodb://localhost/hacktivpress',
}
var current_env = app.settings.env

mongoose.connect(db_config[current_env], (err,res) => {
  if(err) {
    console.log(err);
  } else {
    console.log('connected to database: ', db_config[current_env]);
  }
});

var articles = require('./routes/articles');
var users = require('./routes/users');

app.use(cors())
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/articles', articles);
app.use('/api/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
