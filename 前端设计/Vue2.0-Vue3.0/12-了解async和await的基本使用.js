import thenFs from "then-fs"
//1.什么是asynt/await
//async/await是ES8(ECMAScript2017)引入的新语法，用来简化Promise异步操作。在async/await出现之前，开发者只能通过链式.then()的方式处理Promise异步操作。示例代码如下：
thenFs.readFile('./files/11.txt', 'utf8')
    .then(r1 => {
        console.log(r1);
        return thenFs.readFile('./files/2.txt', 'utf8')
    })
    .then(r2 => {
        console.log(r2);
        return thenFs.readFile('./files/3.txt', 'utf8')
    })
    .then(r3 => {
        console.log(r3);
    })
//.then链式调用的优点：解决了回调地狱的问题
//.then链式调用的缺点：代码冗余、阅读性差

//2.asynt/await的基本使用
//使用asynt/await简化Promise异步操作的示例代码如下：
async function getAllFile() {//使用await关键字，必须添加async修饰
    const r1 = await thenFs.readFile('./files/11.txt', 'utf8')//添加await则返回的不再是Promise对象，而是文件本身的内容
    console.log(r1);
    const r2 = await thenFs.readFile('./files/2.txt', 'utf8')
    console.log(r2);
    const r3 = await thenFs.readFile('./files/3.txt', 'utf8')
    console.log(r3);
}
getAllFile()

//3.async/await的使用注意事项
//①如果在function中使用了await，则function必须被async修饰
//②在async方法中，第一个await之前的代码会同步执行，await之后的代码会异步执行
console.log('A')
async function getAllFile1() {
    console.log('B');
    const r1 = await thenFs.readFile('./files/11.txt', 'utf8')
    const r2 = await thenFs.readFile('./files/2.txt', 'utf8')
    const r3 = await thenFs.readFile('./files/3.txt', 'utf8')
    console.log(r1, r2, r3);
    console.log('D');
}
getAllFile1()
console.log('C');
//输出结果A、B、C、111 222 333、D