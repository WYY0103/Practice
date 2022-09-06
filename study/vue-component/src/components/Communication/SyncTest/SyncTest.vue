<template>
  <div>
    小明的爸爸现在有{{ money }}元
    <h2>不使用sync修改符</h2>
    <!-- 给子组件绑定一个自定义事件:update:money -->
    <!-- <Child :money="money"  @update:money="handler"></Child> -->
    <h2>使用sync修改符</h2>
    <!-- 
      :money.sync的含义
      第一，父组件给子组件传递了props money
      第二，给当前子组件绑定了一个自定义事件,而且事件名称即为update:money
     -->
    <Child :money.sync="money"></Child>
    <hr />
  </div>
</template>

<script type="text/ecmascript-6">
import Child from "./Child.vue";
import Child2 from "./Child2.vue";
export default {
  name: "SyncTest",
  components: {
    Child,
    Child2,
  },
  data() {
    return {
      money: 10000,
    };
  },
  methods: {
    handler(money) {
      this.money = money;
    },
  },
};
</script>
