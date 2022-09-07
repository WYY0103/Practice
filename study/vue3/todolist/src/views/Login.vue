<template>
  <div class="login">
    <h2>欢迎进入XXX后台管理系统</h2>
    <form @submit.prevent="onSubmit">
      <div>
        <!-- 给用户名的输入框 绑定ref。当用户登录失败时，让其得到焦点 -->
        <input
          type="text"
          placeholder="用户名..."
          v-model="username"
          required
          ref="usernameIpt"
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="密码..."
          v-model="password"
          required
        />
      </div>
      <div><button>登录</button></div>
    </form>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance, onMounted } from 'vue';
import { useRouter } from 'vue-router';

// 获取当前组件的实例
// getCurrentInstance方法返回的对象中proxy属性 存储就是当前组件实例
// refs 是 该组件中 通过ref绑定所有标签元素
const { proxy: currrentComponent } = getCurrentInstance();
// 获取路由实例router，用于编程式导航
const router = useRouter();

const username = ref('');
const password = ref('');

// 表单提交
const onSubmit = () => {
  // console.log('submit');
  console.log(username.value, password.value);
  // 发送网络请求 将数据提交给后台
  currrentComponent
    .$http({
      url: '/api/login', // 请求的后台地址
      data: {
        name: username.value,
        password: password.value,
      },
      method: 'POST',
    })
    .then(({ data }) => {
      console.log(data);
      // 请求成功，data为后台给的数据
      alert(data.msg);

      if (data.code == 200) {
        // 登录成功  将后台返回的用户信息 以键名user存储在 sessionStorage 中
        let userInfo = JSON.stringify(data.data);
        sessionStorage.setItem('user', userInfo);
        // 最后 跳转页面到主页
        router.push('/');
      } else {
        // 登录失败 让输入用户名的输入框得到焦点
        currrentComponent.$refs.usernameIpt.focus();
      }
    })
    .catch((err) => {});
};

// 当组件渲染后，让用户名的输入框得到焦点
onMounted(() => {
  console.log(currrentComponent);
  currrentComponent.$refs.usernameIpt.focus();
});
</script>
