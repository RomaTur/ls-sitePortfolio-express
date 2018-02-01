import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import svg4everybody from 'svg4everybody'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

const domready = function () {
  svg4everybody()
  document.querySelector('.body').style.overflowX = 'hidden'
}
// //////////domready/////////////
if (document.readyState === 'complete' ||
    (document.readyState !== 'loading' && !document.documentElement.doScroll)) {
  domready()
} else {
  document.addEventListener('DOMContentLoaded', domready)
}
