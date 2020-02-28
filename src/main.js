import Vue from 'vue'
import App from './App.vue'
import Page from './view/Page.vue'
import Thanks from './view/Thanks.vue'
import Navbar from './components/app/Navbar.vue'

import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./assets/css/style.less"
import Swiper from 'swiper'
import '../node_modules/swiper/css/swiper.min.css'

new Swiper('.swiper-container', {
  direction: 'vertical',
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  pagination: {

    clickable: true,
  },
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

new Vue({
  router,
  render: h => h(Page),
}).$mount('#page')

new Vue({
  router,
  render: h => h(Thanks),
}).$mount('#thanks')

new Vue({
  router,
  render: h => h(Navbar),
}).$mount('#Navbar')