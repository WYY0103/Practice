
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

# 组件

一 、组件中传递数据
1 在Vue3中 直接使用defineProps函数去接收别的组件传递的属性 父给子传递
父组件
<!-- <MyInput type="password" placeholder="请输入密码..." /> -->
子组件
<!-- const props = defineProps(['placeholder', 'type']); -->
<!-- <input :type="type" :placeholder="placeholder" /> -->

2 插槽传递数据 通过内容区来传递 父给子传递
mybutton子组件 home父组件
home组件
<!--<mybutton>保存</mybutton> -->
mybutton组件
<!--<button><slot></slot></button> -->
这样父组件中内容区域的内容会传递到子组件中，同时父组件中可以添加属性，会自动绑定到子组件的根节点上面
<!-- <mybutton type="password">保存</mybutton> -->
子组件中可以获取该属性来添加样式：<!--button[type='info']{} -->

二、组件中传递函数
1 子组件内部触发父组件给子组件绑定的那些事件，需要在子组件内部使用defineEmits函数先定义一遍这些事件,之后在点击子组件的时候通过emit来触发父组件的事件
（emit(event-name, 给事件处理函数传入数据)）
子组件
<!-- const emit = defineEmits(['submit', 'click','xxxx']) -->
<!-- <button @click="onButtonClick"></button> -->
<!-- 
    function onButtonClick() {
    emit('submit', 12);
    } 
-->
父组件
<!-- <MyButton type="error" @submit="onSubmit" @click="onSave" /> -->
<!-- function onSubmit() {} -->

# 依赖注入 某一组件声明的数据任何一个组价都可获取，无需一层一层向下传递（所谓的这种依赖注入是一级一级的关系才可以上下随便传递 比如爷爷-父亲-孙子，若是二爷给孙子传递，则不可以，不可以出现交叉的数据传递 因为爷爷和二爷是兄弟关系）

注意：组件间这种注入是直系之间可以，兄弟之间是不允许向下给其他兄弟传递
1 在提供数据的组件共享数据，使用数据的组件注入进行使用
2 共享数据的函数provide 两个参数（注入的时候的名，共享的值）
<!-- provide('shareData', shareData); -->
3 注入的函数inject 通过共享的名字注入
<!-- const data = inject('shareData') -->
4 共享的数据为响应式，那么注入的数据也是响应式

# pinia

1 就是vue2中的vuex，不过用法与vuex有所不同
2 与vuex一样，包括state，getters，actions
3 与vuex不同的是，没有mutation，在用actions里面的方法时，就直接引用即可，无需dispatch。
4 使用步骤
（1）在store文件下创建仓库文件，对外暴露仓库
（2）export const usexxxStore = defineStore({
  state:()=>({}),
  getters:()=>({}),
  actions:()=>({})
})
（3）在使用仓库的地方
import { useCounterStore } from '../stores/counter';
const counterStore = useCounterStore();
直接使用里面的state和action
<!-- <p>{{counterStore.counter}}</p> -->
<!-- <button @click="counterStore.increment()">+</button> -->
（4）也可以将仓库中的状态解构出来
解构state、getters：const { counter, doubleCount } = storeToRefs(counterStore);
解构action：const { increment } = counterStore;

# vue3+ts
