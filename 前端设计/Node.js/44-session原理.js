//1.HTTP协议的无状态性
//了解HTTP协议的无状态性是进一步学习Session认证机制的必要前提。
//HTTP协议的无状态性，指的是客户端的每次HTTP请求都是独立的，连续多个请求之间没有直接的关系，服务器不会主动保留每次HTTP请求的状态

//2.如何突破HTTP无状态的限制
//对于超市来说，为了方便收银员在进行结算时给VIP用户打折，超市可以为每个VIP用户发放会员卡。
//注意：现实生活中的会员卡身份认证方式，在Web开发中的专业术语叫做Cookie。

//3.什么是Cookie
//Cookie是存储在用户浏览器中的一段不超过4KB的字符串。它由一个名称、一个值和其他几个用于控制Cookie有效期、安全性、适用范围的可选属性组成
//不同域名下的Cookie各自独立，每当客户端发起请求时，会自动把当前域名下所有未过期的Cookie一同发送到服务器
//Cookie的几大特性：
//①自动发送
//②域名独立（百度域名不能访问黑马程序员域名下的Cookie）
//③过期时限
//④4kb限制

//4.Cookie在身份认证中的作用
//客户端第一次请求服务器的时候，服务器通过响应头的形式，向客户端发送一个身份认证的Cookie，客户端会自动将Cookie保存在浏览器中。
//随后，当客户端浏览器每次请求服务器的时候，浏览器会自动将身份认证相关的Cookie，通过请求头的形式发送给服务器，服务器即可验明客户端的身份

//5.Cookie不具有安全性
//由于Cookie是存储在浏览器中的，而且浏览器也提供了读写Cookie的API，因此Cookie很容易被伪造，不具有安全性。因此不建议服务器将重要的隐私数据，通过Cookie的形式发送给浏览器
//注意：千万不要使用Cookie存储重要且隐私的数据！比如用户的身份信息、密码等

//6.提高身份认证的安全性
//为了防止客户伪造会员卡，收银员在拿到客户出示的会员卡之后，可以在收银机上进行刷卡认证。只有收银机确认存在的会员卡，才能被正常使用
//这种‘会员卡+刷卡认证’的设计理念，就是Session认证机制的精髓

//7.Session的工作原理
//（浏览器）客户端登录：提交账号与密码->（服务器）验证账号和密码->将登陆成功后的用户信息存储在服务器的内存中，同时生成对应的Cookie字符串->（服务器）服务器响应：将生成的Cookie响应给客户端->（浏览器）浏览器自动把Cookie存储在当前域名下
//->（浏览器）客户端再次发起请求时，通过请求头自动把当前域名下所有可用的Cookie发送给服务器->(服务器)服务器根据请求头中携带的Cookie，从内存中查找对应的用户信息->
//用户的身份认证成功后，服务器针对当前用户生成特定的响应内容->（服务器）服务器响应：把当前用户对应的页面内容响应给浏览器