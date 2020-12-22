import Vue from "vue";
import VueRouter from "vue-router";
import Footer from "../components/Footer";
import Login from "../components/Login";
import Index from "../components/Index";
import Search from "../components/Search";
import Setting from "../components/Setting";
import Profile from "../components/Profile";
import NewPost from "../components/NewPost";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index
  },{
    path: "/search",
    name: "search",
    component: Search
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/setting",
    name: "Setting",
    component: Setting
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  },
  {
    path: "/post/new",
    name: "NewPost",
    component: NewPost
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
