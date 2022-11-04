//1.基于Promise封装读文件的方法(等价于then-fs)
//方法的封装要求：
//①方法的名称要定义为getFile
//②方法接收一个形参fpath，表示要读取的文件的路径
//③方法的返回值为Promise实例对象

//2.getFile方法的基本定义
//方法的名称为getFile
//方法接收一个形参fpath，表示要读取的文件的路径
function getFile(fpath) {
    //方法的返回值为Promise的实例对象
    return new Promise()
}
//注意：第5行代码中的new Promise()只是创建了一个形式上的异步操作

//3.创建具体的异步操作
//如果想要创建具体的异步操作，则需要在new Promise()构造函数期间，传递一个function函数，将具体的异步操作定义到function函数内部。示例代码如下：

function getFile(fpath) {
    //方法的返回值为Promise的实例对象
    return new Promise(function () {
        //下面这行代码，表示这是一个具体的、读文件的异步操作
        fs.readFile(fpath, 'utf8', (err, dataStr) => { })
    })
}

//4.获取.then()的两个实参
//通过.then()指定的成功和失败的回调函数，可以在function的形参中进行接收，示例代码如下：

function getFile(fpath) {
    //resolve形参是：调用getFile()方法时，通过.then指定的“成功的”回调函数
    //reject形参是：调用getFile()方法时，通过.then指定的“失败的”回调函数
    return new Promise(function (resolve, reject) {
        //下面这行代码，表示这是一个具体的、读文件的异步操作
        fs.readFile(fpath, 'utf8', (err, dataStr) => { })
    })
}
//getFile方法的调用过程
getFile('./files/11.txt').then(成功的回调函数, 失败的回调函数)

//5.调用resolve和reject回调函数
//Promise异步操作的结果，可以调用resolve或reject回调函数进行处理。示例代码如下：

function getFile(fpath) {
    //resolve形参是：调用getFile()方法时，通过.then指定的“成功的”回调函数
    //reject形参是：调用getFile()方法时，通过.then指定的“失败的”回调函数
    return new Promise(function (resolve, reject) {
        fs.readFile(fpath, 'utf8', (err, dataStr) => {
            if (err) return reject(err)//如果读取失败，则调用“失败的回调函数”
            resolve(dataStr)           //如果读取成功，则调用“成功的回调函数”
        })
    })
}
//getFile方法的调用过程
getFile('./files/11.txt').then((r1) => { console.log(r1); }, (err) => { console.log(err.message); })
