//1.打包处理js文件中的高级语法
//webpack只能打包处理一部分高级的JavaScript语法。对于那些webpack无法处理的高级js语法，需要借
//助于babel-loader进行打包处理。例如webpack无法处理下面的JavaScript代码：

//1.定义了名为info的装饰器
function info(target) {
    //2.为目标添加静态属性
    target.info = 'Person info'
}
//3.为Person类应用info装饰器
@info
class Person { }
//4.打印Person的静态属性info
console.log(Person.info);

//2.安装babel-loader相关的包
//npm i babel-loader @babel/core @babel/plugin-proposal-decorators -D(后两项为babel-loader的核心依赖项)
//在webpack.config.js的module->rules数组中，添加loader规则如下：
//注意：必须使用exclude指定排除项；因为node_modules目录下的第三方包不需要被打包
//{ text: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }

//3.配置babel-loader
//在项目根目录下，创建名为babel.config.js的配置文件，定义Babel的配置项如下：
module.exports = {
    //声明babel可用的创建
    plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]]
}
//详细参考Babel的官网https://bebeljs.io/docs/en/babel-plugin-proposal-decorators