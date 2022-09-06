<template>
  <div>{{ fullname }}</div>
</template>

<script setup>
import { reactive } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";

let name = reactive({
  fullname: "li",
  firstname: "si",
});

let fullname = computed(() => {
  return name.fullname + name.firstname;
});
</script>

<style>
</style>

