import axios from 'axios'

// let base = 'http://localhost:8080'
// 设置全局axios默认值
axios.defaults.timeout = 5000 // 5000的超时验证
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

// 创建一个axios实例
const instance = axios.create()
instance.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

axios.interceptors.request.use = instance.interceptors.request.use

export default {
  // 测试
  test () {
    return instance.get('./static/mock/test.json')
  }
}
