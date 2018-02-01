const http = require('request');
var express = require('express');
var router = express.Router();
const apiOptions = {
  server: "http://localhost:3000"
};


module.exports.authorization = function (req, res) {
  if (!req.body.login || !req.body.password) {
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
    req.session.isAdmin = true;
    res.redirect('/admin');
  });
};