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

// module.exports.createArticle = (req, res) => {
//   //создаем новую запись блога и передаем в нее поля из формы
//   const Model = mongoose.model('blog');

//   let item = new Model({
//     title: req.body.title,
//     date: new Date(req.body.date),
//     text: req.body.text
//   });
//   //сохраняем запись в базе
//   item
//     .save()
//     .then(item => {
//       return res.status(201).json({ message: 'Запись успешно добавлена' });
//     })
//     .catch(err => {
//       res.status(400).json({
//         message: `При добавление записи произошла ошибка:  + ${err.message}`
//       });
//     });
// };

// module.exports.editArticle = (req, res) => {
//   const id = req.params.id;
//   // console.log(id);
//   let data = {
//     title: req.body.title,
//     date: new Date(req.body.date),
//     body: req.body.text
//   };

//   const Model = mongoose.model('blog');

//   Model.findByIdAndUpdate(id, { $set: data })
//     .then(item => {
//       // console.log(item);
//       if (!!item) {
//         res.status(200).json({ message: 'Запись успешно обновлена' });
//       } else {
//         res.status(404).json({ message: 'Запись в БД не обнаружена' });
//       }
//     })
//     .catch(err => {
//       res.status(400).json({
//         message: `При обновлении записи произошла ошибка:  + ${err.message}`
//       });
//     });
// };

// module.exports.deleteArticle = (req, res) => {
//   const id = req.params.id;
//   const Model = mongoose.model('blog');

//   Model.findByIdAndRemove(id)
//     .then(item => {
//       if (!!item) {
//         res.status(200).json({ message: 'Запись успешно удалена' });
//       } else {
//         res.status(404).json({ message: 'Запись в БД не обнаружена' });
//       }
//     })
//     .catch(err => {
//       res.status(400).json({
//         message: `При удалении записи произошла ошибка: ' + ${err.message}`
//       });
//     });
// };