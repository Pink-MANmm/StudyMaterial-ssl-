//在一个自定义模块中，默认情况下，module.exports={}
const username = '张三'

//向module.exports对象上挂载username属性
module.exports.username1 = '李四'

function sayHello() {
    console.log('大家好！我是', username);
}

//向module.exports对象上挂载sayHello方法
module.exports.sayHello1 = function () {
    console.log('Hello!');
}

module.exports.username = username

//让module.exports指向一个全新的对象
module.exports = {
    nickname: '小黑',
    sayHi() {
        console.log('Hi!');
    }
}

//exports无法指向一个全新的对象
exports = {
    text: 'success'
}
