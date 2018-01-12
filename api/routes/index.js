const express = require('express');
const router = express.Router();

const ctrlBlog = require('../controllers/blog');
const ctrlWorks = require('../controllers/works');
const ctrlSkills = require('../controllers/skills');
// const ctrlAvatar = require('../controllers/avatar');

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

// router.get('/avatar', ctrlAvatar.getAvatar);
// router.post('/avatar', ctrlAvatar.setAvatar);

module.exports = router;