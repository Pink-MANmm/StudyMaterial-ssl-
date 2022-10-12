//ES6的模块化主要包含如下3种语法：
//①默认导出与默认导入
//②按需导出与按需导入
//③直接导入并执行模块中的代码

//1.默认导出
//默认导出的语法：export default 默认导出的成员
let n1 = 10//定义模块私有成员n1
let n2 = 20//定义模块私有成员n2（外界访问不到n2，因为它没有被共享出去）
function show() { }//定义模块私有方法show
export default {//使用export default默认导出语法，向外共享n1和show两个成员
    n1,
    show
}

//2.默认导入
//默认导入的语法：import 接收名称 from '模块标识符'

//从1中模块中导入export default向外共享的成员
//并使用m1成员进行接收
import m1 from './01_m1.js'

//打印输出的结果为：
//{n1:10,show:[Function:show]}
console.log(m1);

//3.默认导出的注意事项
//每个模块中，只允许使用唯一的一次export default，否则会报错！

//4.默认导入的注意事项
//默认导入时的接收名称可以任意名称，只要是合法的成员名称即可