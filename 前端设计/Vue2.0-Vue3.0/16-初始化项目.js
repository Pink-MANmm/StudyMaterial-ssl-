//参考example-project1

//1.案例需求
//基于MySQL数据库+Express对外提供用户列表的API接口服务。用到的技术点如下：
//*第三方包express和mysql2
//*ES6模块化
//*Promise
//*async/await

//2.主要的实现步骤
//①搭建项目的基本结构
//②创建基本的服务器
//③创建db数据库操作模块
//④创建user_ctrl业务模块
//⑤创建user_router路由模块

//3.搭建项目的基本结构
//①启用ES6模块化支持
//*在package.json中声明"type":"module"
//②安装第三方依赖包
//*运行npm install express@4.17.1 mysql2@2.2.5