import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Iconfont from './assets/fonts/iconfont.css'
import reset from '../public/reset.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'video.js/dist/video-js.css'

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
  router,
  Iconfont,
  reset,
  render: h => h(App)
}).$mount('#app')
