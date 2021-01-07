import axios from 'axios'
import { Toast } from 'vant'
import { getToken, removeToken } from '@/utils/token'
import store from '@/store'
import router from '@/router'
// 创建axios副本
const _fetch = axios.create({
  baseURL: process.env.VUE_APP_URL
})
// 设置请求响应
_fetch.interceptors.request.use(config => {
  if (config.needToken) {
    config.headers.authorization = `Bearer ${getToken('token')}`
  }
  return config
}, error => {
  return Promise.reject(error)
})

// 设置响应请求
_fetch.interceptors.response.use(response => {
  if (response.data.code === 200) {
    return response
  } else {
    if (response.data.code === 401 || response.data.code === 403) {
      // 删除token
      removeToken('token')
      // 提示错误
      Toast.fail(response.data.message)
      // 把登录状态改为为登录
      store.commit('setIsLogin', false)
      // 跳回登录页面
      router.push('/login')
      // 终止.then下面的内容执行 （在请求页面）
      return Promise.reject(new Error(response.data.message))
    } else {
      // 提示错误
      Toast.fail(response.data.message)
      // 终止.then执行  这里的的.then值得是发请求之后的回调函数
      return Promise.reject(new Error(response.data.message))
    }
  }
}, error => {
  return Promise.reject(error)
})
export default _fetch
