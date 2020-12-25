import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import InfiniteSlideBar from 'vue-infinite-slide-bar'

Vue.component('infinite-slide-bar', InfiniteSlideBar)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
