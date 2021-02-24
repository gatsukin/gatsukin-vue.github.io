// Импортируем основное и плагины
import Vue from "vue"
import App from "./App.vue"
// import router from './router'

// Импорт компонентов
import MainPage from './views/MainPage'
import vDesign from './components/vDesign.vue'
import vFront from './components/vFront.vue'
import vBack from './components/vBack.vue'
import сRadioList from './components/сRadioList.vue'

// Регистрируем компоненты
Vue.component('main-page', MainPage)
Vue.component('design-view', vDesign)
Vue.component('front-view', vFront)
Vue.component('back-view', vBack)
Vue.component('radio-list-component', сRadioList)
// Даем добро на использовании VUE DEVTOOLS
// app.config.devtools = true

// Заключительный этап
// app.use(router).mount('#app')
new Vue({
  render: h => h(App),
}).$mount('#app')