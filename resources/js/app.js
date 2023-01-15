import Vue from 'vue'
import App from './App.vue'
// import VueApexCharts from 'vue-apexcharts'
import Vuelidate from 'vuelidate'
import VueSweetalert2 from 'vue-sweetalert2';
import BootstrapVue from 'bootstrap-vue'
// import VueMask from 'v-mask'
// import VueYoutube from 'vue-youtube'
// import vco from "v-click-outside"
import router from './router'
// import store from '/state/store'
import store from './state/store'
// import i18n from './i18n'
import mixin from './mixin'

import VueSession from "vue-session";

//import axios globally
import axios from 'axios'
window.axios = require('axios');


Vue.config.productionTip = false
// Vue.use(VueYoutube)
Vue.use(BootstrapVue)
// Vue.use(vco)
Vue.use(Vuelidate)
Vue.use(VueSweetalert2);
Vue.use(VueSession);
// Vue.use(VueMask)
// Vue.use(require('vue-chartist'))

// Vue.component('apexchart', VueApexCharts)

// import VueSweetalert2 from "vue-sweetalert2";
// import "sweetalert2/dist/sweetalert2.min.css";
// import swal from "sweetalert2";
// window.swal = swal;
// const options = {
//   confirmButtonColor: "#41b882",
//   cancelButtonColor: "#ff7674"
// };
// Vue.use(VueSweetalert2, options);
// Vue.use(VueSweetalert2);



new Vue({
  router,
  store,
  mixin,
  // i18n,
  render: h => h(App)
}).$mount('#app')
