import {
  createApp
} from 'vue'
import App from "./App.vue"
// import router from "./router";

import HelloWorld from './components/HelloWorld'
import NavBar from './components/NavBar'
import ProfileModal from './components/modal/ProfileModal'
const app = createApp(App)

app.component('hello-world', HelloWorld)
app.component('nav-bar', NavBar)
app.component('profile-modal', ProfileModal)

app.mount('#app')