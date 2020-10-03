import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import User from "@/components/User.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/user/:name", // <-- notice the colon
    name: "User",
    component: User,
 },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;