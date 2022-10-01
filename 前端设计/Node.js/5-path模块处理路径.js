//path模块是Node.js官方提供的、用来处理路径的模块。它提供了一系列的方法和属性，用来满足用户对路径的处理需求
//例如
//path.join()方法，用来将多个路径片段拼接成一个完整的路径字符串
//path.basename()方法，用来从路径字符串中，将文件名解析出来
//如果要在JavaScript代码中，使用path模块来处理路径，则需要使用如下的方式先导入它
const path = require('path')

//path.join()的语法格式
//使用path.join()方法，可以把多个路径片段拼接为完整的路径字符串
const pathStr = path.join('/a', '/b/c', '../', './d', 'e')
console.log(pathStr);

const pathStr2 = path.join(__dirname, './files/4.txt')
console.log(pathStr2);

//path.basename()的语法格式
//使用path.basename()方法，可以获取路径中的最后一部分，经常通过这个方法获取路径中的文件名，语法格式如下：
//path.basename(path[,ext])
//path<string>必选参数，表示一个路径的字符串
//ext<string>可选参数，表示文件扩展名
//返回:<string>表示路径中的最后一部分
//实例：
//使用path.basename()方法，可以从一个文件路径中，获取到文件的名称部分：
const fpath = 'a/b/c/index.html'//文件的存放路径

var fullName = path.basename(fpath)
console.log(fullName);//输出 index.html

var nameWithoutExt = path.basename(fpath, '.html')
console.log(nameWithoutExt);//输出 index

//path.extname()的语法格式
//使用path.extname()方法，可以获取路径中的扩展名部分，语法格式如下：
//path.extname(path)
//path<string>必选参数，表示一个路径的字符串
//返回:<string>返回得到的扩展名字符串
//实例 
const fext = path.extname(fpath)
console.log(fext);