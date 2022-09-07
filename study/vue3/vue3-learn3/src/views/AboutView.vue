<template>
  <div class="about">
    <h3>AboutView</h3>
    <!-- kebab-case -->
    <!-- <Grandpa :to-son="shareData" /> -->
    <Grandpa />
    <Grandpa2 />
  </div>
</template>
<script setup>
import { ref, provide } from 'vue';
import Grandpa from '../components/Grandpa.vue';
import Grandpa2 from '../components/Grandpa2.vue';
let shareData = ref('这是传递给son的数据');

// 向其后代组件 共享数据
provide('shareData', shareData); // 共享数据的类型为ref（reactive）类型--属于响应式
provide('toParent', 'AboutView 2 Parent');
</script>

<style>
h3 {
  text-align: center;
}
</style>
