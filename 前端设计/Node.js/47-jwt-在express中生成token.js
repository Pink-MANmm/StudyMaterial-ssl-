const express = require('express')
const app = express()
//1.安装JWT相关的包
//运行如下的命令，安装如下两个JWT相关的包：
//npm install jsonwebtoken express-jwt
//其中：
//*jsonwebtoken用于生成JWT字符串
//*express-jwt用于将JWT字符串解析还原成JSON对象

//2.导入JWT相关的包
//使用require()函数，分别导入JWT相关的两个包
const jwt = require('jsonwebtoken')
const expressJWT = require('express-jwt')

const cors = require('cors')
app.use(cors())

app.use(express.urlencoded({ extended: false }))

//3.定义secret密钥
//为了保证JWT字符串的安全性，防止JWT字符串在网络传输过程中被别人破解，我们需要专门定义一个用于加密和解密的secret密钥：
//①当生成JWT字符串的时候，需要使用secret密钥对用户的信息进行加密，最终得到加密好的JWT字符串
//②当把JWT字符串解析还原成JSON对象的时候，需要使用secret密钥进行解密
const secretKey = 'itheima No1 ^_^'

//5.将JWT字符串还原为JSON对象
//客户端每次在访问那些有权限接口的时候，都需要主动通过请求头中的Authorization字段，将Token字符串发送到服务器进行身份验证
//此时，服务器可以通过express-jwt这个中间件，自动将客户端发送过来的Token解析还原成json的对象

//使用app.use()来注册中间件
//expressjwt({secret:secretKey})就是用来解析Token的中间件
//.unless({path:[/^\/api\//]})用来指定哪些接口不需要访问权限
//注意：只要配置成功了express-jwt这个中间件，就可以把解析出来的用户信息，挂载到req.auth属性上
app.use(expressJWT.expressjwt({ secret: secretKey, algorithms: ["HS256"] }).unless({ path: [/^\/api\//] }))

//4.在登录成功后生成JWT字符串
//调用jsonwebtoken包提供的sign()方法，将用户的信息加密成JWT字符串，响应给客户端：
app.post('/api/login', function (req, res) {
    res.send({
        status: 200,
        msg: '登陆成功！',
        //调用jwt.sign()生成JWT字符串，三个参数分别是：用户信息对象、加密密钥、配置对象
        //注意：千万不要把密码加密到token字符中
        token: jwt.sign({ username: req.body.username }, secretKey, { expiresIn: '30s' })//expiresIn用预设值token的有效期
    })
})

//6.使用req.user获取用户信息
//当express-jwt这个中间件配置成功之后，即可在那些有权限的接口中，使用req.auth对象，来访问从JWT字符串中解析出来的用户信息了，示例代码如下：
app.get('/admin/getinfo', (req, res) => {
    console.log(req.auth);
    res.send({
        status: 200,
        msg: '获取用户信息成功!',
        data: req.auth
    })
})

//7.捕获解析JWT失败后产生的错误
//当使用express-jwt解析Token字符串时，如果客户端发送过来的Token字符串过期或不合法，会产生一个解析失败的错误，影响项目的正常运行。我们可以通过Express的错误中间件，捕获这个错误并进行相关的处理，示例代码如下：
app.use((err, req, res, next) => {
    //token解析失败导致的错误
    if (err.name === 'UnauthorizedError') {
        return res.send({ status: 401, msg: '无效的token' })
    }
    //其他原因导致的错误
    res.send({ status: 500, meg: '未知错误' })
})

app.listen(8002)