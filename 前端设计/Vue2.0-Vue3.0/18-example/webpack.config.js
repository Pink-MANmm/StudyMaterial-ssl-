const path = require('path')
//导入HTML插件，得到一个构造函数
const HtmlPlugin = require('html-webpack-plugin')
//创建HTML插件的实例对象
const htmlPlugin = new HtmlPlugin({
    template: './src/index.html',//指定原文件的存放路径
    filename: './index.html'//指定生成的文件的存放路径
})

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const cleanPlugin = new CleanWebpackPlugin()

module.exports = {
    //结论：开发时候一定要用development，因为追求的是打包的速度，而不是体积。
    //反过来，发布上线的时候一定要用production，因为上线追求的是体积小，而不是打包速度快！
    mode: 'development',
    //在开发调试阶段，建议把devtool的值设置为eval-source-map
    //devtool: 'eval-source-map',
    //在实际发布的时候，建议把devtool的值设置为nosources-source-map或直接关闭SourceMap
    devtool: 'nosources-source-map',
    //entry：指定要处理那个文件
    entry: path.join(__dirname, './src/index.js'),
    //output:指定生成的文件要存放到哪里
    output: {
        //存放到目录
        path: path.join(__dirname, 'dist'),
        //生成的文件名
        filename: 'js/bundle.js'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, './'),
        },//指定发布后的映射的路径，./代表映射当前路径
        compress: true,//压缩资源
        port: 9000,//指定服务器端口
        open: true//指定以哪个浏览器打开,open:true代表以默认浏览器打开
    },
    plugins: [htmlPlugin, cleanPlugin],//通过plugins节点，使htmlPlugin插件生效
    module: {//所有第三方文件模板的匹配规则
        rules: [//文件后缀名的匹配规则
            //定义了不同模块对应的loader
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            //处理.less文件的loader
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            //处理图片文件的loader
            //如果需要调用的loader只有一个，则只传递一个字符串也行，如果有多个loader，则必须指定数组
            //在配置url-loader的时候，多个参数之间，使用&符号进行分隔
            { test: /\.jpg|png|gif$/, use: 'url-loader?limit=22229&outputPath=images' },
            //使用babel-loader处理高级的JS语法
            //在配置babel-loader的时候，程序员只需要把自己的代码进行转换即可；一定要排除node_modules目录中的JS文件
            //因为第三方包中的JS兼容性，不需要程序员关心
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
        ]
    },
    resolve: {
        alias: {
            //告诉webpack，程序员写的代码中，@符号表示src这一层目录
            '@': path.join(__dirname, './src/')
        }
    }
}