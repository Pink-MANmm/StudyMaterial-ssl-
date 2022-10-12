import express from 'express'
//从user_ctrl.js模块中按需导入getAllUser函数
import { getAllUser } from '../controller/user_ctrl.js'

//创建路由对象
const router = new express.Router()
//挂在路由规则
router.get('/user', getAllUser)

//使用ES6的默认导出语法，将路由对象共享出去
export default router