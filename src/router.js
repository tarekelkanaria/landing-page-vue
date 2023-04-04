// Configure router from Vue Router
import { createRouter, createWebHistory } from "vue-router";
import WebTab from "./components/HeroSection/HeroTabs/WebTab.vue";
import MobTab from "./components/HeroSection/HeroTabs/MobTab.vue";
import FreebiesTab from "./components/HeroSection/HeroTabs/FreebiesTab.vue";

const routes = [
  {
    path: "/",
    name: "WebTab",
    component: WebTab,
  },
  {
    path: "/mob",
    name: "MobTab",
    component: MobTab,
  },
  {
    path: "/freebies",
    name: "FreebiesTab",
    component: FreebiesTab,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
