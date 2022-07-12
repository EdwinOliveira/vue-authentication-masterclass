import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import SignIn from "@/views/authentication/sign-in/sign-in.vue";
import SignUp from "@/views/authentication/sign-up/sign-up.vue";
import Dashboard from "@/views/dashboard/dashboard.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/sign-in",
    component: SignIn,
  },
  {
    path: "/sign-up",
    component: SignUp,
  },
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "/",
    redirect: "/sign-in",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
