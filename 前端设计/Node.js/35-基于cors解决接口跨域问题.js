//什么是CORS
//CORS(Cross-Origin Resource Sharing,跨域资源共享)由一系列HTTP响应头组成，这些HTTP响应头决定浏览器是否阻止前端JS代码跨域获取资源。
//浏览器的同源安全策略默认会阻止网页'跨域'获取资源。但如果接口服务器配置了CORS相关的HTTP响应头（Access-Control-Allow-*相关响应头），就可以解除浏览器端的跨域访问限制
//CORS注意事项
//1.CORS主要在服务器端进行配置。客户端浏览器无需做任何额外的配置，即可请求开启了CORS的接口
//2.CORS在浏览器中有兼容性。只有支持XMLHttpRequest Level2的浏览器，才能正常访问开启了CORS的服务端接口(例如：IE10+、Chrome4+、FireFox3.5+)。

//使用cors中间件解决跨域问题
//cors是Express的一个第三方中间件。通过安装和配置cors中间件，可以很方便地解决跨域问题。使用步骤分如下3步：
//1.运行npm install cors安装中间件
//2.运行const cors=require('cors')导入中间件
//3.在路由之前调用app.use(cors())配置中间件

const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: false }))

app.get('/api/jsonp', (req, res) => {
    //1.获取客户端发送过来的回到函数的名字
    const funcName = req.query.callback
    //2.得到要通过JSONP形式发送给客户端的数据
    const data = { name: 'zs', age: 22 }
    //3.根据前两步得到的数据，拼接出一个函数调用的字符串
    const scriptStr = `${funcName}(${JSON.stringify(data)})`
    //4.把上一步拼接得到的字符串，响应给客户端的<script>标签进行解析执行
    res.send(scriptStr)
})
//一定要在路由之前，配置cors这个中间件，从而解决接口跨域的问题
const cors = require('cors')
app.use(cors())

const router = require('./35-路由模块.js')
app.use('/api', router)
app.listen(84, () => {
    console.log('Express running at http://127.0.0.1:84');
})