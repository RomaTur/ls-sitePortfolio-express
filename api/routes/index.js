const express = require('express');
const router = express.Router();


const isAdmin = (req, res, next) => {
  if (req.session.isAdmin) {
    return next();
  }
  res.redirect('/');
};

const ctrlUser = require('../controllers/user');
const ctrlBlog = require('../controllers/blog');
const ctrlWorks = require('../controllers/works');
const ctrlSkills = require('../controllers/skills');
const ctrlTelegram = require('../controllers/telegramForm');


router.post('/user', ctrlUser.isAuth);
router.post('/post/telegram', ctrlTelegram.sendMsg);

router.get('/get/blog', ctrlBlog.getArticles);
router.post('/post/blog', ctrlBlog.postArticles);


router.get('/get/works', ctrlWorks.getWorks);
router.post('/post/works', ctrlWorks.postWorks);

router.get('/get/about', ctrlSkills.getSkills);
router.post('/post/about', ctrlSkills.postSkills);

module.exports = router;