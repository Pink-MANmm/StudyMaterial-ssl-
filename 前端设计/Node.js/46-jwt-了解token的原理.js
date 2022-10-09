//1.了解Session认证的局限性
//Session认证机制需要配合Cookie才能实现。由于Cookie默认不支持跨域访问，所以，当涉及到前端跨域请求后端接口的时候，需要做很多额外的配置，才能实现跨域Session认证。
//注意：*当前端请求后端接口不存在跨域问题的时候，推荐使用Session身份认证机制
//      *当前端需要跨域请求后端接口的时候，不推荐使用Session身份认证机制，推荐使用JWT认证机制

//2.什么是JWT
//JWT（英文全称：JSON Web Token）是目前最流行的跨域认证解决方案

//3.JWT的工作原理（服务器端不会保留Token）
//（浏览器）客户端登录：提交账号与密码->（服务器）验证账号和密码->验证通过后，将用户的信息对象，经过加密之后生成Token字符串->（服务器）服务器响应：将生成的Token发送到客户端
//->（浏览器）将Token存储到LocalStorage或SessionStorage->（浏览器）客户端再次发起请求时，通过请求头的Authorization字段，将Token发给服务器->（服务器）服务器把Token字符串还原成用户的信息对象
//->用户的身份认证成功后，服务器针对当前用户生成特定的响应内容->（服务器）服务器响应：把当前用户对应的页面内容响应给浏览器

//4.JWT的组成部分
//JWT通常由三部分组成，分别是Header（头部）、Payload（有效荷载）、Signature（签名）。
//三者之间使用英文的‘.’分隔，格式如下：
//Header.Payload.Signature

//5.JWT的三个部分各自代表的含义
//JWT的三个组成部分，从前到后分别是Header、Payload、Signature。
//其中：
//*Payload部分才是真正的用户信息，他是用户信息经过加密之后生成的字符串
//*Header和Signature是安全性相关的部分，只是为了保证Token的安全性

//6.JWT的使用方式
//客户端收到服务器返回的JWT之后，通常会将他储存在localStorage或sessionStorage中。
//此后，客户端每次与服务器通信，都要带上这个JWT的字符串，从而进行身份认证。推荐的做法是把JWT放在HTTP请求头的Authorization字段中，格式如下：
//Authorization：Bearer <token>