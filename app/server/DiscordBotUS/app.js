var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session')
var request = require('request')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  resave: false, // don't save session if unmodified
  saveUninitialized: false, // don't create session until something stored
  secret: 'discord'
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
request({
  url:"https://putinproductions.000webhostapp.com/api/MutiApi/MutiAPI.json",
  json: true
}, (err,res,body)=>{
  if(err){
    throw err
  }else{
    console.log('[Server]: MutiAPI connected')
  }
})
request({
  url:"https://putinproductions.000webhostapp.com/api/5.0/runtime.json",
  json: true
}, (err,res,body)=>{
  if(err){
    throw err
  }else{
      console.log('[Server]: Runtime connected');
  }
})
request({
  url:"https://putinproductions.000webhostapp.com/api/MainApi/MainApi.json",
  json: true
}, (err,res,body)=>{
  if(err){
    throw err
  }else{
    console.log('[Server]: MainApi connected')
  }
})
module.exports = app;
