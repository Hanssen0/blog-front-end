import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import "bootstrap";

Vue.config.productionTip = false;

import Article from "@/pages/Article.vue";
import ArticlesList from "@/pages/ArticlesList.vue";

const routes = [
  {
    path: "/",
    component: Article,
  }, {
    path: "/articles",
    component: ArticlesList,
  }
];
const router = new VueRouter({routes});

Vue.use(VueRouter);
new Vue({
  render: h => h(App),
  router,
}).$mount("#app");
