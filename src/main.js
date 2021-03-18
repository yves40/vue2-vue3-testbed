import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import App from './App.vue'
import router from "./router"
import Router from "vue-router"
import store from './store'
import BootstrapVue from 'bootstrap-vue'


Vue.use(VueCompositionAPI);
Vue.use(BootstrapVue);
Vue.use(Router);

import './assets/thecss.css';
import './assets/grid.css';
import './assets/flex.css';
import './assets/menu.css';
import './assets/responsivegrid.css'
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
