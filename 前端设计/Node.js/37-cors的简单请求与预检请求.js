//CORS请求分类
//客户端在请求CORS接口时，根据请求方式和请求头的不同，可以将CORS的请求分为两大类，分别是：
//1.简单请求
//2.预检请求

//1.简单请求：
//同时满足以下两大条件的请求，就属于简单请求：
// *请求方式：GET、POST、HEAD三者之一
// *HTTP头部信息不超过以下几种字段：无自定义头部字段、Accept、Accept-Language、Content-Language、DPR、Downlink、Save-Data、Viewport-Width、Width、Content-Type（只有三个值application/x-www-form-urlencoded、multipart/form-data、text/plain）

//2.预检请求
//只要符合以下任何一个条件的请求，都属于预检请求：
// *请求方式为GET、POST、HEAD之外的请求Method方式
// *请求头中包含自定义头部字段
// *向服务器发送了application/json格式的数据
//在浏览器与服务器正式通信之前，浏览器会先发送OPTION请求进行预检，以获知服务器是否允许该实际请求，所以这一次的OPTION请求成为“预检请求”。服务器成功响应预检请求后，才会发送真正的请求，并且携带真实数据


//3.简单请求与预检请求的区别
//简单请求的特点：客户端与服务器之间只会发生一次请求
//预检请求的特点：客户端与服务器之间会发生两次请求，OPTION预检请求成功之后，才会发起真正的请求
//实例见35  delete示例
