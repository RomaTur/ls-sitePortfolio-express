import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import fullMenu from './modules/fullMenu'
// import mapInit from './modules/maps'
// import flipLoginForm from './modules/flipLoginForm'
// import skillProgressInit from './modules/skillProgressInit'
// import blogSideBar from './modules/blogSideBar'
import svg4everybody from 'svg4everybody'
// import parallaxBg from './modules/parallaxMountains'
// import smoothScrollClick from './modules/smothScrollClick.js'
// import animatePreloader from './modules/animatePreloader'
// import slider from './modules/slider'
// import test from './modules/test'
// import form from './modules/form'
// import blurForm from './modules/blurForm'
// import jump from 'jump.js'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

const domready = function () {
  // DOM дерево загрузилось

  console.log('entry start')
  svg4everybody()
  // запуск скрипта чтобы все внешние подключения svg были кроссбраузерными
  document.querySelector('.body').style.overflowX = 'hidden'

  console.log('entry done')
}

// //////////domready/////////////
if (document.readyState === 'complete' ||
    (document.readyState !== 'loading' && !document.documentElement.doScroll)) {
  domready()
} else {
  document.addEventListener('DOMContentLoaded', domready)
}
