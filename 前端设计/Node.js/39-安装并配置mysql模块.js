//在项目中操作数据库的步骤
//①安装操作MySQL数据库的第三方模块(mysql)
//②通过mysql模块连接到MySQL数据库
//③通过mysql模块执行SQL语句

//1.安装mysql模块
//mysql模块是托管于npm上的第三方模块。它提供了在Node.js项目中连接和操作MySQL数据库的能力。
//想要在项目中使用它，需要先运行如下命令，将mysql安装为项目的依赖包：
//npm install mysql

//2.配置mysql模块
//在使用mysql模块操作MySQL数据库之前，必须先对mysql模块进行必要的配置，主要的配置步骤如下：
//①导入mysql模块
const mysql = require('mysql')
//②建立与MySQL数据库的连接
const db = mysql.createPool({
    host: '127.0.0.1', //数据库的IP地址
    user: 'root', //登录数据库的账号
    password: '3332963602mqJ!', //登录数据库的密码
    database: 'my_db_01' //指定要操作哪个数据库
})

//3.测试mysql模块能否正常工作
//调用db.query()函数，指定要执行的SQL语句，通过回调函数拿到执行的结果：

//监测mysql模块能否正常工作   'SELECT 1'没有任何实质作用，仅用于测试
db.query('SELECT 1', (err, results) => {
    if (err) return console.log(err.message);
    //只要能打印出 [ RowDataPacket { '1':1 } ] 的结果，就证明数据库连接正常
    console.log(results);
})

