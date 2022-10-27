const Router = require('koa-router');
const weaRouter = new Router({prefix:'/weather'});

const {
  getWeatherInfoController
} = require('../controller/weather.controller');

weaRouter.get('/',getWeatherInfoController);

module.exports = weaRouter;