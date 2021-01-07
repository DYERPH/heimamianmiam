// 设置
function setToken (key, value) {
  window.localStorage.setItem(key, value)
}

// 获取
function getToken (key) {
  return window.localStorage.getItem(key)
}

// 删除
function removeToken (key) {
  return window.localStorage.removeItem(key)
}

// 暴露接口
export { setToken, getToken, removeToken }
