//什么是Express
//官方：Express是基于Node.js平台，快速、开放、极简的Web开发框架
//通俗的理解：Express的作用和Node.js内置的http模块类似，是专门用来创建Web服务器的
//Express的本质：就是一个npm上的第三方包，提供了快速创建Web服务器的便捷方法
//Express中文官网：http://www.expressjs.com.cn

//进一步理解：
//http内置模块与Express的关系：类似于浏览器中Web API和jQuery的关系，后者是基于前者进一步封装出来的

//Express能做什么
//对于前端程序员来说，最常见的两种服务器，分别是：
//1.Web网站服务器：专门对外提供Web网页资源的服务器
//2.API接口服务器：专门对外提供API接口的服务器
//使用Express，可以方便快捷地创建Web网站的服务器或API接口的服务器

//Express基本使用
//1.安装
//在项目所处的文件执行以下命令，安装express
//npm i express@4.17.1
//2.创建基本的Web服务器
//*导入express
const express = require('express')
//*创建web服务器
const app = express()
//参数1：客户端请求的URL地址
//参数2：请求对应的处理函数
//      req：请求对象（包含了与请求相关的属性与方法）
//      req：响应对象（包含了与响应相关的属性与方法）
app.get('/geturl', (req, res) => {
    //向客户端发送JSON对象
    res.send({ name: 'zs', age: 20, gender: '男' })
})
app.post('/posturl', (req, res) => {
    //向客户端发送文本内容
    res.send('请求成功')
})
app.get('/', (req, res) => {
    //req.query默认是一个空对象
    //客户端使用?name=zs&age=20这种查询字符串形式，发送到服务器的参数
    //可以通过req.query对象访问到，例如：
    //req.query.name req.query.age
    console.log(req.query);
    res.send(req.query)
})
//URL地址中，可以通过：参数名 的形式，匹配动态参数值
app.get('/user/:id/:name', (req, res) => {
    //req.params默认是一个空对象
    //里面存放着通过：动态匹配到的参数值
    //例如http://127.0.0.1:800/user/1/zs
    //返回{
    //    "id": "1",
    //    "name": "zs"
    //    }
    console.log(req.params);
    res.send(req.params)
})
//*调用app.listen(端口号，启动成功后的回调函数)，启动服务器
app.listen(800, () => {
    console.log('express server running at http://127.0.0.1:800');
})
