import { createApp } from "vue";
import Layout from "@/shared/layout/layout.vue";
import router from "./shared/router";
import store from "./shared/store";
import "@/assets/style.scss";

createApp(Layout).use(store).use(router).mount("#app");
