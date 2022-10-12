const Router = require('koa-router');
const buildRouter = new Router({prefix:'/build'});

const {
  getClassInfo
} = require('../controller/build.controller');

const {

} = require('../middleware/build.middleware')

buildRouter.get('/',getClassInfo);

module.exports = buildRouter;