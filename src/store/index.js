import Vue from 'vue'
import Vuex from 'vuex'
import { auInfo } from '@/api/my'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: '',
    isLogin: ''
  },
  mutations: {
    setUserInfo (state, value) {
      state.userInfo = value
    },
    setIsLogin (state, value) {
      state.isLogin = value
    }
  },
  actions: {
    resetDate (state) {
      auInfo().then(res => {
        state.commit('setUserInfo', res.data.data)
        state.commit('setIsLogin', true)
      })
    }
  },
  modules: {}
})
