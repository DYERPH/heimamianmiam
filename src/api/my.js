import _fetch from '@/api/request'

function auInfo () {
  return _fetch({
    url: '/au/info',
    needToken: true
  })
}

// 编辑请求
function auEdit (data) {
  return _fetch({
    url: '/au/edit',
    method: 'post',
    needToken: true,
    data
  })
}

export { auInfo, auEdit }
