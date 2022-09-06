<script setup>
import { reactive, ref } from "vue";
// setup 生命周期--beforecreate和create之间执行
// 作用：实现组合式API
// 不能用this

// 1 vue3中定义的变量或者函数 都可以直接在template中使用
//let msg = "hello";//不是响应式代码（数据变页面变）
// vue3中实现响应式 两种方法
// 1.a : reactive方法(对象形式)
let state = reactive({ count: 0 });
function add() {
  state.count++;
}
// 2 ref 参数既可以是值又可以是对象
// ref 的原理：根据ref的类型进行拆包（在模板中）
let msg = ref("haha");
function change() {
  msg.value = "lk";
}
</script>

<template>
  <!-- 模板中无需有一个大的div包裹 可以并排存在dom元素 -->
  <div>
    <h1>{{ state.count }}</h1>
    <button @click="add">click</button>

    <h1>{{ msg }}</h1>
    <button @click="change">click</button>
  </div>
</template>
