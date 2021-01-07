// 引入axios的副本
import _fetch from '@/api/request'

function auCode (data) {
  return _fetch({
    url: '/au/code',
    method: 'post',
    data
  })
}
function auLogin (data) {
  return _fetch({
    url: '/au/login',
    method: 'post',
    data
  })
}
export { auCode, auLogin }
