//1.EventLoop的基本概念
//JavaScript主线程从“任务队列”中读取异步任务的回调函数，放到执行栈中依次执行。这个过程是循环不断的，所以整个的这种运行机制又称为EventLoop（事件循环）

//2.结合EventLoop分析输出的顺序
import thenFs from 'then-fs'
console.log('A');
thenFs.readFile('./files/1.txt', 'utf8').then(dataStr => {
    console.log('B');
})
setTimeout(() => {
    console.log('C');
}, 0)
console.log('D');
//输出结果：ADCB

//A和D属于同步任务。会根据代码的先后顺序依次被执行
//C和B属于异步任务。它们的回调函数会被加入到任务队列中，等待主线程空闲时再执行（且C的步骤较B更简单，故先进入任务队列）