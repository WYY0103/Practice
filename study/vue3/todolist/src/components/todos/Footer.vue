<template>
    <footer class="footer">
        <span class="todo-count" v-show="todoStore.activeTodosCount!=0">
            <strong>{{todoStore.activeTodosCount}}</strong>
            项进行中
        </span>
        <ul class="filters">
            <li>
                <a href="#/all" :class="{Selected:TodoCate.All == todoStore.type}"
                    @click="todoStore.setType(TodoCate.All)">所有</a>
            </li>
            <li>
                <a href="#/active" :class="{Selected:TodoCate.Active == todoStore.type}"
                    @click="todoStore.setType(TodoCate.Active)">进行中</a>
            </li>
            <li>
                <a href="#/completed" :class="{Selected:TodoCate.Completed == todoStore.type}"
                    @click="todoStore.setType(TodoCate.Completed)">已完成</a>
            </li>
        </ul>
        <button class="clear-completed" @click="deleteCompleted">
            清除已完成
        </button>
    </footer>
</template>

<script setup lang="ts">
import { useTodoStore, TodoCate } from '../../stores/todos';
const todoStore = useTodoStore();

const deleteCompleted: () => void = function (): void {
    todoStore.deleteCompleted();
}


</script>