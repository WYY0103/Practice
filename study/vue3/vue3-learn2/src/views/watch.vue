<template>
  <div>
    <h1>name:{{ fullname }}</h1>
  </div>
</template>

<script setup>
import { reactive, ref, watch } from "vue";

const name = reactive({
  lastname: "li",
  firstname: "si",
});

const fullname = ref("li si");

watch(name, (newValue, oldValue) => {
  fullname.value = `${newValue.lastname} ${newValue.firstname}`;
});
</script>

