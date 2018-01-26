module.exports.sendMsg = (req, res) => {
  const config = require('../../config/configLocal.json');
  let http = require('request')
  let reqBody = req.body
  let fields = [
    '<b>Name</b>: ' + reqBody.name,
    '<b>Email</b>: ' + reqBody.email,
    reqBody.text
  ]
  let msg = ''
  fields.forEach(field => {
    msg += field + '\n'
  });
  console.log(msg)
  msg = encodeURI(msg)
  console.log(msg)
  http.post(`https://api.telegram.org/bot${config.telegram.token}/sendMessage?chat_id=${config.telegram.chat}&parse_mode=html&text=${msg}`, function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
  });

  res.status(200).json({status: 'ok', message: 'Отправилось!'});
}