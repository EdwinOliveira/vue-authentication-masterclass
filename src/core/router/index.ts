import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import SignIn from "@/views/authentication/sign-in/sign-in.vue";
import SignUp from "@/views/authentication/sign-up/sign-up.vue";
import Dashboard from "@/views/dashboard/dashboard.vue";
import AuthGuard from "../guards/auth.guard";
import NotAuthGuard from "../guards/no-auth.guard";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/dashboard",
    component: Dashboard,
    beforeEnter: AuthGuard.instance.checkAuth,
  },
  {
    path: "/sign-in",
    component: SignIn,
    beforeEnter: NotAuthGuard.instance.checkNoAuth,
  },
  {
    path: "/sign-up",
    component: SignUp,
    beforeEnter: NotAuthGuard.instance.checkNoAuth,
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
