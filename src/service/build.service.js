const connection = require('../app/database');

class BuildService {
  async getClassByBidAndData(bid,data) {
    const statement = `SELECT * FROM class WHERE bid = ? AND ondata = ?;`;
    const result = await connection.execute(statement, [bid,data]);
    return result[0];
  }
}
module.exports = new BuildService();