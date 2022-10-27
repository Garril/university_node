const { readFileSync } = require('fs');
const path = require('path');

const {
  getWeatherInfoByAxios
} = require('../request/weather');


// 格式化获取的天气数据，提取需要的
const formatWeaInfo = (weaInfo) => {
  let res = {};
  let week = weaInfo.week;
  let today = week[0];
  let hours_arr = today.hours;

  hours_arr = hours_arr.map(item => { // 各个小时需要展示的信息
    return {
      time: item.time.slice(-5),
      wea_img: item.wea_img,
      wea: item.wea,
      tem: item.tem
    }
  })

  week = week.map((item,index) => {
    if(index == 0) {
      item.week = '今天';
    }
    return {
      week: item.week,
      day_tem: item.day_tem,
      night_tem: item.night_tem,
      day_wea_img: item.day_wea_img,
    }
  })
  res.today = {
    city: weaInfo.city, // 城市
    tem: weaInfo.tem, // 气温
    day_tem: today.day_tem, // 白天气温（一般为最高）
    night_tem: today.day_tem, // 夜间气温（一般为最低）
    wea: weaInfo.wea, // 天气
    wea_img: weaInfo.wea_img, // 天气标志英文拼音
    hum: weaInfo.humidity, // 湿度
    week: today.week, // 周几
    hours: hours_arr, // 各小时段不同的天气情况
  }
  res.week = week; // 今天起，最近一周的天气情况

  return res;
}


const getFormatWeaInfo = async(ctx,next) => {
  // 接口非免费的，先请求一遍，下载json下来做开发用
  // const weaInfo = await getWeatherInfoByAxios();

  const up_path = path.resolve(__dirname, '..'); // 找到当前middleware的上一级文件src的路径
  let origin_data = readFileSync(up_path + "/constants/weather_origin.json"); // 路径拼接
  const weaInfo = JSON.parse(origin_data);
  ctx.weaInfo = formatWeaInfo(weaInfo);
  await next();
}

module.exports = {
  getFormatWeaInfo
}