import { MockMethod } from "vite-plugin-mock";
import { IUserResponse } from "../type/user";

// 模拟数据接口
export default [
  {
    url: "/api/user/login",
    method: "post",
    response: (): IUserResponse => {
      return {
        code: 0,
        message: "success",
        data: {
          token: "Token",
          username: "ZT",
        },
      };
    },
  },
] as MockMethod[];


