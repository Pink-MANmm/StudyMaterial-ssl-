//基本步骤
//1.导入http模块
//2.创建web服务器实例
//3.为服务器实例绑定request事件，监听客户端的请求
//4.启动服务器

//如果希望在自己的电脑上创建一个web服务器，从而对外提供web服务，则需要导入http模块
const http = require('http')
//创建web服务器的实例
//调用http.createServer()方法，即可快速创建一个web服务器实例：
const server = http.createServer()
//为服务器实例绑定request事件，即可监听客户端发送过来的网络请求
//使用服务器实例的.on()方法，为服务器绑定一个request事件
server.on('request', (req, res) => {
    //只要有客户端请求我们自己的服务器，就会触发request事件，从而调用这个事件处理函数
    console.log('Someone visit our web server');
    //req是请求对象，它包含了与客户端相关的数据和属性，例如：
    //req.url是客户端请求的URL地址
    //req.method是客户端的method请求类型
    const str = `Your request url is ${req.url},and request method is ${req.method}`
    //res.end()方法的作用：向客户端发送指定的内容，并结束这次请求的处理过程
    //res.end(str)
    console.log(str);
    //解决中文乱码问题
    //当调用res.end()方法，向客户端发送中文内容的时候，会出现乱码问题，此时，需要手动设置内容的编码格式
    const str1 = `您请求的url地址是${req.url},请求的method类型是${req.method}`
    //为防止中文显示乱码的问题，需要设置响应头 Content-Type的值为text/html:charset=utf-8
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    //把包含中文的内容，响应给客户端
    res.end(str1)
})
//调用server.listen(端口号，cb回调)方法，即可启动web服务器
server.listen(80, () => {
    console.log('http server running at http://127.0.0.1');
})
