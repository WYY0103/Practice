import { defineStore } from 'pinia';

// 创建仓库时use开头store结尾 中间是仓库名称
export const useCounterStore = defineStore({
  id: 'counter', // 状态的身份标识，具有唯一性。可有可无，若有必须唯一
  // 与vuex 中state 一样，用来存储所有状态信息
  state: () => ({
    counter: 0,
  }),
  // 与 Vuex 中getters一样，基于状态的派生状态
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  // 修改状态的
  actions: {
    increment() {
      this.counter++;
    },
    reduce() {
      this.counter--;
    },
    addBy(by) {
      this.counter += by;
    },
  },
});
