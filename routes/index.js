var express = require('express');
var router = express.Router();

const ctrlBlog = require('../api/controllers/blog');
const ctrlWorks = require('../api/controllers/works');
const ctrlSkills = require('../api/controllers/skills');

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

router.get('/blog', ctrlBlog.getArticles);
router.post('/blog', ctrlBlog.createArticle);
router.put('/blog/:id', ctrlBlog.editArticle);
router.delete('/blog/:id', ctrlBlog.deleteArticle);


router.get('/works', ctrlWorks.getWorks);
router.post('/works', ctrlWorks.createWork);
router.put('/works/:id', ctrlWorks.editWork);
router.delete('/works/:id', ctrlWorks.deleteWork);

router.get('/about', ctrlSkills.getSkills);
router.post('/about', ctrlSkills.createSkill);
router.put('/about/:id', ctrlSkills.editSkill);
router.delete('/about/:id', ctrlSkills.deleteSkill);

module.exports = router;
