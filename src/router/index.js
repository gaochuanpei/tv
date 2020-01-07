import VueRouter from "vue-router";
import Vue from "vue";
import MainTv from "../components/Main";
Vue.use(VueRouter);
const routes = [
  {
    path: "/tv_first/:id",
    component: MainTv
  }
];
const router = new VueRouter({
  routes
});
export default router;
