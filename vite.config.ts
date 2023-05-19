import { ConfigEnv, defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { viteMockServe } from "vite-plugin-mock";

export default defineConfig(({ command }: ConfigEnv) => {

  console.log(command)
  return {
    plugins: [
      vue(),
      viteMockServe({
        mockPath:"./src/mock",
        enable: command === "serve",
      }),
    ],
  };
});
7