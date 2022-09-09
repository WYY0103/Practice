<template>
    <header class="header">
        <h1>todos</h1>
        <input v-model.trim="title" autofocus autocomplete="off" placeholder="你想做点什么呢?" class="new-todo"
            @keyup.enter="addTodo" />
    </header>
</template>


<script lang="ts" setup>
import { ref } from 'vue';
import { useTodoStore } from '../../stores/todos';
import { storeToRefs } from 'pinia';
// 定义输入内容的类型  用类型断言
const title = ref<string>('');
const todoStore = useTodoStore();

const addTodo: () => void = function (): void {
    if(title.value ===''){
        alert("请输入正确的代办");
        return;
    }
    let res = todoStore.addTodo(title.value);
    if(res){
        alert("代办添加成功");
        title.value = '';
    }else{
        alert('代办添加失败');
    }
}
</script>