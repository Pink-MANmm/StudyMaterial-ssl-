//1.Express中间件的调用流程
//当一个请求到达Express的服务器之后，可以连续调用多个中间件，从而对这次请求进行预处理
//2.Express中间件的格式
//Express的中间件，本质上就是一个function处理函数，Express中间件的格式如下：
var express = require('express')
var app = express()

app.get('/', (req, res, next) => {
    next()
})
app.listen(3000)
//注意：中间件函数的形参列表中，必须包含next参数。而路由处理函数中只包含req和res

//3.next函数的作用
//next函数是实现多个中间件连续调用的关键，它表示把流转关系转交给下一个中间件或路由