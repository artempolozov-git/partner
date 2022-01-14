import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles.scss'

Vue.config.productionTip = false;

import KTabs from '@kevindesousa/vue-k-tabs'
Vue.use(KTabs);

import LottieAnimation from 'lottie-web-vue'
Vue.use(LottieAnimation);


import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper);

import headroom from 'vue-headroom'
Vue.use(headroom);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
