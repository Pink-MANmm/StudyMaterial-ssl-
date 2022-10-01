## 安装
```
npm install itheima-tools
```

## 导入
```js
const itheima=require('itheima-tools')
```

## 格式化时间
```js
//调用dateFormat对时间进行格式化
const dtStr=itheima.dateFormat(new Date())
//结果 2020-04-03 17:20:58
console.log(dtStr)
```

## 转义HTML中的特殊字符
```js
//待转义的HTML字符串
const htmlStr = `<h1 style="color:red;">你好!&copy;<span>小黄!</span></h1>`
//调用htmlEscape方法进行转换
const str = itheima.htmlEscape(htmlStr)
//转换的结果：&lt;h1 style=&quot;color:red;&quot;&gt;你好!&amp;copy;&lt;span&gt;小黄!&lt;/span&gt;&lt;/h1&gt;
console.log(str);
```

## 还原HTML中的特殊字符
```js
//待还原的HTML字符串
const rawHTML = itheima.htmlUnEscape(str)
//输出的结果<h1 style="color:red;">你好!&copy;<span>小黄!</span></h1>
console.log(rawHTML);
```

## 开源协议
ISC