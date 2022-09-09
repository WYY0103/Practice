<template>
    <section class="main">
        <input id="toggle-all" type="checkbox" class="toggle-all" @change="toggleAll"
            :checked="todoStore.isAllCompleted" />
        <label for="toggle-all"></label>
        <ul class="todo-list">
            <li class="todo" v-for="todo in filterTodos" :key="todo.id" :class="{completed:todo.status}">
                <div class="view">
                    <input type="checkbox" class="toggle" v-model="todo.status" />
                    <label>{{todo.title}}</label>
                    <button class="destroy" @click="deleteTodo(todo.id)"></button>
                </div>
            </li>
        </ul>
    </section>
</template>

<script lang="ts" setup>
import { computed } from '@vue/reactivity';
import { storeToRefs } from 'pinia';
import { useTodoStore } from '../../stores/todos';
const todoStore = useTodoStore();
const { filterTodos } = storeToRefs(todoStore);

const deleteTodo: (id: number) => void = (id: number): void => {
    if (confirm('确定删除代办？')) {
        let res = todoStore.deleteTodo(id);
        if (res) {
            alert("删除代办成功");
        } else {
            alert('删除代办失败');
        }

    }
}
const toggleAll: (e: Event) => void = function (e: Event) {
    let checked: boolean = (e.target as HTMLInputElement).checked;
    todoStore.toggleAllTodos(checked);
}
// const isAllCompleted = computed<boolean>(() => {
//   return (
//     todoStore.todos.length > 0 &&
//     todoStore.todos.length === todoStore.completedTodos.length
//   );
// });



</script>;