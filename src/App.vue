<script setup lang="ts">
import { reactive } from "vue";
import useUserStore from "./store/user";
import { IUserLoginData } from "./type/index";
const userData = reactive<IUserLoginData>({
  username: "",
  password: "",
});

// 实例化 store
const userStore = useUserStore();

const onLogin = async () => {
  await userStore.login(userData);
  userData.username = "";
  userData.password = "";
};

const onLogout = () => {
  userStore.logout();
};

console.log('test')
</script>

<template>
  <div>
    <template v-if="userStore.token">
      {{ userStore.hello }}
      <br />
      <button @click="onLogout">退出</button>
    </template>
    <template v-else>
     用户名: <input v-model="userData.username"/>
     密码: <input  v-model="userData.password"  type="password"/>

     <button @click="onLogin">登录</button>
    </template>
  </div>
</template>

<style scoped></style>
