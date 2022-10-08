const errorType = require('../constants/error-types');
const service = require('../service/user.service');
const md5password= require('../utils/password-handle');

const verifyUser = async(ctx,next)=>{


  await next();
}

module.exports = {
  verifyUser,

}