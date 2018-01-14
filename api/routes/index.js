const express = require('express');
const router = express.Router();


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


const ctrlUser = require('../controllers/user');
const ctrlBlog = require('../controllers/blog');
const ctrlWorks = require('../controllers/works');
const ctrlSkills = require('../controllers/skills');

router.post('/user', ctrlUser.isAuth);

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

module.exports = router;