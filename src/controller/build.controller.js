const fs = require('fs');

const service = require('../service/build.service');

class BuildController {

  async getClassInfo(ctx,next) {
    const { bid,data }  = ctx.query;
    // const _data = require("silly-datetime");
    // const res_data = _data.format(new Date(),'YYYY-MM-DD');
    const result = await service.getClassByBidAndData(bid,data);
    ctx.body = result;
  }
  
  async getEmptyInfo(ctx,next) {
    const { bid,data } = ctx.query;
    const result = await service.getEmptyByBidAndData(bid,data);
    ctx.body = result
  }

}
module.exports = new BuildController();