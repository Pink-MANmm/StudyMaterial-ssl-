//1.配置webpack的打包发布
//在package.json文件的scripts节点下，新增build命令如下：
//"scripts":{
//    "dev-server":"webpack serve",//开发环境中，运行dev命令
//    "build":"webpack --mode production"//项目发布时，运行build命令
//}
//--mode是一个参数项，用来指定webpack的运行模式。production代表生产环境，会对打包生成的文件
//进行代码压缩和性能优化。

//注意：通过--mode指定的参数项，会覆盖webpack.config.js中的mode选项