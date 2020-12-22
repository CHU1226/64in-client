import Vue from "vue";
import VueRouter from "vue-router";
import Footer from "../components/Footer";
import Login from "../components/Login";
import Index from "../components/Index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index
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
