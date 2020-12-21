import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Footer from "../components/Footer";
import Login from "@/components/Login";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },{
    path: "/footer",
    name: "Footer",
    component: Footer
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
