var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var app = express();
var multer  = require('multer')



// app.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {
//   // req.files is array of `photos` files
//   // req.body will contain the text fields, if there were any
// })

// var cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
// app.post('/cool-profile', cpUpload, function (req, res, next) {
//   // req.files is an object (String -> Array) where fieldname is the key, and the value is array of files
//   //
//   // e.g.
//   //  req.files['avatar'][0] -> File
//   //  req.files['gallery'] -> Array
//   //
//   // req.body will contain the text fields, if there were any
// })

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
  // req.file is the `avatar` file
  console.log(req.file)
  // req.body will hold the text fields, if there were any
})
// var upload = multer({ dest: 'uploads/' })
// app.post('/admin/works/file', function(req, res){
//   // console.log(res)
//   upload(req, res, function(err) {
//     if(err) {
//       return res.end('Error uloading file')
//     }
//     res.end('File is uploaded')
//   })
// })

// app.post('/admin/works/file', upload.single('File'), function (req, res, next) {
//   // req.file is the `avatar` file
//   // req.body will hold the text fields, if there were any
//   console.log(req.file)
// })
require('./api/models/db'); // Подключаем БД
// require('./addUser')

const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);


var index = require('./routes/index');
var indexApi = require('./api/routes/index');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


// uncomment after placing your favicon in /public
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
  // если в сессии текущего пользователя есть пометка о том, что он является
  // администратором
  if (req.session.isAdmin) {
    //то всё хорошо :)
    return next();
  }
  //если нет, то перебросить пользователя на главную страницу сайта
  res.redirect('/');
};


app.use('/admin(.html)', isAdmin, function(req, res) {
  res.sendFile(path.resolve(__dirname, './public', 'admin.html'));
})

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
