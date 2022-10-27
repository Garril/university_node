const Router = require('koa-router');
const weaRouter = new Router({prefix:'/weather'});

const {
  getFormatWeaInfo
} = require('../middleware/weather.middleware');

const {
  getWeatherInfo
} = require('../controller/weather.controller');

weaRouter.get('/',getFormatWeaInfo,getWeatherInfo);

module.exports = weaRouter;