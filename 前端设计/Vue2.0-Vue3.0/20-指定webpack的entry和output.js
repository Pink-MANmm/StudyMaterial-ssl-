//1.webpack中的默认约定
//在webpack 4.x和5.x的版本中，有如下的默认约定：
//①默认的打包入口文件为src->index.js
//②默认的输出文件路径为dist->main.js

//注意：可以在webpack.config.js中修改打包的默认约定

//2.自定义打包的入口与出口
//在webpack.config.js配置文件中，通过entry节点指定打包的入口。通过output节点指定打包的出口。示例代码如下：
const path = require('path')//导入node.js中专门操作路径的模块
module.exports = {
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, './dist'),//输出文件的存放路径
        filename: 'bundle.js'//输出文件的名称
    }
}