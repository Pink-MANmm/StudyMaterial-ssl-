//1.什么是webpack
//概念：webpack是前端项目工程化的具体解决方案
//主要功能：它提供了友好的前端模块化开发支持，以及代码压缩混淆、处理浏览器端JavaScript的兼容性、性能优化等强大的功能
//好处：让程序员把工作的重心放到具体功能的实现上，提高了前端开发效率和项目的可维护性
//注意：目前Vue，React等前端项目，基本上都是基于webpack进行工程化开发的

//2.webpack的基本使用--创建列表隔行变色项目
//①新建项目空白目录，并运行npm init -y命令，初始化包管理配置文件package.json
//②新建src源代码目录
//③新建src->index.html首页和src->index.js脚本文件
//④初始化首页基本的结构  ( ul>li{这是第$个li}*9 )
//⑤运行npm install jquery -S命令，安装jQuery( -S指明确说明将安装的包记录到package.json的dependencies属性（核心依赖包）中去。不使用-S同样会记录到其中 )（全写--save）
//⑥通过ES6模块化的方式导入jQuery，实现列表隔行变色效果

//3.在项目中安装webpack
//在终端运行如下的命令，安装webpack相关的两个包
//npm install webpack webpack-cli -D  (-D类似于-S，但记录的属性在devDependencies（开发依赖包）。全写--save-dev)

//4.在项目中配置webpack
//①在项目根目录中，创建名为webpack.config.js的webpack配置文件，并初始化如下的基本配置：
//module.exports = {
//    mode: 'development'//mode用来指定构建模式，可选值有development和production(开发模式与发布模式)
//}
//②在package.js的scripts节点下，新增dev脚本如下：
//"scripts": {
//    "dev": "webpack"//script节点下的脚本，可以通过npm run执行。例如npm run dev(dev可以修改，webpack为固定写法)
//}
//③在终端中运行npm run dev命令，启动webpack进行项目的打包构建
//④会生成一个dist文件夹，其中有一个main.js文件，此文件作用与index.js相同，但不具有兼容性，可以在浏览器中成功运行