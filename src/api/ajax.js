import axios from 'axios'
import { Toast } from 'vant';
export function ajax(reqObj) {
  const defaultReq = {
    showLoad: true, // 请求是否显示loading框
    loadingText: '加载中', // 加载文本
    isErroToast: true,  // 是否toast异常
    method: 'post',
    url: '',
    params: {}
  }
  reqObj = { ...defaultReq, ...reqObj }
  if (reqObj.showLoad) {
    Toast.loading({
      message: reqObj.loadingText,
      forbidClick: true,
      duration: 0
    })
  }
  console.log(reqObj.params, '试试哈')
  return axios({
    method: reqObj.method,
    url: reqObj.url,
    data: reqObj.params
  }).then(res => {
    if (reqObj.showLoad) Toast.clear()
    const hasData = res && res.data && typeof res.data === 'object'
    if (hasData && res.data.code === 0 || hasData && res.data.code === 200) {
      return Promise.resolve(res.data)
    } else {
      return Promise.reject(res.data)
    }
    
  }).catch(err => {
    if (reqObj.showLoad) Toast.clear()
    if (reqObj.isErroToast) Toast(err.msg ? err.msg : '请求发生异常')
    return Promise.reject(err)
  })
}