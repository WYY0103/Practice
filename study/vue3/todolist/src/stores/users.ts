import { defineStore } from 'pinia'
import { getAllUser, removeUserById, insertUser } from '../api/user'

export const useUserStore = defineStore({
  id: 'users',
  state: () => ({
    list: [] as IUser[],
  }),
  actions: {
    // 获取用户信息
    async fetchAllUser() {
      let { data } = await getAllUser().catch((err: any) => err)

      if (data && data.code === 200) {
        this.list = data.data
      }
    },
    async removeUser(id: number) {
      let { data } = await removeUserById(id).catch((err: any) => err)

      if (data && data.code === 200) {
        // 删除成功的话
        this.fetchAllUser() // 重新加载数据
      }

      alert(data.msg)
    },
    async insertUser(user: IFormUser) {
      let { data } = await insertUser(user).catch((err: any) => err)

      if (data && data.code === 200) {
        // 新增成功的话
        this.fetchAllUser(); // 重新加载数据
      }

      alert(data.msg)
    },
  },
})
