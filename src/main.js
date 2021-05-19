import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import VueScrollTo from 'vue-scrollto'
import SequentialEntrance from 'vue-sequential-entrance'
import 'vue-sequential-entrance/vue-sequential-entrance.css'

import { i18n } from "./i18n"
Vue.use(SequentialEntrance);
Vue.config.productionTip = false

Vue.use(VueScrollTo, {
  container: "body",
  duration: 1000,
  easing: "ease-in-out",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
