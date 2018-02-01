var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var app = express();
var multer  = require('multer')

var storage = multer.diskStorage({
  destination: function (req, file, callback){
    callback(null, './public/upload/works/')
  },
  filename: function(req, file, callback){
    callback(null, file.originalname)
  }
})

var upload = multer({storage: storage}).single('picFile')

app.post('/admin/works/file', upload, function (req, res, next) {
  console.log(req.file)
})

require('./api/models/db');
// require('./addUser')

const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);


var index = require('./routes/index');
var indexApi = require('./api/routes/index');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());




app.use(session({
  secret: 'loftschool',
  cookie: {
    path: '/',
    httpOnly: true,
    maxAge: null
  },
  saveUninitialized: false,
  resave: false,
  store: new MongoStore({mongooseConnection: mongoose.connection})
}));


app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);
app.use('/api', indexApi);


const isAdmin = (req, res, next) => {
  if (req.session.isAdmin) {
    return next();
  }
  res.redirect('/');
};


app.use('/admin(.html)', isAdmin, function(req, res) {
  res.sendFile(path.resolve(__dirname, './public', 'admin.html'));
})

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
