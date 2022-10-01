//在每个.js自定义模块中都有一个module对象，它里面存储了和当前模块有关的信息：
console.log(module);
/*
Module {
    id: '.',
    path: 'd:\\学习资料\\前端设计\\Node.js',
    exports: { },
    filename: 'd:\\学习资料\\前端设计\\Node.js\\13-module对象.js',
    loaded: false,
    children: [],
    paths: [
        'd:\\学习资料\\前端设计\\Node.js\\node_modules',
        'd:\\学习资料\\前端设计\\node_modules',
        'd:\\学习资料\\node_modules',
        'd:\\node_modules'
    ]
}
*/
//通过exports可以向外共享成员

//module.exports对象
//在自定义模块中，可以使用module.exports对象，将模块内的成员共享出去，供外界使用。
//外界用require()方法导入自定义模块时，得到的就是module.exports所指向的对象