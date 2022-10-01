//开发属于自己的包
//1.需要实现的功能
//*格式化日期
//*转义HTML中的特殊字符
//*还原HTML中的特殊字符

//1.导入自己的包
const itheima = require('./sc-tools')

//-----------功能1：格式化日期----------
const dt = itheima.dateFormat(new Date())
//输出2020-01-20 10:09:45
console.log(dt)
//-----------功能2：转义 HTML 中的特殊字符---------
const htmlStr = `<h1 style="color:red;">你好!&copy;<span>小黄!</span></h1>`
const str = itheima.htmlEscape(htmlStr)
//&lt;h1 style=&quot;color: red;&quot;&gt;你好!&amp;copy;&lt;span&gt;小黄!&lt:/span&gt;&lt;/h1&gt;
console.log(str);
//-----------功能3：还原 HTML 中的特殊字符---------
const rawHTML = itheima.htmlUnEscape(str)
//输出<h1 style="color:red;">你好!&copy;<span>小黄!</span></h1>
console.log(rawHTML);

//编写包的说明文档
//包根目录中的README.md文件，是包的使用说明文档。通过它，我们可以事先把包的使用说明，以markdown的格式写出来，方便用户参考。
//README文件中具体写什么内容，没有强制性的要求；只要能够清晰地把包的作用、用法、注意事项等描述清楚即可。
//我们所创建的这个包的README.md文档中，会包含以下6项内容；
//安装方式、导入方式、格式化时间、转义HTML中的特殊字符、还原HTML中的特殊字符、开源协议

//登录npm账号
//npm账号注册完成后，可以在终端中执行npm login命令，依次输入用户名、密码、邮箱后，即可登陆成功
//注意：在运行npm login命令之前，必须先把下包的服务器地址切换为npm的官方服务器。否则会导致发布失败!

//把包发布到npm上
//将终端切换到包的根目录之后，运行npm publish命令，即可将包发布到npm上（注意：包名不能雷同）
//package.json中的name一定要独一无二，否则会报错无权限

//删除已发布的包
//运行npm unpublish 包名 --force命令，即可从npm删除已发布的包
//注意:1.npm unpublish命令只能删除72小时以内发布的包
//    2.npm unpublish删除的包，在24小时内不允许重复发布
//    3.发布包的时候要慎重，尽量不要往npm上发布没有意义的包