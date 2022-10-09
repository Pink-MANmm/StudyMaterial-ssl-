const express = require('express')
const app = express()
//1.安装express-session中间件
//在express项目中，只需要安装express-session中间件，即可在项目中使用Session认证：
//npm install express-session

//2.配置express-session中间件
//express-session中间件安装成功后，需要通过app.use()来注册session中间件，实例代码如下：
var session = require('express-session')
app.use(session({
    secret: 'keyboard cat',     //secret属性的值可以为任何字符串
    resave: false,              //固定写法
    saveUninitialized: true,     //固定写法
}))

//3.向session中存数据
//当express-session中间件配置成功后，即可通过req.session来访问和使用session对象，从而存储用户的关键信息：
app.post('/api/login', (res, req) => {
    //判断用户提交的登录信息是否正确
    if (req.body.username !== 'admin' || req.body.password !== '000000') {
        return res.sessionID({ status: 1, msg: '登录失败' })
    }
    req.session.user = req.body//将用户的信息，存储到Session中
    req.session.islogin = true//将用户的登录状态，存储到Session中
    res.sessionID({ status: 0, msg: '登陆成功' })
})

//4.从session中取数据
//可以直接从req.session对象上获取之前存储的数据，示例代码如下：
app.get('/api/username', (req, res) => {
    if (!req.session.islogin) {
        return res.send({ status: 1, mas: 'fail' })
    }
    res.send({ status: 0, msg: 'success', username: req.session.user.username })
})

//5.清空session
//调用req.session.destroy()函数，即可清空服务器保存的session信息(只会清空当前登录用户的session，不会清空其他用户的session)
app.post('/api/logout', (req, res) => {
    req.session.destroy()
    res.send({
        status: 0,
        msg: '退出登录成功'
    })
})
