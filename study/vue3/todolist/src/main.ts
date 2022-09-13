import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

import request from './api/request'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.config.globalProperties.$requests = request;

app.mount('#app')
