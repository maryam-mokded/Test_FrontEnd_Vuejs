import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './Router/router'

import store from './store'


import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)

Vue.config.productionTip = false

import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

const options = {
    // You can set your default options here
};

Vue.use(Toast, options);

new Vue({
  router,
  vuetify,
  store,
  beforeCreate(){
    this.$store.commit('initialzeAuth');
  },
  render: h => h(App)
}).$mount('#app')