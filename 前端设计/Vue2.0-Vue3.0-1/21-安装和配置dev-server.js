//1.webpack插件的作用
//通过安装和配置第三方的插件，可以拓展webpack的能力，从而让webpack用起来更方便。最常用的webpack插件有如下两个：
//①webpack-dev-server
//*类似于node.js阶段用到的nodemon工具
//*每当修改了源代码，webpack会自动进行项目的打包和构建
//②html-webpack-plugin
//*webpack中的HTML插件（类似于一个模板引擎插件）
//*可以通过此插件自定制index.html页面的内容

//2.安装webpack-dev-server
//运行如下的命令，即可在项目中安装此插件：
//npm install webpack-dev-server -D

//3.配置webpack-dev-server
//①在webpack.config.js中配置如下命令：
//devServer:{
//    static: {
//      directory: path.join(__dirname, './'),
//    },//指定发布后的映射的路径，./代表映射当前路径
//    compress:true,//压缩资源
//    port:9000,//指定服务器端口
//    open:'Chrome'//指定以哪个浏览器打开,open:true代表以默认浏览器打开
//}
//②修改package.json->scripts中的dev命令如下：
//"scripts":{
//    "dev-server":"webpack serve",//script节点下的脚本，可以通过npm run 执行
//}
//③再次运行npm run dev命令，重新进行项目的打包
//④在浏览器中访问http://localhost:8080地址，查看自动打包效果
//注意：webpack-dev-server会启动一个实时打包的http服务器
//注意：在目录下没有编译的bundle.js文件，其实是有的，webpack - dev - server将我们的文件编译后，发布存放在内存内，不在物理磁盘上，例如：我们开启后，访问bundle.js是可以访问到的
