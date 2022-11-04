//1.Promise.all()方法
//Promise.all()方法会发起并行的Promise异步操作，等所有的异步操作全部结束后才会执行下一步的.then操作（等待机制）。示例代码如下：

import thenFs from "then-fs"

//定义一个数组，存放3个读文件的异步操作
const promiseArr = [
    thenFs.readFile('./files/11.txt', 'utf8'),
    thenFs.readFile('./files/2.txt', 'utf8'),
    thenFs.readFile('./files/3.txt', 'utf8'),
]
//将Promise的数组，作为Promise.all()的参数
Promise.all(promiseArr)
    .then(([r1, r2, r3]) => {//所有文件读取成功(等待机制)
        console.log(r1, r2, r3);
    })
    .catch(err => {//捕获Promise异步操作中的错误
        console.log(err.message);
    })

//注意：数组中Promise实例的顺序，就是最终结果的顺序

//2.Promise.race()方法
//Promise.race()方法会发起并行的Promise异步操作，只要任何一个异步操作完成，就立即执行下一步的.then操作（赛跑机制）。示例代码如下：

//定义一个数组，存放3个读文件的异步操作
const promiseArr1 = [
    thenFs.readFile('./files/11.txt', 'utf8'),
    thenFs.readFile('./files/2.txt', 'utf8'),
    thenFs.readFile('./files/3.txt', 'utf8'),
]
//将Promise数组，作为Promise.race()的参数
Promise.race(promiseArr1)
    .then((result) => {//只要任何一个异步操作完成，就立即执行成功的回调函数（赛跑机制）
        console.log(result);
    })
    .catch(err => {//捕获Promise异步操作中的错误
        console.log(err.message);
    })