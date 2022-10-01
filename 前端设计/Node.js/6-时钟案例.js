//实现步骤
//创建两个正则表达式，分别用来匹配<style><scripts>标签
//使用fs模块，读取需要被处理的HTML文件
//自定义resolveCSS方法，来写入index.css样式文件
//自定义resolveJS方法，来写入index.js样式文件
//自定义resolveHTML方法，来写入index.html样式文件
const fs = require('fs')
const { resolve } = require('path')
const path = require('path')
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

function resolveCSS(htmlStr) {
    //使用正则提取页面中的<style></style>标签
    const r1 = regStyle.exec(htmlStr)
    const newCSS = r1[0].replace('<style>', '').replace('</style>', '')
    fs.writeFile(path.join(__dirname, './clock/index.css'), newCSS, err => {
        if (err) return console.log('写入CSS样式失败!' + err.message);
        console.log('写入CSS样式成功');
    })
}

function resolveJS(htmlStr) {
    //使用正则提取页面中的<style></style>标签
    const r1 = regScript.exec(htmlStr)
    const newJS = r1[0].replace('<script>', '').replace('</script>', '')
    fs.writeFile(path.join(__dirname, './clock/index.js'), newJS, err => {
        if (err) return console.log('写入JS脚本!' + err.message);
        console.log('写入JS脚本成功');
    })
}

function resolveHTML(htmlStr) {
    const newHTML = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css" />').replace(regScript, '<script src="./index.js"></script>')
    fs.writeFile(path.join(__dirname, './clock/index.html'), newHTML, err => {
        if (err) return console.log('写入HTML文件失败!' + err.message);
        console.log('写入HTML文件成功!');
    })
}

fs.readFile(path.join(__dirname, './素材/index.html'), 'utf8', (err, dataStr) => {
    if (err) return console.log('读取HTML文件失败!' + err.message);
    resolveCSS(dataStr)
    resolveJS(dataStr)
    resolveHTML(dataStr)
})