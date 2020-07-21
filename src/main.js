import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import "bootstrap";

Vue.config.productionTip = false;

import Login from "@/pages/Login.vue";

import Main from "@/pages/Main.vue";
import Article from "@/pages/Main/Article.vue";
import ArticlesList from "@/pages/Main/ArticlesList.vue";

const routes = [
  {
    path: "/login",
    component: Login,
  }, {
    path: "/",
    redirect: "/main/articles",
  }, {
    path: "/main",
    component: Main,
    children: [
      {
        path: "articles",
        component: ArticlesList,
      }, {
        path: "articles/:id",
        component: Article,
        props: true,
      }
    ]
  }
];
const router = new VueRouter({routes});

Vue.use(VueRouter);
new Vue({
  render: h => h(App),
  router,
}).$mount("#app");

function ReplaceToIndexPage() {
  router.replace("/");
}

export {
  ReplaceToIndexPage,
};
