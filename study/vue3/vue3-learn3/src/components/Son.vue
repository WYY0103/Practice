<template>
  <div class="son">
    <h3>Son</h3>
    <p>这是AboutView给我的数据：{{ data }}</p>
    <p>
      <!-- 在事件处理程序中，ref类型数据也会自动解包 -->
      <button @click="data = '这是修改后的数据，给son'">修改共享数据</button>
    </p>
    <p>
      他二爷能共享数据吗：<span :style="{ color: 'red', fontWeight: 700 }">{{
        gp2 ? 'YES' : 'NO'
      }}</span>
      -- {{ gp2 }}
    </p>
  </div>
</template>
<script setup>
// import { defineProps } from 'vue';
// defineProps(['toSon']);
import { inject } from 'vue';
// 由于 在AboutView中，共享的数据shareData类型为响应式的
//  那么，在后代组件中，注入依赖后，数据会不会保持响应式？？？
const data = inject('shareData');

console.log(data); // 注入依赖的数据 是否 依旧为ref类型
const gp2 = inject('gp2'); // 注入依赖失败 得到的值为undefined
</script>
<style>
.son {
  width: 300px;
  height: 300px;
  margin: auto;
  border: 1px solid red;
}
</style>
