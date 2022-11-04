import thenFs from 'then-fs'
//1.通过.catch捕获错误
//在Promise的链式操作中如果发生了错误，可以使用Promise.prototype.catch方法进行捕获和处理
thenFs.readFile('./files/1.txt', 'utf8')//文件不存在导致读取失败，后面的3个.then都不执行
    .then((r1) => {
        console.log(r1);
        return thenFs.readFile('./files/2.txt', 'utf8')
    })
    .then((r2) => {
        console.log(r2);
        return thenFs.readFile('./files/3.txt', 'utf8')
    })
    .then((r3) => {
        console.log(r3);
    })
    .catch(err => {//捕获第1行发生的错误，并输出错误的消息
        console.log(err.message);
    })
//如果不希望前面的错误导致后续的.then无法正常执行，则可以将.catch的调用提前，示例代码如下：
thenFs.readFile('./files/1.txt', 'utf8')//文件不存在导致读取失败，后面的3个.then都不执行
    .catch(err => {//捕获第1行发生的错误，并输出错误的消息
        console.log(err.message);
    })
    .then((r1) => {
        console.log(r1);
        return thenFs.readFile('./files/2.txt', 'utf8')
    })
    .then((r2) => {
        console.log(r2);
        return thenFs.readFile('./files/3.txt', 'utf8')
    })
    .then((r3) => {
        console.log(r3);
    })