//在终端，运行如下命令，即可将nodemon安装为全局可用的工具
//npm install -g nodemon

//使用nodemon
//当基于Node.js编写了一个网站应用的时候，传统的方式，是运行node app.js命令，来启动项目。这样做的坏处是：代码被修改之后，需要手动重启项目
//现在，我们可以将node命令替换为nodemon命令，使用nodemon app.js来启动项目。这样做的好处是：代码被修改之后，会被nodemon监听到，从而实现自动重启项目的效果
//node app.js
//将上面的终端命令，替换为下面的终端命令，即可实现自动重启项目的效果
//nodemon app.js
//app.js代码进行修改后，会自动重启项目