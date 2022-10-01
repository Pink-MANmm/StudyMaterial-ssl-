const fs = require('fs')
//不要使用 ./或者../这样的相对路径
fs.readFile('./files/3.txt', 'utf8', function (err, dataStr) {
    if (err) {
        return console.log('读取文件失败！' + err.message);
    }
    console.log(dataStr);
    console.log('--------------------------------------------------------');
})

//__dirname表示当前文件所处的目录
fs.readFile(__dirname + '/files/3.txt', 'utf8', function (err, dataStr) {
    console.log(__dirname);
    if (err) return console.log('读取文件失败！' + err.message);
    console.log(dataStr);
    console.log('--------------------------------------------------------');
})