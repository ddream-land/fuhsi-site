// 后台相关配置
import { defineStore } from "pinia";
import { ElMessage } from "element-plus";

export const adminConfig = defineStore("adminConfig", {
  state: () => {
    return {
      // 后台配置
      adminConfig: {
        title: "pangu-network"
      },
      // main盒状态
      pageState: true,
      // 设置抽屉配置
      sideDrawerConfig: {
        state: false,
        theme: {
          isType: "light",
          list: [
            {
              type: "light",
              main: "#B09573",
              secondary: "#49443D",
            },
          ],
        },
        // 路由标签
        routingTab: { state: true },
      },
    };
  },
  actions: {
    // 后台配置获取
    adminConfigSet(data = {}) {
      this.adminConfig = data;
    },
    // 刷新main盒
    pageRefresh(message = "") {
      this.pageState = false;

      if (process.client) {
        useRoute().meta.pageState = true;
        nextTick(() => {
          useRoute().meta.pageState = false;
          if (message) {
            ElMessage({
              message: message,
              center: true,
              duration: 1000,
              type: "success",
            });
          }
        });
      }
    },
  },
  // 持久化
  persist: {
    storage: persistedState.localStorage,
  },
});
