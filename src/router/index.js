import { createWebHashHistory, createRouter } from "vue-router";

import LoginPage from '../pages/LoginPage.vue';
import RegisterPage from '../pages/RegisterPage.vue';
import HomePage from '../pages/HomePage.vue';

const routes = [
  {
    path: "/login",
    name: "Login",
    component: LoginPage
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterPage
  },
  {
    path: "/",
    name: "Home",
    component: HomePage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;