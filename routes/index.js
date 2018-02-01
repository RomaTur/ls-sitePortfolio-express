var express = require('express');
var router = express.Router();

const ctrlBlog = require('../api/controllers/blog');
const ctrlWorks = require('../api/controllers/works');
const ctrlSkills = require('../api/controllers/skills');
const ctrlLogin = require('../api/controllers/login');
const ctrlUser = require('../api/controllers/user');
const ctrlTelegram = require('../api/controllers/telegramForm');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Роман Турусов' });
});
router.get('/blog', function(req, res, next) {
  res.render('index', { title: 'Роман Турусов' });
});
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'Роман Турусов' });
});
router.get('/works', function(req, res, next) {
  res.render('index', { title: 'Роман Турусов' });
});

router.post('/', ctrlLogin.authorization);
router.post('/user', ctrlUser.isAuth);


const isAdmin = (req, res, next) => {
  if (req.session.isAdmin) {
    return next();
  }
  res.redirect('/');
};

router.get('/admin', isAdmin, function(req, res, next) {
    res.render('admin', { title: 'Панель администратора' });
});

router.get('/get/blog', ctrlBlog.getArticles);
router.post('/post/blog', ctrlBlog.postArticles);

router.get('/get/works', ctrlWorks.getWorks);
router.post('/post/works', ctrlWorks.postWorks);

router.get('/get/about', ctrlSkills.getSkills);
router.post('/post/about', ctrlSkills.postSkills);

router.post('/post/telegram', ctrlTelegram.sendMsg);



module.exports = router;
