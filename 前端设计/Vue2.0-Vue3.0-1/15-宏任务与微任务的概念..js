//1.什么是宏任务和微任务
//JavaScript把异步任务又做了进一步的划分，异步任务由分为两类，分别是：

//①宏任务（macrotask）
//*异步Ajax请求、
//*setTimeout、setInterval、
//*文件操作
//*其他红任务

//②微任务（microtask）
//*Promise.then、.catch和.finally
//*Process.nextTick
//*其他微任务

//2.宏任务和微任务的执行顺序
//每一个宏任务执行完之后，都会检查是否存在待执行的微任务，
//如果有，则执行完所有微任务之后，再继续执行下一个宏任务

//3.去银行办业务的场景
//①小云和小腾去银行办业务。首先，需要取号之后进行排队
//*宏任务队列
//②假设当前银行网点只有一个柜员，小云在办理存款业务时，小腾只能等待
//*单线程，宏任务按次序执行
//③小云办完存款业务后，柜员询问他是否还想办理其他业务
//*当前宏任务执行完，检查是否有微任务
//④小云告诉柜员：想要买理财产品、再办个信用卡、最后再兑换点马年纪念币？
//*指行微任务，后续宏任务被推迟
//⑤小云离开柜台后，柜员开始为小腾办理业务
//*所有微任务执行完毕，开始执行下一个宏任务

//4.经典面试题-1
//分析以下代码输出的顺序
setTimeout(function () {            //
    console.log('1');               // 宏任务
})                                  //

new Promise(function (resolve) {    //
    console.log('2');               // 同步任务
    resolve()                       //
}).then(function () {
    console.log('3');               // 微任务
})

console.log('4');                   // 同步任务

//输出结果2431
//分析：
//①先执行所有的同步任务
//②再执行微任务
//③再执行下一个宏任务

//经典面试题-2
console.log('1');
setTimeout(function () {
    console.log('2');
    new Promise(function (resolve) {
        console.log('3');
        resolve()
    }).then(function () {
        console.log('4');
    })
})
new Promise(function (resolve) {
    console.log('5');
    resolve()
}).then(function () {
    console.log('6');
})
setTimeout(function () {
    console.log('7');
    new Promise(function (resolve) {
        console.log('8');
        resolve()
    }).then(function () {
        console.log('9');
    })
})
//最终输出结果为：156234789