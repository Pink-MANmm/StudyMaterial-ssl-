//1.使用ES6导入语法，导入jQuery
import $ from 'jquery'
//导入样式(在webpack中，一切皆模块，都可以通过ES6导入语法进行导入和使用)
//如果某个模块中，使用from接收到的成员为undefined，则没有必要进行接收
import '@/css/index.css'
import '@/css/index.less'

//导入图片，得到图片文件(base64)
import pic1 from '@/images/pic1.png'
//给img标签的src属性赋值
$('.box').attr('src', pic1)

//2.定义jQuery的入口函数
$(function () {
    //3.实现奇偶行变色
    $('li:odd').css('background-color', 'red')//奇数
    $('li:even').css('background-color', 'black')//偶数
})

//定义一个装饰器函数info
function info(target) {
    target.info = 'Person info'
}

//定义一个普通的类
@info
class Person { }

console.log(Person.info);