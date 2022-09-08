import { createApp } from 'vue';
// 1 从pinia模块中，导出createPinia函数
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import './assets/main.css';

const app = createApp(App);

// 2 通过createPinia函数创建状态管理差价，并使用app实例的use方法安装一下该插件
app.use(createPinia());
app.use(router);

app.mount('#app');
