const {
  getWeatherInfo
} = require('../request/weather');

class WeatherController {

  async getWeatherInfoController(ctx,next) {
    const result = await getWeatherInfo();
    ctx.body = result;
  }

}
module.exports = new WeatherController();