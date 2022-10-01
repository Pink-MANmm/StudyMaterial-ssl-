//fs模块是Node.js官方提供的、用来操作文件的模块,他提供了一系列的方法和属性，用来满足用户对文件的操作需求
//fs.readFile()方法，用来读取指定文件中的内容
//fs.writeFile()方法，用来向指定的文件中写入内容
//如果要在JavaScript代码中，使用fs模块操作文件，则需要使用如下的方式先导入它
const fs = require('fs')//安装node时就已经把fs模块安装到了电脑本地

//-------------------------------------------------------------------------------------------
//fs.readFile()的语法格式
//使用fs.readFile()方法，可以读取指定文件中的内容，语法格式如下
//fs.readFile(path[,options],callback)
//参数1：必选参数，字符串，表示文件路径
//参数2：可选参数，表示以什么编码格式来读取文件
//参数3：必选参数，文件读取完成后，通过回调函数拿到读取的结果
//实例
//以utf8的编码格式，读取指定文件的内容，并打印err和dataStr的值
fs.readFile('./files/1.txt', 'utf8', function (err, dataStr) {
    //打印失败的结果
    //如果读取成功，则err的值为null
    //如果读取失败，则err的值为 错误对象，dataStr的值为undefined
    console.log(err);
    console.log('-----');
    //打印成功的结果
    console.log(dataStr);
    console.log('-------------------------------------------------------');
})
fs.readFile('./files/1.txt', 'utf8', function (err, dataStr) {
    if (err) {
        return console.log('文件读取失败!' + err.message);
    }
    console.log('文件读取成功，内容是：' + dataStr);
    console.log('-------------------------------------------------------');
})
//-------------------------------------------------------------------------------------------
//fs.writeFile()的语法格式
//使用fs.writeFile()方法，可以向指定的文件中写入内容，语法格式如下：
//fs.writeFile(file,data[,options],callback)
//参数1：必选参数，需要指定一个文件路径的字符串，表示文件存放路径
//参数2：必选参数，表示要写入的内容
//参数3：可选参数，表示以什么格式写入文件内容，默认值是utf8
//参数4：必选参数，文件写入完成后的回调函数
const fs2 = require('fs')
fs2.writeFile('./files/2.txt', 'abc', function (err) {
    //如果文件写入成功，则err的值为null
    //如果文件写入失败，则err的值等于一个 错误对象
    console.log(err);
    console.log('-------------------------------------------------------');
})
fs2.writeFile('./files/2.txt', 'abc', function (err) {
    if (err) {
        return console.log('文件写入失败！' + err.message);
    }
    console.log('文件导入成功！');
    console.log('-------------------------------------------------------');
})