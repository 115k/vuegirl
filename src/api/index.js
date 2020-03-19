const API_URL = process.env.VUE_APP_API_URL
import { ajax } from './ajax.js'
// 登录
export function fetchLogin (params) {
  return ajax({
    method: 'post',
    url: `${API_URL}/api/v1/user/login`,
    params: params
  })
}
// 注册
export function fetchSigin (params) {
  return ajax({
    method: 'post',
    url: `${API_URL}/api/v1/user/add`,
    params: params
  })
}