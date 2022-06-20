import { createApp } from 'vue'
import App from './App.vue'
import store from './vuex/store'
import router from '@/router/router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/styles/styles.scss'
import components from './components/UI'

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})
app
    .use(VueAxios, axios)
    .use(router)
    .use(store)
    .mount('#app')
