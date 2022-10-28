const service = require('../service/user.service');

class UserController {

  async checkUserInfo(ctx,next) {
    const { username, password } = ctx.request.body.user;
    const result = await service.checkUserInfo(username, password);
    ctx.body = result;
  }

}
module.exports = new UserController();