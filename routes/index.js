var express = require('express');
var router = express.Router();

const ctrlBlog = require('../api/controllers/blog');
const ctrlWorks = require('../api/controllers/works');
const ctrlSkills = require('../api/controllers/skills');
const ctrlLogin = require('../controllers/login');
const ctrlUser = require('../api/controllers/user');
const ctrlMail = require('../controllers/mail');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Роман Турусов' });
});
router.post('/', ctrlLogin.authorization);
router.post('/user', ctrlUser.isAuth);


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

/* GET admin page. */
// router.get('/admin', function(req, res, next) {
//   res.render('admin', { title: 'Панель администратора' });
// });
// router.post('/admin', function(req, res, next) {
//   res.render('admin', { title: 'Панель администратора' });
// });
router.get('/admin', isAdmin, function(req, res, next) {
    res.render('admin', { title: 'Панель администратора' });
});

router.get('/blog', ctrlBlog.getArticles);
router.post('/blog', ctrlBlog.postArticles);
// router.post('/blog', ctrlBlog.createArticle);
// router.put('/blog/:id', ctrlBlog.editArticle);
// router.delete('/blog/:id', ctrlBlog.deleteArticle);


router.get('/works', ctrlWorks.getWorks);
router.post('/works', ctrlWorks.postWorks);
// router.post('/works', ctrlWorks.createWork);
// router.put('/works/:id', ctrlWorks.editWork);
// router.delete('/works/:id', ctrlWorks.deleteWork);

router.get('/about', ctrlSkills.getSkills);
router.post('/about', ctrlSkills.postSkills);
// router.post('/about', ctrlSkills.createSkill);
// router.put('/about/:id', ctrlSkills.editSkill);
// router.delete('/about/:id', ctrlSkills.deleteSkill);

// router.get('/avatar', ctrlAvatar.getAvatar);
// router.post('/avatar', ctrlAvatar.setAvatar);
router.post('/contact', ctrlMail.sendEmail);

module.exports = router;
