import hmNavTab from '@/components/hmNavTab'

export default function (Vue) {
  Vue.component(hmNavTab.name, hmNavTab)
  Vue.prototype.$baseUrl = process.env.VUE_APP_URL
}
