<template>
  <div class="my-input">
    <!-- 直接写props属性也可以 -->
    <!-- 或者通过setup中props变量里的属性绑定也可以 -->
    <input :type="type" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  // 这是vue2做法
  // props: ['type'], // 一旦使用defineProps定义属性后，这里的写法会失效
};
</script>

<script setup>
import { defineProps } from 'vue';
// 在Vue3中 直接使用defineProps函数去定义组件属性，返回定义后的所有属性
const props = defineProps(['placeholder', 'type']);
</script>

<style scoped>
.my-input {
  height: 28px;
  width: 180px;
  border: 1px solid #ccc;
  padding: 0 8px;
  border-radius: 4px;
  transition: all ease-in-out 0.3s;
}

.my-input input {
  height: 100%;
  width: 100%;

  color: #333;
  font-size: 18px;

  border: 0;
  outline: none;
}

.my-input:hover {
  border-color: #1e90ff;
}
</style>
