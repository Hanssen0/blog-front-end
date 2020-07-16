import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

Vue.config.productionTip = false;

const routes = [];
const router = new VueRouter({routes});

Vue.use(VueRouter);
new Vue({
  render: h => h(App),
  router,
}).$mount("#app");
