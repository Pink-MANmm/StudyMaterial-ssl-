//托管静态资源
//1.express.static()

const express = require("express");
const app = express()
//express提供了一个非常好用的函数，叫做express.static()，通过它，我们可以非常方便地创建一个静态资源服务器，例如，通过如下代码就可以将public目录下的图片、CSS文件、JavaScript文件对外开放访问了
app.use(express.static('./clock'))
app.use(express.static('./file'))
//现在，你就可以访问clock目录中的所有文件了
//2.访问多个静态资源文件时，express.static()函数会根据目录的添加顺序查找所需的文件
//3.挂载路径前缀
//如果希望在托管的静态资源访问路径之前，挂载路径前缀，则可以使用如下的方式：
app.use('/bcd', express.static('./public'))
//现在，你就可以通过带有/bcd前缀地址来访问public目录中的文件了,否则使用无前缀的静态资源文件
app.listen(500, () => {
    console.log('express server running at http://127.0.0.1:500');
})