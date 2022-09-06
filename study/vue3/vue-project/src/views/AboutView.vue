<template>
  <div class="about">
    <!-- <h1>This is an about page</h1> -->
    <p v-if="loading">loading.....</p>
    <p v-else>{{data}}</p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script setup>
import { onBeforeMount, onMounted } from "@vue/runtime-core";
import {ref} from "vue";

let data = ref('');
let loading = ref(true);
onBeforeMount(() => {
  console.log(1111);
});

onMounted(() => {
  console.log(2222);
  setTimeout(()=>{
    data.value = 'hhhhh';
    loading.value = false;
  },1000)
});
</script>
