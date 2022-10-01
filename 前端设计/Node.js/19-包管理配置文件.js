//npm规定，在项目根目录中，必须提供一个叫做package.json的包管理配置文件。用来记录与项目相关的一些配置信息。例如：
//项目的名称、版本号、描述等
//项目中都用到了哪些包
//那些包只在开发期间会用到
//哪些包在开发和部署时都需要用到

//多人协作的问题
//在项目根目录中，创建一个叫做package.json的配置文件，即可用来记录项目中安装了哪些包，从而方便删除node_modules目录之后，在团队成员之间共享项目的源代码
//注意:今后在项目开发中，一定要把node_modules文件夹，添加到.gitignore忽略文件中

//快速创建package.json
//npm包管理工具提供了一个快捷命令，可以在执行命令时所处的目录中，快速创建package.json这个包管理配置文件
//npm init -y
//注意：1.上述命令只能在英文的目录下成功运行!所以，项目文件夹的名称一定要使用英文命名，不要使用中文，不能出现空格
//     2.运行npm install命令安装包的时候，npm包管理工具会自动把包的名称和版本号，记录到package.json中

//dependencies节点
//package.json文件中，有一个dependencies节点，专门用来记录您使用npm install命令安装了哪些包

//一次性安装所有的包
//当我们拿到了一个删除了node_modules的项目之后，需要先把所有的包下载到项目中，才能将项目运行起来，否则会报类似于下面的错误：
//Error:Cannot find module 'moment'
//可运行npm install命令(或npm i)一次性安装所有的依赖包

//卸载包
//可以运行npm uninstall命令，来卸载指定的包
//npm uninstall moment
//注意：npm uninstall命令执行成功后，会把卸载的包，自动从package.json的dependencies中移除掉

//devDependencies节点
//如果某些包只在项目开发阶段会用到，在项目上线之后不会用到，则建议把这些包记录到devDependencies节点中
//与之对应的，如果某些包在开发和项目上线之后都需要用到，则建议把这些包记录到dependencies节点中
//您可以使用如下的命令，将包记录到devDependencies节点中
//npm i 包名 -D
//注意：上述命令是简写形式，等价于下面完整的写法。
//npm install 包名 --save-dev