var express = require('express')
var app = express()
//1.导入路由模块
const userRouter = require('./28-路由模块.js')
//2.使用app.use()注册路由模块（app.use()函数的作用，就是来注册全局中间件）
app.use('/api', userRouter)
app.listen(81, () => { console.log('express server running at http://127.0.0.1:81'); })