const mongoose = require('mongoose');

module.exports.getSkills = (req, res) => {
  const Skills = mongoose.model('skills');

  Skills.find().then(items => {
    console.log('getSkills')
    res.status(200).json(items);
  });
};

module.exports.postSkills = (req, res) => {
  let reqBody = req.body
  const Skills = mongoose.model('skills');

  Skills.remove((err) => {
    if (err) {
      console.log('err', err)
    }
    console.log('удалено')
  })

  Skills.insertMany(reqBody, (err, reqBody) => {
    if (err) {
          console.log('err', err)
    }
    console.log('добавлено')
  })

  // console.log(req)
  // console.log(res)
  // Skills.find().then(items => {
  //   console.log('getSkills')
  //   console.log(items)
  //   res.status(200).json(items);
  // });
  // Skills.add(req.body).then(document => {
  //   res.json(document)
  // })
  // const Model = mongoose.model('skills');

  // let item = new Model({
  //   title: "article2",
  //   date: new Date(req.body.date),
  //   body: "hi"
  // });
  // //сохраняем запись в базе
  // item
  //   .save()
  //   .then(item => {
  //     return res.status(201).json({ message: 'Запись успешно добавлена' });
  //   })
  //   .catch(err => {
  //     res.status(400).json({
  //       message: `При добавление записи произошла ошибка:  + ${err.message}`
  //     });
  //   });
};

// module.exports.createSkill = (req, res) => {
//   //создаем новую запись блога и передаем в нее поля из формы
//   const Model = mongoose.model('skills');

//   let item = new Model({
//     title: req.body.title,
//     date: new Date(req.body.date),
//     body: req.body.text
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

// module.exports.editSkill = (req, res) => {
//   const id = req.params.id;
//   // console.log(id);
//   let data = {
//     title: req.body.title,
//     date: new Date(req.body.date),
//     body: req.body.text
//   };

//   const Model = mongoose.model('skills');

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

// module.exports.deleteSkill = (req, res) => {
//   const id = req.params.id;
//   const Model = mongoose.model('skills');

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