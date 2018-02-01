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
  }).then(()=>{
  Skills.insertMany(reqBody, (err, reqBody) => {
    if (err) {
          console.log('err', err)
    }
    console.log('добавлено')
    })
  })
  
};
