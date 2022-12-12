import Vue from "vue";
import App from "./App.vue";
import VctIcon from "../packages/index";
Vue.use(VctIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
