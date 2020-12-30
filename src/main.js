import {
  createApp
} from 'vue'
import App from "./App.vue"
// import router from "./router";

import HelloWorld from './views/HelloWorld'
import NavBar from './components/NavBar'
import ProfileModal from './components/modal/ProfileModal'
import SettingsModal from './components/modal/SettingsModal'
import SettingsForm from './components/SettingsForm'

const app = createApp(App)

app.component('hello-world', HelloWorld)
app.component('nav-bar', NavBar)
app.component('profile-modal', ProfileModal)
app.component('settings-modal', SettingsModal)
app.component('settings-form', SettingsForm)

app.config.devtools = true
app.mount('#app')