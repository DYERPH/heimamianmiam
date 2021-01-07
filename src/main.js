import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import 'normalize.css'
import './style/iconfont/iconfont.css'
import Vant from 'vant'
import 'vant/lib/index.css'
import comm from '@/utils/comm'

Vue.use(comm)
// 使用 vant
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
