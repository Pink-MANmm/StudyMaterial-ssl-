//1.devServer节点
//在webpack.config.js配置文件中，可以通过devServer节点对webpack-dev-server插件进行更多的配置。
//devServer:{
//    open:true,//初次打包完成后，自动打开浏览器
//    host:'127.0.0.1',//实时打包所使用的主机地址
//    port:80//实时打包所使用的接口
//}
//注意：凡是修改了webpack.config.js配置文件，或修改了package.json配置文件，必须重启实时打包的服务器，否则最新的配置文件无法生效！