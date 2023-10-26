import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue"
import Login from "./views/Login.vue";
import Dashboard from "./views/Dashboard.vue";
import Clients from "./views/Clients.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/", name: "login", component: Login },
    { path: "/", name: "dashboard", component: Dashboard },
    { path: "/", name: "clients", component: Clients },
  ],
});

export default router;
