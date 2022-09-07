import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import http from './plugins/http';

import './assets/main.css';

const app = createApp(App);

app.use(router);

// use可以传入两个参数
// 参数1 为 插件对象
// 参数2 为 插件的配置选项
app.use(http, {});

app.mount('#app');
