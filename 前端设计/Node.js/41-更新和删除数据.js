const mysql = require('mysql')
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '3332963602mqJ!',
    database: 'my_db_01'
})
//一.更新数据
//可以通过如下方式，更新表中的数据：

//1.要更新的数据对象
const user = { id: 7, username: 'aaa', password: '000' }
//2.要执行的SQL语句
const sqlStr = 'UPDATE users SET username=?,password=? WHERE id=?'
//3.调用db.query()执行SQL语句的同时，使用数组依次为占位符指定具体的值
db.query(sqlStr, [user.username, user.password, user.id], (err, results) => {
    if (err) return console.log(err.message);//失败
    if (results.affectedRows === 1) { console.log('更新数据成功！'); }//成功
})

//二.更新数据的快捷方式
//更新表数据时，如果数据对象的每个属性和数据表的字段一一对应，则可以通过如下方式快速更新表数据

//1.要更新的数据对象
const user1 = { id: 7, username: 'aaaa', password: '0000' }
//2.要执行的SQL语句
const sqlStr1 = 'UPDATE users SET ? WHERE id=?'
//3.调用db.query()执行SQL语句的同时，使用数组依次为占位符指定具体的值
db.query(sqlStr1, [user1, user1.id], (err, results) => {
    if (err) return console.log(err.message);//失败
    if (results.affectedRows === 1) { console.log('更新数据成功!'); }//成功
})

//三.删除数据
//在删除数据时，推荐根据id这样的唯一标识，来删除对应的数据。示例如下：

//1.要执行的SQL语句
const sqlStr2 = 'DELETE FROM users WHERE id=?'
//2.调用db.query()执行SQL语句的同时，为占位符指定具体的指
//注意：如果SQL语句中有多个占位符，则必须使用数组为每个占位符指定具体的值
//      如果SQL语句中只有一个占位符，则可以省略数组
db.query(sqlStr2, 7, (err, results) => {
    if (err) return console.log(err.message);//失败
    if (results.affectedRows === 1) { console.log('删除数据成功!'); }//成功
})

//四.标记删除
//使用DELETE语句，会把真正的数据从表中删除掉。为了保险起见，推荐使用标记删除的方式，来模拟删除的动作。
//所谓的标记删除，就是在表中设置类似于status这样的状态字段，来标记当前这条数据是否被删除
//当用户执行了删除的动作时，我们并没有执行DELETE语句吧数据删除掉，而是执行了UPDATE语句，将这条数据对应的status字段标记为删除即可

//标记删除：使用UPDATE语句替代DELETE语句；只更新数据的状态，并没有真正删除
db.query('UPDATE users SET status=1 WHERE id=?', 5, (err, results) => {
    if (err) return console.log(err.message);//失败
    if (results.affectedRows === 1) { console.log('标记删除成功！'); }//成功
})