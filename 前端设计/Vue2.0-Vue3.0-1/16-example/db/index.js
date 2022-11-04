import mysql from 'mysql2'

const pool = mysql.createPool({
    host: '127.0.0.1',
    post: 3306,
    database: 'my_db_01',//请填写要操作的数据库的名称
    user: 'root',
    password: '3332963602mqJ!'
})

//默认导出一个支持Promise API的pool
export default pool.promise()