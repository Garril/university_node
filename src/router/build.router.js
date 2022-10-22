const Router = require('koa-router');
const buildRouter = new Router({prefix:'/build'});

const {
  getClassInfo,
  getEmptyInfo
} = require('../controller/build.controller');

const {

} = require('../middleware/build.middleware')

buildRouter.get('/',getClassInfo);
buildRouter.get('/empty',getEmptyInfo);

module.exports = buildRouter;