import { createApp } from "vue";
import Layout from "@/shared/layout/layout.vue";
import router from "./core/router";
import store from "./core/store";
import "@/assets/style.scss";

createApp(Layout).use(store).use(router).mount("#app");
