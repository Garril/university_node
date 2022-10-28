const connection = require('../app/database');

class UserService {
  async checkUserInfo(username,password) {
    const statement = `SELECT * FROM users WHERE username = ? AND password = ?;`;
    const result = await connection.execute(statement, [username,password]);
    return result[0];
  }
}
module.exports = new UserService();