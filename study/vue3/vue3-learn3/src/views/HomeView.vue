<script setup>
import MyButton from '../components/MyButton.vue';
// 给按钮定义事件处理函数
function onSave(e) {
  console.log(e); // 在自定义事件里 不一定就是事件对象。可能为具体的一个数据值
  alert('您点击了保存按钮');
}

function onSubmit() {
  console.log('submit');
}
</script>

<template>
  <main>
    <button>新增</button>
    <!-- type="primary | info | warn | error | success" -->
    <MyButton type="info" @click.native="onSave">保存</MyButton>

    <MyButton type="error" @submit="onSubmit" @click="onSave" />
  </main>
</template>
