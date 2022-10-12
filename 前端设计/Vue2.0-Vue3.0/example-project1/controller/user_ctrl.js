import db from '../db/index.js'

//获取所有用户的列表数据
export async function getAllUser(req, res) {
    //使用try...catch捕获Promise异步任务中产生的异常错误，并在catch块中进行处理
    try {
        const [rows] = await db.query('select id,username,nickname from cv_users')
        res.send({
            status: 0,
            meg: '获取用户列表数据成功！',
            data: rows
        })
    } catch (e) {
        res.send({
            status: 1,
            meg: '获取用户列表数据失败！',
            desc: e.message
        })
    }
}