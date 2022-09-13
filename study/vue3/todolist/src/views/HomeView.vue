<template>
  <main>
    <h3 :style="{
        textAlign: 'center',
        marginBottom: '8px',
        fontWeight: 700,
        fontSize: '18px',
      }">
      用户管理
    </h3>
    <div class="insert-user">
      <form @submit.prevent="onSubmit">
        <div class="form-item">
          <div class="form-col">
            <label>用户名：</label>
            <input
              type="text"
              placeholder="用户名..."
              v-model="form.name"
              required
              autofocus
            />
          </div>
          <div class="form-col">
            <label>密码：</label>
            <input
              type="password"
              placeholder="密码..."
              v-model="form.password"
              required
            />
          </div>
        </div>
        <div class="form-item">
          <div class="form-col">
            <label>性别：</label>
            <select v-model="form.sex">
              <option :value="1">男</option>
              <option :value="0">女</option>
            </select>
          </div>
          <div class="form-col">
            <label>年龄：</label>
            <input
              type="number"
              placeholder="密码..."
              v-model="form.age"
            />
          </div>
        </div>
        <div class="form-item">
          <div class="form-col"></div>
          <div class="form-col align-right">
            <input
              type="submit"
              value="新增"
            />
          </div>
        </div>
      </form>
    </div>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>头像</th>
          <th>用户名</th>
          <th>性别</th>
          <th>年龄</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(user, i) in userStore.list"
          :key="user.id"
        >
          <td>{{ i + 1 }}</td>
          <td class="avatar">
            <img
              :src="user.avatar"
              alt="avatar"
              :style="{ width: '50px', height: '50px', borderRadius: '50%' }"
            />
          </td>
          <td>{{ user.name }}</td>
          <td>{{ user.sex == 1 ? '男' : '女' }}</td>
          <td>{{ user.age }}</td>
          <td>
            <button>编辑</button>
            <button @click="onDelete(user.id)">删除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script lang="ts" setup>
import { useUserStore } from "../stores/users";
import { onMounted, reactive } from "vue";

const userStore = useUserStore();

onMounted(() => {
  userStore.fetchAllUser();
});

function onDelete(id: number) {
  if (confirm("确定删除当前用户吗？")) {
    userStore.removeUser(id);
  }
}

// 声明输入用户信息的表单信息  类型为IFormUser
const form = reactive<IFormUser>({
  name: "",
  password: "",
  sex: 1,
  age: 0,
});

// 重置函数
function resetForm() {
  form.name = "";
  form.password = "";
  form.sex = 1;
  form.age = 0;
}

// 提交表单时添加用户信息并重置表单
function onSubmit() {
  userStore.insertUser(form);
  resetForm();
}
</script>

<style scoped>
/* 新增用户 start */
.insert-user {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 0 3px #ccc;
}

.form-item {
  display: flex;
  margin-top: 8px;
}

.form-item .form-col {
  width: 50%;
}

.form-item input:not([type="submit"]) {
  width: 120px;
}

.form-item label {
  display: inline-block;
  width: 60px;
  text-align: right;
}

.form-item select {
  width: 120px;
}

.align-right {
  text-align: right;
}
/* 新增用户 end */
main table {
  border-collapse: collapse;
  min-width: 400px;
}

table th {
  padding: 0 8px;
  text-align: left;
  font-size: 20px;
  font-weight: 700;
}

table tr {
  cursor: pointer;
  height: 68px;
  border-top: 1px solid var(--jjext-color-input-bg);
}

table thead tr:first-child {
  border: 0;
}

table tbody tr:hover {
  background-color: var(--jjext-color-font-brand-4);
}

table td {
  padding: 0 8px;
  vertical-align: middle;
}

.avatar {
  font-size: 0;
}
</style>
