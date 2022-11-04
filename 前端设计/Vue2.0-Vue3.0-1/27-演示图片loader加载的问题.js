//1.打包处理样式表中与url路径相关的文件
//①运行npm i url-loader file-loader -D命令（file-loader为url-loader的内部依赖项）
//②在webpack.config.js的module->rules数组中，添加loader规则如下：
module: {
    rules: [
        { text: /\.jpg|png|gif$/, use: 'url-loader?limit=22229' }
    ]
}
//其中？之后的是loader的参数项：
//*limit用来指定图片的大小，单位是字节（byte）
//*只有<=limit大小的图片，才会被转为base64格式的图片，否则被转为路径地址
