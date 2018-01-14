const nodemailer = require('nodemailer');
const config = require('../config/config.json');
const http = require('request');
const apiOptions = {
  server: "http://localhost:3002"
};
module.exports.getIndex = (req, res, next) => {
  const pathApi = '/api/avatar';
  const requestOptions = {
    url: apiOptions.server + pathApi,
    method: "GET"
  };
  const sendObj = {
    title: 'Главная страница',
    msg: req.query.msg
  };
  http(requestOptions, function (error, response, body) {
    res.render('pages/index', Object.assign(sendObj, JSON.parse(body)));
  })
};

module.exports.sendEmail = (req, res) => {
  //требуем наличия имени, обратной почты и текста
  if (!req.body.name || !req.body.email || !req.body.text) {
    //если что-либо не указано - сообщаем об этом
    return res.redirect('/?msg=Все поля нужно заполнить!');
  }
  //инициализируем модуль для отправки писем и указываем данные из конфига
  const transporter = nodemailer.createTransport(config.mail.smtp);
  const mailOptions = {
    from: `"${req.body.name}" <${req.body.email}>`,
    to: config.mail.smtp.auth.user,
    subject: config.mail.subject,
    text: req
      .body
      .text
      .trim()
      .slice(0, 500) + `\n Отправлено с: <${req.body.email}>`
  };
    //отправляем почту
    transporter.sendMail(mailOptions, function (error, info) {
      //если есть ошибки при отправке - сообщаем об этом
      if (error) {
        return res.redirect('/?msg=При отправке письма произошла ошибка: ' + error.message);
      }
      res.redirect('/?msg=Письмо успешно отправлено');
    });
};
