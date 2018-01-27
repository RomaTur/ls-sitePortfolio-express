<template lang="pug">


block content
    .main
        - var title = 'Роман Турусов'
        - var page = 'index'
        include ../pug/config/mixins
        //- .parallax#parallax
        //-     .parallax__layer
        //-         img(src=`~img/mountains/originalCompressed/layer10.png`).parallax__layer-img.parallax__layer-img--sky
        //-     .parallax__layer
        //-         img(src=`~img/mountains/originalCompressed/layer9.png`).parallax__layer-img
        //-     .parallax__layer
        //-         img(src=`~img/mountains/originalCompressed/layer8.png`).parallax__layer-img
        //-     .parallax__layer#cloud__three
        //-         img(src=`~img/mountains/originalCompressed/layer7.png`).parallax__layer-img
        //-     .parallax__layer
        //-         img(src=`~img/mountains/originalCompressed/layer6.png`).parallax__layer-img
        //-     .parallax__layer
        //-         img(src=`~img/mountains/originalCompressed/layer5.png`).parallax__layer-img
        //-     .parallax__layer#cloud__two
        //-         img(src=`~img/mountains/originalCompressed/layer4.png`).parallax__layer-img
        //-     .parallax__layer
        //-         img(src=`~img/mountains/originalCompressed/layer3.png`).parallax__layer-img
        //-     .parallax__layer
        //-         img(src=`~img/mountains/originalCompressed/layer2.png`).parallax__layer-img
        //-     .parallax__layer#cloud__one
        //-         img(src=`~img/mountains/originalCompressed/layer1.png`).parallax__layer-img
        .welcome
            .flip__container
                .welcome__intro 
                    .person
                        .person__avatar
                            img(class='person__avatar-img' src='~img/avatar.png')
                        h1.person__name Роман Турусов
                        h2.person__desc Личный сайт веб-разработчика
                        ul.social
                            +listItem('', 'social', 'https://vk.com/id_r0mashka','vk')
                            +listItem('', 'social', 'https://github.com/RomaTur', 'github')
                            +listItem('', 'social', 'https://twitter.com/RoMan_111', 'tw')
                    ul.nav__pages
                        //- +listItem('Мои работы', 'nav', 'works.html')
                        router-link(
                            v-for="(page, index) in pages"
                            :key="index"
                            tag="li"
                            :to="page.route"
                            exact
                          ).nav__item
                            a.nav__link {{page.name}}
                        //- +listItem('Обо мне', 'nav', 'about.html')
                        //- +listItem('Блог', 'nav', 'blog.html')
                .login
                    form(action="/" method="POST" class="login__form")
                        .login__container
                            .login__title
                                .login__title-line
                                h2.login__title-text Авторизуйтесь
                                .login__title-line
                            .login__inputs
                                .login__inputs-row
                                    .login__img
                                        +svg('login__ico', 'login')
                                    input(type="text" name="login"   placeholder="Логин" class="login__input")
                                .login__inputs-row
                                    .login__img
                                        +svg('login__ico', 'password')
                                    input(type="password" name="password"   placeholder="Пароль" class="login__input")
                                .login__inputs-row
                                    label(for="isrobot" class="isrobot")
                                        input(type="checkbox" id="isrobot" name="isrobot")
                                        .isrobot__square
                                            +svg('isrobot__check', 'check')
                                        h6.isrobot__title Я человек
                                .login__inputs-row
                                    .login__robotsure-title Вы точно не робот?
                                    label(for="yesrobot" class="robotsure")
                                        input(type="radio", name="surerobot" id='yesrobot' value="yes")
                                        .robotsure__custom
                                            .robotsure__circle
                                                .robotsure__circle-inner
                                            h6.robotsure__title Да
                                    label(for="norobot" class="robotsure")
                                        input(type="radio", name="surerobot" value="no" id="norobot")
                                        .robotsure__custom
                                            .robotsure__circle
                                                .robotsure__circle-inner
                                            h6.robotsure__title Не уверен
                            

                        .login__buttons
                            .login__buttons-main На главную
                            .login__buttons-submit 
                                button(type="submit" class="login__buttons-button" @click='auth') 
                                    div Войти





            a.welcome__login-button(href='#') Аторизоваться
            .welcome__footer <span class='welcome__footer-name'>© Роман Турусов</span> <span class='welcome__footer-line'>|</span> создано с любовью в LoftSchool | 2018
    
</template>

<script>
// import parallaxBg from '../../modules/parallaxMountains'
import flipLoginForm from '../../modules/flipLoginForm'
import animatePreloader from '../../modules/animatePreloader'
import swal from 'sweetalert'

export default {
  data: () => ({
    pages: [
      { name: 'Обо мне', route: '/about' },
      { name: 'Блог', route: '/blog' },
      { name: 'Мои работы', route: '/works' }
    ],
    allInputsFilled: false
  }),
  methods: {
      auth(event){
          event.preventDefault()
          let loginInputs = document.querySelectorAll('.login__input')
          let isrobotTitle = document.querySelector('.isrobot__title')
          let robotsureTitles = document.querySelectorAll('.robotsure__title')
          let flag = false
            let preventThis = () => {
              loginInputs.forEach(input => {
                 input.style.borderColor = 'red' 
              });
              isrobotTitle.style.color = 'red'
              robotsureTitles.forEach(robotsureTitle => {
                  robotsureTitle.style.color = 'red'
              });
              flag = true
          }
        
            loginInputs.forEach(input => {
                if(input.value === '') preventThis()
              });
          if(!document.querySelector('#isrobot').checked) preventThis()
          if(!document.querySelector('#yesrobot').checked) preventThis()
          if(!document.querySelector('#isrobot').checked) preventThis()
          
          if(!flag){
              function toJSONString(form) {
                  var obj = {}
                  var elements = form.querySelectorAll('input, select, textarea')
                  for (var i = 0; i < elements.length; ++i) {
                    var element = elements[i]
                    var name = element.name
                    var value = element.value
                    if (name) {
                      obj[ name ] = value
                    }
                  }
                  return JSON.stringify(obj)
                }
              const form = document.querySelector('.login__form')
              const json = toJSONString(form)
              const formReq = new XMLHttpRequest()
              formReq.open('POST', '/user', true)
              formReq.onload = function(oEvent) {
                if (formReq.status === 400 || formReq.status === 404) {
                 document.querySelector('.login').style.opacity = '0'
                  swal({
                    title: 'Неверный логин или пароль!',
                    icon: 'error',
                    button: {
                      text: 'OK',
                      value: true,
                      visible: true,
                      className: 'swal-button',
                      closeModal: true
                    }
                    // timer: 2000
                  }).then(()=>{
                    document.querySelector('.login').style.opacity = '1'
                  })
                  document.querySelector('.swal-button--confirm').style.background = '#00bfa5'
                preventThis()
                }
                if(formReq.status === 200){
                    form.submit()
                }
              }
              formReq.setRequestHeader('Content-Type', 'application/json')
              formReq.send(json)
            
          }
      }
  },
  mounted(){
      animatePreloader()
      flipLoginForm('welcome__login-button', 'login__buttons-main', 'flip__container'); //flip container need to be a class
    //   parallaxBg(); //запуск скрипта инициализации паралакса
    // let submitButton = document.querySelector('.login__buttons-button')
  }
}
</script>


<style lang="sass" src='../sass/index.sass' scoped></style>