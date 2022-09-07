<script setup>
import { reactive, ref } from "vue";
let contant = ref('');
let todos = reactive([]);

function onKeyUp() {
  addTodo();
}
function addTodo() {
  let todovalue = contant.value.trim();
  if (todovalue) {
    todos.push(todovalue);
  } else {
    alert("error");
  }
  contant.value = '';
}
</script>

<template>
  <main>
    <input
      type="text"
      placeholder="输入代办名称"
      v-model="contant"
      @keyup.enter="onKeyUp"
    />
    <input type="button" value="新增" @click="addTodo" />
    <ul>
      <li v-for="todo in todos" :key="todo"> {{todo}}</li>
    </ul>
  </main>
</template>
