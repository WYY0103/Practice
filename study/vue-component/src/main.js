import Vue from 'vue'
import App from './App.vue'

import router from './route.js'
import {Input ,Button} from 'element-ui';

Vue.use(Input);
Vue.use(Button);


new Vue({
  router,
  render: h => h(App),
}).$mount('#root')
