
# vue3

# 代码结构
<!-- 
<script setup>
</script>

<template>
</template>

<style>
</style> 
-->

# setup 新增的生命周期

1 setup是vue3中的一个新的配置项，值为一个函数，我们在组件中用到的数据、方法等等，都要配置在setup中。
2 setup 生命周期 在beforecreate之前执行，这时没有组件实例，无法使用this
3 作用 实现组合式API

# 实现响应式的方法

1 reactive方法
let state = reactive({count:0}) 对象
通过state.count获取

2 ref 参数既可以是值又可以是对象 最后返回一个对象 有一个value对象
ref 的原理：根据ref的类型进行拆包（在模板中）在代码中是没有拆包的
<!-- let msg = ref('haha'); -->  包装 {value :'haha'}
<!-- <h1>{{msg}}</h1> -->
<!-- <h1>{{msg.value}}</h1> -->

# 生命周期 函数的形式来实现

1 没有beforecreate和create 加入了setup
2 onMounted 挂载
3 onUnmounted 卸载
4 改名 onBeforeUnmount

# 获取组件实例

getCurrentInstance();

# 计算属性

函数 具有返回值
let fullName = computed(()=>{
    return xxxxx;
})
返回值是ref类型，可以实现响应式

# 监听watch

1 含义：状态变化时执行一些操作，在vue3中监听是一个函数
2 watch(监听的值,(newValue,oldValue)=>{})
3 监听的值可以是单个值，也可以是一个表达式，还可是数组
<!-- https://cn.vuejs.org/guide/essentials/watchers.html#basic-example -->
4 在监听reactive的值时，不可通过对象响应值的方式监听，要变成函数形式
const obj = reactive({ count: 0 });
watch(
  () => obj.count,
  (count) => {
    console.log(`count is: ${count}`);
  }
)

# 模板引用ref

两种方式
1 标签形式
<!--  <input ref="input"></input> -->
<!-- let input = reactive() || ref(null); --> null 不是通过reactive做成响应式的
<!-- input.value.focus();  -->value属性存的就是 ref绑定的输入框，调用其focus方法来得到焦点
2 获取组件实例
<!-- const comp = getCurrentInstance();  --> 获取组件的实例
<!-- comp.refs.input.focus(); -->
