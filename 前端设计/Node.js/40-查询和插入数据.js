//1.查询数据
//查询users表中所有的数据：
const mysql = require('mysql')
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '3332963602mqJ!',
    database: 'my_db_01'
})
db.query('SELECT * FROM users', (err, results) => {
    //查询失败
    if (err) return console.log(err.message);
    //查询成功
    //注意：如果执行的是select查询语句，则执行的结果是数组
    console.log(results);
})

//2.插入数据
//向users表中新增数据，其中username为Spider-Man,password为pcc321。示例代码如下：
//①要插入的users表中的数据对象
const user = { username: 'Spider-Man', password: 'pcc321' }
//②待执行的SQL语句，其中英文的？表示占位符
const sqlStr = 'INSERT INTO users (username,password) VALUES (?,?)'
//③使用数组的形式，依次为？占位符指定具体的值
db.query(sqlStr, [user.username, user.password], (err, results) => {
    if (err) return console.log(err.message);  //失败
    if (results.affectedRows === 1) { console.log('插入数据成功'); } //成功 affectedRows:影响的行数
})

//3.插入数据的便捷方式
//向表中新增数据时，如果数据对象的每个属性和数据表的字段一一对应，则可以通过如下方式快速插入数据：
//①要插入到users表中的数据对象
const user1 = { username: 'Spider-Man2', password: 'pcc4321' }
//②待执行的SQL语句，其中英文的？表示占位符
const sqlStr1 = 'INSERT INTO users SET ?'
//③直接将数据对象当做占位符的值
db.query(sqlStr1, user1, (err, results) => {
    if (err) return console.log(err.message)//失败
    if (results.affectedRows === 1) { console.log('插入数据成功') } //成功 affectedRows指受影响的行数
})