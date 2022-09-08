<script setup lang="ts"></script>
<template>
  <main>
    <h3>用户管理</h3>
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
        <!-- <tr v-for="(user, i) in userStore.list" :ket="user.id">
          <td>{{ i + 1 }}</td>
          <td class="avatar">
            <img
              :src="user.avatar"
              alt="avatar"
              :style="{ width: '50px', height: '50px', borderRadius: '50%' }"
            />
          </td>
          <td>{{ user.name }}</td>
          <td>{{ user.sex === '1' ? '男' : '女' }}</td>
          <td>{{ user.age }}</td>
          <td>
            <button>编辑</button>
            <button>删除</button>
          </td>
        </tr> -->
      </tbody>
    </table>
  </main>
</template>

<style scoped>
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
