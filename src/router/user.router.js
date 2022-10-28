const Router = require('koa-router');
const userRouter = new Router({prefix:'/login'});

const {
  checkUserInfo
} = require('../controller/user.controller');

const {
  // verifyUser
} = require('../middleware/user.middleware')

userRouter.post('/',checkUserInfo);

module.exports = userRouter;