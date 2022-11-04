//1.什么是Source Map
//Source Map是一个信息文件，里面储存着位置信息。也就是说，Source Map文件中存储着压缩混淆后的
//代码，所对应的转换前的位置
//有了它，出错的时候，除错工具将直接显示原始代码，能够极大的方便后期的调试

//2.默认Source Map的问题
//开发环境下默认生成的Source Map，记录的是生成后的代码的位置。会导致运行时报错的行数与源代码的行数不一致的问题。

//3.解决默认Source Map的问题
//开发环境下，推荐在webpack.config.js中添加如下的配置，即可保证运行时报错的行数与源代码的行数保持一致：
module.exports = {
    mode: 'development',
    //eval-source-map仅限在“开发模式”下使用，不建议在“生产模式”下使用
    //此选项生成的Source Map能够保证“运行时报错的行数”与“源代码的行数”保持一致
    devtool: 'eval-source-map',
    //省略其它配置项
}

//4.发布项目建议关闭Source Map
//webpack生产环境下的Source Map：
//在生产环境下，如果省略了devtool选项，则最终生成的文件中不包含Source Map，这能够防止原始代码通过
//Source Map的形式暴露给别有所图之人
