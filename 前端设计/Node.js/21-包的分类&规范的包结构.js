//包的分类
//1.项目包
//那些被安装到项目的node_modules目录中的包，都是项目包
//项目包又分为两类，分别是：
//*开发依赖包（被记录到devDependencies节点中的包，只在开发期间会用到）  npm i 包名 -D
//*核心依赖包（被记录到dependencies节点中的包，在开发期间和项目上线之后都会用到） npm i 包名
//2.全局包
//在执行npm install命令时，如果提供了-g参数，则会把包安装为全局包
//全局包会被安装到C:\Users\用户目录\AppData\Roaming\npm\node_modules目录下
//注意：*只有工具性质的包，才有全局安装的必要性。因为它们提供了好用的终端命令
//     *判断某个包是否需要全局安装后才能使用，可以参考官方提供的使用说明即可。
//3.i5ting_toc
//i5ting_toc是一个可以把md文档转为html页面的小工具，使用步骤如下：
//将i5ting_toc安装为全局包
//npm install -g i5ting_toc
//调用i5ting_toc，轻松实现md转html的功能
//i5ting_toc -f 要转换的md文件路径 -o

//规范的包结构
//一个规范的包，它的组成结构，必须符合以下3点要求：
//1.包必须以单独的目录二存在
//2.包的顶级目录下必须包含package.json这个包管理配置文件
//3.package.json中必须包含name，version，main这三个数形，分别代表包的名字、版本号、包的入口
//注意：以上3点要求是一个规范的包结构必须遵守的格式，关于更多的约束，可以参考如下网址：
//https://yarnpkg.com/zh-Hans/docs/package-json