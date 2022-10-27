const axios = require('axios');

function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'https://v0.yiketianqi.com',
    timeout: 5000
  })

  // 2.axios的拦截器
  // 2.1.请求拦截的作用
  instance.interceptors.request.use(config => {
    return config;
  }, err => {
    console.log(err);
  })

  // 2.2.响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  // 3.发送真正的网络请求
  return instance(config)
  // 调用 request，返回 一个promise，直接调用then
}
module.exports = {
  request
};
