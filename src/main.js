// Импортируем основное и плагины
import {
  createApp
} from 'vue'
import App from "./App.vue"
import router from './router'

// Импорт компонентов
// import MainPage from './views/MainPage'
// import NavBar from './components/NavBar'
// import ProfileModal from './components/modal/ProfileModal'
// import SettingsModal from './components/modal/SettingsModal'
// import SettingsForm from './components/SettingsForm'

const app = createApp(App)


// Регистрируем компоненты
// app.component('main-page', MainPage)
// app.component('nav-bar', NavBar)
// app.component('profile-modal', ProfileModal)
// app.component('settings-modal', SettingsModal)
// app.component('settings-form', SettingsForm)

// Даем добро на использовании VUE DEVTOOLS
app.config.devtools = true

// Заключительный этап
app.use(router).mount('#app')