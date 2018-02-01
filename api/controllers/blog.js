const mongoose = require('mongoose');

module.exports.getArticles = (req, res) => {
  const Blog = mongoose.model('blog')
  
  Blog.find().then(items => {
    console.log('getArticles')
    res.status(200).json(items)
  });
};

module.exports.postArticles = (req, res) => {
  const Blog = mongoose.model('blog')
  
  let reqBody = req.body
  Blog.remove((err) => {
    if (err) {
      console.log('err', err)
    }
    console.log('удалено')
  }).then(()=>{
  Blog.insertMany(reqBody, (err, reqBody) => {
    if (err) {
          console.log('err', err)
    }
    console.log('добавлено')
    })
  })
};
