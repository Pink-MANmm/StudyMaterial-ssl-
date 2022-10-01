const express = require('express')
const app = express()
//局部生效的中间件：不适用app.use()定义的中间件，叫做局部生效的中间件，示例如下：

//定义中间件函数mw
const mw = function (req, res, next) {
    console.log('这是中间件函数');
    next()
}
//mw这个中间件只在'当前路由中生效'，这种用法属于'局部生效的中间件'
app.get('/', mw, (req, res) => {
    res.send('Home page')
})
//mw这个中间件不会影响下面这个路由
app.get('/user', (req, res) => { res.send('User page') })

//定义多个局部中间件
//以下两种写法是'完全等价'的，可根据自己的喜好，选择任意一种方式进行使用
app.get('/', nw, nw1, (req, res) => {
    res.send('Home page')
})
app.get('/', [nw, nw1], (req, res) => {
    res.send('Home page')
})

app.listen(83, () => {
    console.log('http://127.0.0.1:83');
})