//1.安装html-webpack-plugin
//运行如下命令，即可在项目中安装此插件：
//npm i html-webpack-plugin -D

//2.配置html-webpack-plugin
//①导入HTML插件，得到一个构造函数
const HtmlPlugin = require('html-webpack-plugin')
//②创建HTML插件的实例对象
const htmlPlugin = new HtmlPlugin({
    template: './src/index.html',//指定原文件的存放路径
    filename: './index.html'//指定生成的文件的存放路径
})
module.exports = {
    mode: 'development',
    plugins: [htmlPlugin]//③通过plugins节点，使htmlPlugin插件生效
}