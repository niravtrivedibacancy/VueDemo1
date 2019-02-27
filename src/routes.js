import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import User from "./views/User.vue";

Vue.use(VueRouter);

const routers = new VueRouter({
  mode: "history",
  routes: [
  { path: "/", name:'home',component: Home },
  { path: "/home", name:'home',component: Home }, 
  { path: "/about",name:'about' , component: About },
  { path: "/user",name:'user' , component: User }

]
});

export default routers;
