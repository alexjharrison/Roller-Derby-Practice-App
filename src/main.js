import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import { speak, play } from "@/functions/audio";
import wait from "@/functions/wait";

Vue.use(Vuex);

// Global function prototype injection
Vue.prototype.$wait = wait;
Vue.prototype.$speak = speak;
Vue.prototype.$play = play;

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
