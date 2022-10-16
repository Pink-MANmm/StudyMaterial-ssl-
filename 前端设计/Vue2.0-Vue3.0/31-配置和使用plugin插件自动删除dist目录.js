//1.自动清理dist目录下的旧文件
//为了在每次打包发布时自动清理掉dist目录中的旧文件，可以安装并配置clean-webpack-plugin插件：

//①安装清理dist目录的webpack插件
//npm install clean-webpack-plugin -D
//②按需导入插件，得到插件的构造函数之后，创建插件的实例对象
//注意：左侧的{}是解构赋值（{CleanWebpackPlugin}={CleanWebpackPlugin:function(){ }}）
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const cleanPlugin = new CleanWebpackPlugin()
//③把创建的cleanPlugin插件实例对象，挂载到plugins节点中
plugins: [htmlPlugin, cleanPlugin]//挂载插件