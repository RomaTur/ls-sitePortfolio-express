const mongoose = require('mongoose');

module.exports.getWorks = (req, res) => {
  const Works = mongoose.model('works');

  Works.find().then(items => {
    console.log('getWorks')
    res.status(200).json(items);
  });
};

module.exports.postWorks = (req, res) => {
  const Works = mongoose.model('works');
  let reqBody = req.body
    Works.remove((err) => {
      if (err) {
        console.log('err', err)
      }
      console.log('удалено')
    }).then(()=>{
    Works.insertMany(reqBody, (err, reqBody) => {
      if (err) {
            console.log('err', err)
      }
      console.log('добавлено')
      })
    })

};
