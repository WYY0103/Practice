<template>
  <div>
    <!-- vue2 组件实例含有一个$refs属性， -->
    <input type="text" placeholder="请输入..." ref="input" />
  </div>
</template>
<script setup>
import { ref, reactive, onMounted, getCurrentInstance } from 'vue';

// 第一种：使用ref
// let input = reactive(null); // null 不是通过reactive做成响应式的
// let input = ref(null); // {value: null}

const comp = getCurrentInstance(); // 获取组件的实例

onMounted(() => {
  // console.log(input);
  // input.value.focus(); // value属性存的就是 ref绑定的输入框，调用其focus方法来得到焦点

  console.log(comp);
  // 第二种：使用ref
  comp.refs.input.focus();
});
</script>
