import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'),
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
  ],
});

// 添加路由的全局前置守卫
//   拦截所有路由导航，判断用户是否登录
//   如果登录，就放行。否则就跳转到登录页面
router.beforeEach((to, from, next) => {
  // to 要导航到的目标路由，from 是离开的路由，next是一个函数，根据参数的不同，表示不同功能
  // 本地存储 -- localStorage；会话存储 -- sessionStorage； Cookie
  // 存储用户信息时，用sessionStorage存储，同时存储的值类型为json字符串
  // 具体实现
  // 获取用户信息，如果登录了就有，没有登录的话就不存在
  let user = sessionStorage.getItem('user'); // 使用getItem方法获取对应key的值,返回值为json字符串 | null
  if (to.name == 'login') {
    // 如果目标路由的名称 为 login，表示去登录页面
    if (user == null) {
      // 此时用户没有登录
      next(); // 放行--让你去登录页面
    } else {
      // 用户已经登录过，不比在登录一遍，直接调到主页即可
      next('/'); // 传入的参数是一个路由路劲，next功能为 导航到新的路由
    }
  } else {
    // 目标路由不是登录页面
    if (user == null) {
      // 也没有登录过，去等路页面吧
      next('/login');
    } else {
      // 登录了同时去的也不是登录页面
      next(); // 放行
    }
  }
});

export default router;
