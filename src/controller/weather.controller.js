
class WeatherController {

  async getWeatherInfo(ctx,next) {
    const result = ctx.weaInfo;
    ctx.body = result;
  }

}
module.exports = new WeatherController();