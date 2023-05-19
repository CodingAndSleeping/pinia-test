import axios, { AxiosResponse } from "axios";
import { StoreState, defineStore } from "pinia";
import { IUserLoginData, IUserResponse } from "../type/index";

// 创建 user Store
const useUserStore = defineStore("user", {
  // 定义状态；返回一个对象
  state: () => ({
    username: "",
    token: "",
  }),
  // 也可以这样定义
  //  state:()=>{
  //    return {
  //        username: "",
  //        token: "",
  //    }
  //  }
  // 定义geters，与计算属性类似
  getters: {
    hello: (state: StoreState<{ username: string; token: string }>) =>
      "Hello!" + state.username,
  },
  // 定义actions，有同步和异步两种类型
  actions: {
    async login(userData: IUserLoginData): Promise<void> {
      const res: AxiosResponse = await axios.post("/api/user/login", userData);
      const { data, code } = res.data as IUserResponse;

      if (code === 0) {
        this.username = data.username;
        this.token = data.token;
      }
    },

    logout() {
      this.token = "";
      this.username = "";
    },
  },
});

export default useUserStore;
