const {
  request
} = require('./index');

function getWeatherInfoByAxios() {
  return request({
    url:'/api',
    params: {
      unescape: '1',
      version:'v93',
      appid: '96663771',
      appsecret: 'rtTo5ft6',
      cityid: '101280102'
    }
  })
}
module.exports = {
  getWeatherInfoByAxios
};