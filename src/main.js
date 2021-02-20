// Импортируем основное и плагины
import {
  createApp
} from 'vue'
import App from "./App.vue"
// import router from './router'

// Импорт компонентов
import MainPage from './views/MainPage'
import DesignView from './views/DesignView.vue'
import FrontView from './views/FrontView.vue'
import BackView from './views/BackView.vue'
import GeneralView from './views/GeneralView.vue'
import ListComponent from './components/ListComponent.vue'
const app = createApp(App)


// Регистрируем компоненты
app.component('main-page', MainPage)
app.component('general-view', GeneralView)
app.component('design-view', DesignView)
app.component('front-view', FrontView)
app.component('back-view', BackView)
app.component('list-component', ListComponent)
// Даем добро на использовании VUE DEVTOOLS
app.config.devtools = true

// Заключительный этап
// app.use(router).mount('#app')
app.mount('#app')