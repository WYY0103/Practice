<script setup>
// 使用 pinia 中 counter状态仓库
import { storeToRefs } from 'pinia';
import { useCounterStore } from '../stores/counter';

const counterStore = useCounterStore();

// 错误示例：不能解构 counterStore，这样做 会打断响应式
// const { counter, increment, doubleCount } = counterStore; 
// 解构的话用storeToRefs来进行解构，只能解构state和getters
//  将对象转换成ref类型再进行解构，这样能保证响应式
const { counter, doubleCount } = storeToRefs(counterStore); 
// action里面的函数直接解构即可
const { increment } = counterStore;
</script>

<template>
  <main>
    <h1>计数器案例</h1>
    <div>你猜猜我会不会变化呢？{{ counter }} == {{ doubleCount }}</div>
    <div>
      <p>
        当前计数为：{{ counterStore.counter }}，其2倍值为：{{
          counterStore.doubleCount
        }}
      </p>

      <p>
        <!-- 内联的处理器方法  可传参-->
        <button @click="counterStore.increment()">+</button>
        <!-- 事件处理函数 -->
        <button @click="counterStore.reduce">-</button>
        <button @click="counterStore.addBy(10)">+10</button>
        <!-- 解构出来的函数 -->
        <button @click="increment">+1(会有问题吗)</button>
      </p>
    </div>
  </main>
</template>
