//在外界使用require导入一个自定义模块的时候，得到的成员
//就是那个模块中，通过module.exports指向的那个对象

//注意：再使用require加载用户自定义模块期间，可以省略.js的后缀名
const m1 = require('./11-自定义模块')
console.log(m1);//若未设置module.exports则返回{}
//和函数作用域类似，在自定义模块中定义的变量、方法等成员，只能在当前模块内被访问，这种模块级别的访问限制，叫做模块作用域
//设置了module.exports则返回{ username1: '李四', sayHello1: [Function (anonymous)] }

//require()方法导入模块时，导入结果，永远以module.exports指向的对象为准