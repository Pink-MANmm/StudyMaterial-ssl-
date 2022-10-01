//1.CORS响应头部 - Access-Control-Allow-Origin
//响应头部中可以携带一个Access-Control-Allow-Origin字段，其语法如下：
//Access-Control-Allow-Origin:<origin> | *
//其中，origin参数的值指定了允许访问该资源的外域URL
//例如，下面的字段值将只允许来自http://itcast.cn的请求：
//res.setHeader('Access-Control-Allow-Origin','http://itcast.cn')
//如果指定了Access-Control-Allow-Origin字段的值为通配符*，表示允许来自任何域的请求，示例代码如下：
//res.setHeader('Access-Control-Allow-Origin','*')

//2.CORS响应头部 - Access-Control-Allow-Headers
//默认情况下，CORS仅支持客户端向服务器发送如下的9个请求头：
//Accept、Accept-Language、Content-Language、DPR、Downlink、Save-Data、Viewport-Width、Width、Content-Type（值仅限于text/plain、multipart/form-data、application/x-www-form-urlencoded三者之一）
//如果客户端向服务器发送了额外的请求头信息，则需要在服务器端，通过Access-Control-Allow-Headers对额外的请求头进行声明，否则这次请求会失败！

//允许客户端额外向服务器发送Content-Type请求头和X-Custom-Header请求头
//注意：多个请求头之间使用英文的逗号进行分割
//res.setHeader('Access-Control-Allow-Headers','Content-Type,X-Custom-Header')

//3.CORS响应头部 - Access-Control-Allow-Methods
//默认情况下，CORS仅支持客户端发起GET、POST、HEAD请求
//如果客户端希望通过PUT、DELETE等方式请求服务器的资源，则需要在服务器端，通过Access-Control-Alow-Methods来指明实际请求所允许使用的HTTP方法
//示例代码如下：
//只允许POST、GET、DELETE、HEAD请求方法
//res.setHeader('Access-Control-Allow-Methods','POST,GET,DELETE,HEAD')
//允许所有的HTTP请求方法
//res.setHeader('Access-Control-Allow-Methods','*')