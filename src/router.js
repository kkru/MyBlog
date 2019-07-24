import Vue from "vue";
import Router from "vue-router";
import HomePage from "./views/HomePage.vue";
import PostPage from "./views/PostPage.vue";
import PortfolioPage from "./views/PortfolioPage.vue";
import LoginPage from "./views/LoginPage.vue";
import AddPortfolioPage from "./views/AddPortfolioPage.vue";
import GitInfoPage from "./views/GitInfoPage.vue";
import MyConfig from "./views/MyConfig";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage
    },
    {
      path: "/post",
      name: "post",
      component: PostPage
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: PortfolioPage
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage
    },
    {
      path: "/portfolio-add",
      name: "addportfolio",
      component: AddPortfolioPage
    },
    {
      path: "/gitinfopage",
      name: "gitinfopage",
      component: GitInfoPage
    },
    {
      path: "/myconfig",
      name: "myconfig",
      component: MyConfig
    }
  ]
});
