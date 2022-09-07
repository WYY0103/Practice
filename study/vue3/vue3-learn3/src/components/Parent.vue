<template>
  <div class="parent">
    <h3>Parent</h3>
    <p>AboutView 给我的：{{ data }}</p>
    <p>
      <button @click="data = '嘎嘎新的数据'">Parent修改共享数据</button>
    </p>
    <!-- <Son :to-son="toSon" /> -->
    <Son />
  </div>
</template>
<script setup>
import Son from './Son.vue';
import { defineProps, inject } from 'vue';

defineProps(['toSon']);
const data = inject('toParent');
</script>
<style>
.parent {
  width: 400px;
  height: 400px;
  border: 1px solid blue;
  margin: auto;
}
</style>
