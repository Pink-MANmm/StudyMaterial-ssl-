//1.按需导出
//按需导出的语法：export 按需导出的成员

//当前模块为03_m2.js
//向外按需导出变量为s1
export let s1 = 'aaa'
//向外按需导出变量s2
export let s2 = 'ccc'
//向外按需导出方法say
export function say() { }

export default {}

//2.按需导入
//按需导入的语法：import {s1} from '模块标识符'

//导入模块成员
import { s1, s2, say } from './03_m2.js'

console.log(s1);//打印输出aaa
console.log(s2);//打印输出ccc
console.log(say);//打印输出[Function: say]

//3.按需导出与按需导入的注意事项
//①每个模块中可以使用多次按需导出
//②按需导入的成员名称必须和按需导出的名称保持一致
//③按需导入时，可以使用as关键字进行重命名
import { s1, s2 as str2, say } from './03_m2.js'
//④按需导入可以和默认导入一起使用
import info, { s1, s2, say } from './03_m2.js'//info指向1中默认导出的空对象