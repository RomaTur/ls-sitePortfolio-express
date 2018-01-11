var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Роман Турусов' });
});

/* GET admin page. */
router.get('/admin', function(req, res, next) {
  res.render('admin', { title: 'Панель администратора' });
});
router.post('/admin', function(req, res, next) {
  res.render('admin', { title: 'Панель администратора' });
});

module.exports = router;
