//为了方便理解与记忆中间件的使用，Express官方把常见的中间件用法，分成了5大类，分别是：
// *应用级别的中间件
// *路由级别的中间件
// *错误级别的中间件
// *Express 内置的中间件
// *第三方的中间件

//1.应用级别的中间件
//通过app.use()或app.get()或app.post()，绑定到app实例上的中间件，叫做应用级别的中间件，代码示例如下：
//app.use((req,res,next)=>{next()})    (全局中间件)
//app.get('/',mw,(req,res)=>{res.send('Home page')})    (局部中间件)

//2.路由级别的中间件
//绑定都express.Router()实例上的中间件，叫做路由级别的中间件。它的用法和应用级别中间件没有任何区别，只不过，应用级别的中间件是绑定到app实例上，路由级别中间件绑定到router实例上，代码示例如下：
//var app=express()
//var router=express.Router()
//router.use((req,res,next)=>{
//  console.log('Time',Date.now())
//  next()
//})
//app.use('/',router)

//3.错误级别的中间件
//错误级别中间件的作用：专门用来捕获整个项目中发生的异常错误，从而防止项目异常崩溃的问题
//格式：错误级别中间件的function处理函数中，必须有4个形参，形参顺序从前到后，分别是(err,req,res,next)。
//app.get('/',(req,res)=>{
//  throw new Error('服务器内部发生了错误!')  //认为抛出自定义的错误，后续代码不执行
//  res.send('Home Page')
//})
//app.use(function(err,req,res,next){  //错误级别中间件
//  console.log('发生了错误:'+err.message);
//  res.send('Error!'+err.message)
//})
//注意：错误级别的中间件，必须注册在所有路由之后

//4.Express内置的中间件
//自Express4.16.0版本开始，Express内置了3个常用的中间件，极大的提高了Express项目的开发效率和体验：
// *express.static快速托管静态资源的内置中间件，例如：HTML文件、图片、CSS样式等（无兼容性）
// *express.json解析JSON格式的请求体数据（有兼容性，仅在4.16.0+版本中可用）
// *express.urlencoded解析URL-encoded格式的请求体数据（有兼容性，仅在4.16.0+版本中可用）
// app.use(express.json())  //配置解析 application/json 格式数据的内置中间件
// app.use(express.urlencoded({extended:false})) //配置解析 application/x-www-form-urlencoded 格式数据的内置中间件

const express = require('express')
const app = express()

//注意：除了错误级别的中间件，其他的中间件，必须在路由之前进行配置
//通过express.json()这个中间件，解析表带中的JSON格式的数据
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.post('/user', (req, res) => {
    //在服务器，可以使用req.body这个属性，来接收客户端发送过来的请求体数据
    //默认情况下，如果不配置解析表单数据的中间件，则req.body默认等于undefined
    console.log(req.body)

    res.send('ok')
})

app.post('/book', (req, res) => {
    console.log(req.body);
    res.send('ok')
})

app.listen(83, () => {
    console.log('Express server running at http://127.0.0.1:83');
})

//5.第三方中间件
//非Express官方内置的，而是由第三方开发出来的中间件，叫做第三方中间件。在项目中，大家可以按需下载并配置第三方中间件，从而提高项目的开发效率
//例如：在express@4.16.0之前的版本中，经常使用body-parser这个第三方中间件，来解析请求体数据。使用步骤如下：
// *运行npm install body-parser安装中间件
// *使用require导入中间件
// *调用app.use()注册并使用中间件
//实例：
//const parser=require('body-parser')
//app.use(parser.urlencoded({extended:false}))