import fs from 'fs'
//1.基于回调函数按顺序读取文件内容

//读取文件1.txt
fs.readFile('./files/1.txt', 'utf8', (err1, r1) => {
    if (err1) return console.log(err1.message);//读取文件1失败
    console.log(r1);//读取文件1成功
    //读取文件2.txt
    fs.readFile('./files/2.txt', 'utf8', (err2, r2) => {
        if (err2) return console.log(err2.message);//读取文件2失败
        console.log(r2);//读取文件2成功
        //读取文件3.txt
        fs.readFile('./files/3.txt', 'utf8', (err3, r3) => {
            if (err3) return console.log(err3.message);//读取文件2失败
            console.log(r2);//读取文件2成功
            //读取文件3.txt)
        })
    })
})

//2.基于then-fs读取文件内容
//由于node.js官方提供的fs模块仅支持以回调函数的方式读取文件，不支持Promise的调用方式。因此，需要先运行如下的命令，安装then-fs这个第三方包，从而支持我们基于Promise的方式读取文件的内容：
//npm install then-fs

//3.then-fs的基本使用
//调用then-fs提供的readFile()方法，可以异步地读取文件的内容，它的返回值是Promise的实例对象。因此可以调用.then()方法为每个Promise异步操作指定成功和失败之后的回调函数。示例代码如下：

/**
 * 基于Promise的方式读取文件
 */
import thenFs from 'then-fs'
//注意：.then()中的失败回调是可选的，可以被忽略
thenFs.readFile('./Files/1.txt', 'utf8').then(r1 => { console.log(r1); }, err1 => { console.log(err1.message); })
thenFs.readFile('./Files/2.txt', 'utf8').then(r2 => { console.log(r2); }, err2 => { console.log(err2.message); })
thenFs.readFile('./Files/3.txt', 'utf8').then(r3 => { console.log(r3); }, err3 => { console.log(err3.message); })
//注意：上述的代码无法保证文件的读取顺序，需要进一步的改进！