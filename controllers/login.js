const http = require('request');
var express = require('express');
var router = express.Router();
const apiOptions = {
  server: "http://localhost:3000"
};

module.exports.getLoginPage = (req, res, next) => {
  if (req.session.isAdmin) {
    return res.redirect('/admin');
  }
  res.render('pages/login', {
    title: 'Авторизация',
    msg: req.query.msg
  });
}

module.exports.authorization = function (req, res) {
  //требуем наличия логина и пароля в теле запроса
  if (!req.body.login || !req.body.password) {
    //если не указан логин или пароль - сообщаем об этом
    return res.redirect('/?msg=Все поля обязательны к заполнению!');
  }

  const pathApi = '/user';
  const requestOptions = {
    url: apiOptions.server + pathApi,
    method: "POST",
    json: {
      login: req.body.login,
      password: req.body.password
    }
  };
  http(requestOptions, function (error, response, body) {
    if (body.status === 'err') {
      return res.redirect(`/?msg=${body.message}`);
    }
    // если найден, то делаем пометку об этом в сессии пользователя, который сделал
    req.session.isAdmin = true;
    res.redirect('/admin');


  });
};