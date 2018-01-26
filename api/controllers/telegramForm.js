module.exports.sendMsg = (req, res) => {
  let http = require('request')
  let reqBody = req.body
  let fields = [
    '<b>Имя:</b>&nbsp;' + reqBody.name,
    '<b>Почта:</b>&nbsp;' + reqBody.email,
    reqBody.text
  ]
  let msg = ''
  fields.forEach(field => {
    msg += field + '%0A'
  });
  console.log(msg)
  res.status(200).json({status: 'ok', message: 'Отправилось!'});
}