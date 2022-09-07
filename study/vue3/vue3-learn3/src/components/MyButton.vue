<template>
  <button @click="onButtonClick">
    <slot>默认值</slot>
  </button>
</template>
<script setup>
import { defineEmits } from 'vue';
// 如果在子组件内部去触发父组件所绑定的那些事件
//   我们需要在子组件内部使用defineEmits函数先定义一遍这些事件
const emit = defineEmits(['submit', 'click']);

// emit函数用于触发事件
// emit(event-name, 给事件处理函数传入数据)

function onButtonClick() {
  // emit('submit');
  emit('click', 12);
}

console.log(emit);
</script>
<style scoped>
button {
  border: 1px solid transparent;
  outline: none;
  background-color: #fff;
  cursor: pointer;
  border-radius: 4px;
  min-width: 60px;
  font-size: 16px;
  color: #333;
  transition: all linear 0.3s;
}
button[type='info'] {
  border-color: #ccc;
}

button[type='info']:hover {
  opacity: 0.8;
}

button[type='error'] {
  color: red;
  border-color: red;
}

button[type='error']:hover {
  background-color: red;
  color: #fff;
}
</style>
