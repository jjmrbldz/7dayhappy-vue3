import './assets/css/bootstrap.min.css'
import './assets/css/all.min.css'
import '../node_modules/nprogress/nprogress.css' 
import './assets/main.css'
import './assets/css/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
