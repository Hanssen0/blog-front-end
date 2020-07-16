import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import "bootstrap";

Vue.config.productionTip = false;

import Article from "@/pages/Article.vue";

const routes = [
  {
    path: "/",
    component: Article,
  }
];
const router = new VueRouter({routes});

Vue.use(VueRouter);
new Vue({
  render: h => h(App),
  router,
}).$mount("#app");
