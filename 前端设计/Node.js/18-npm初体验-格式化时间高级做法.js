//1.使用npm包管理工具，在项目中安装格式化时间的包moment
//2.使用require()导入格式化时间的包
//3.参考moment的官方API文档对时间进行格式化
const moment = require('moment')
const dt = moment().format('YYYY-MM-DD HH:mm:ss')

console.log(dt);