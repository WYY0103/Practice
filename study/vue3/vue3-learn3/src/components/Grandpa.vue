<template>
  <div class="grandpa">
    <h3>Grandpa</h3>
    <!-- <Parent :to-son="toSon" /> -->
    <Parent />
  </div>
</template>
<script setup>
import { defineProps } from 'vue';
import Parent from './Parent.vue';
// js代码 中，将kebab-case命名的属性 转换成 等价的 camelCase。
defineProps(['toSon']);
</script>
<style>
.grandpa {
  width: 500px;
  height: 500px;
  border: 1px solid blueviolet;
  margin: auto;
}
</style>
