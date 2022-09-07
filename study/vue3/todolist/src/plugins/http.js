import axios from 'axios';
// Vue插件 本质 就是 一个Object对象。但是必须具有一个install方法。
// install(app, options)方法具有两个参数:
// 1 app 就是 Vue的应用实例
// 2 options 就是插件的配置选项
export default {
  install(app, options) {
    // 给所有组件添加一个实例方法，用来发送网络请求
    let defaultSetting = {
      baseURL: '', // 基础路劲
      timeout: 3000, // 请求的超时时间
      headers: { 'Content-Type': 'application/json;charset=utf-8' }, // 请求体数据类型为json
    };
    const instance = axios.create({ ...defaultSetting, ...options });
    app.config.globalProperties.$http = instance;
  },
};
