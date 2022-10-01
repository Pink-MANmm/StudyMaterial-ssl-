//全局生效的中间件：客户端发起的任何请求，到达服务器之后，都会触发的中间件，叫做全局生效的中间件
//通过调用app.use(中间件函数),即可定义一个全局生效的中间件
const express = require('express')
const app = express()

//定义一个最简单的中间件函数
const nw = function (req, res, next) {
    console.log('这是最简单的中间件函数');
    //把流转关系，转交给下一个中间件或路由
    next()
}
//全局生效的中间件(请求先经过中间件，再进入路由)
app.use(nw)

//定义全局中间件的简化形式
app.use(function (req, res, next) {
    console.log('这是另一个最简单的中间件函数');
    const time = new Date()
    req.startTime = time
    next()
})

//定义多个全局中间件：可以使用app.use()连续定义多个全局中间件。客户端请求到达服务期之后，会按照中间件定义的先后顺序依次进行调用。

app.get('/', (req, res) => {
    console.log(req.startTime);
    res.send('Home page')
})

app.get('/user', (req, res) => {
    res.send('User page')
})

app.listen(82, () => {
    console.log('http://127.0.0.1:82');
})

//中间件的作用
//多个中间件之间，共享同一份req和res，基于这样的特性，我们可以在上游的中间件中，统一为req或res对象添加自定义的属性或方法，供下游的中间件或路由进行使用