import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;

import KTabs from '@kevindesousa/vue-k-tabs'
Vue.use(KTabs);

import LottieAnimation from 'lottie-web-vue'
Vue.use(LottieAnimation);

import Tooltip from 'vue-directive-tooltip';
import 'vue-directive-tooltip/dist/vueDirectiveTooltip.css';
Vue.use(Tooltip);

import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */);

import headroom from 'vue-headroom'
Vue.use(headroom);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
