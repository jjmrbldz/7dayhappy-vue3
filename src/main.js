import './assets/css/bootstrap.min.css'
import '../node_modules/nprogress/nprogress.css' 
import './assets/css/all.min.css'
import './assets/main.css'
import './assets/css/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faArrowRightLong, faArrowLeftLong, faPlay } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret,
            faArrowRightLong,
            faArrowLeftLong,
            faPlay
        )

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
