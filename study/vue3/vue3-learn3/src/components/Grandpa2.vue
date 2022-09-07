<template>
  <div class="gp2">
    <h3>Grandpa2</h3>
  </div>
</template>

<script setup>
import { provide } from 'vue';

provide('gp2', '这个可以吗');
</script>

<style>
.gp2 {
  border: 1px solid hotpink;
  margin-top: 10px;
}
</style>
