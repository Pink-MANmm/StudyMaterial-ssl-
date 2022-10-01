const http = require('http')
const fs = require('fs')
const path = require('path')
const server = http.createServer()
server.on('request', (req, res) => {
    const url = req.url
    let content = '<h1>404 Not found!</h1>'
    let fpath = ''
    //res.setHeader('Content-Type', 'text/html;charset=utf-8')
    if (url === '/') {
        fpath = path.join(__dirname, './clock/index.html')
    } else if (url === '/about.html') {
        content = '<h1>关于页面</h1>'
        res.end(content)
    } else {
        fpath = path.join(__dirname, '/clock', url)
    }
    fs.readFile(fpath, 'utf8', (err, dataStr) => {
        if (err) return res.end('404 Not found')
        res.end(dataStr)
    })
})
server.listen(800, () => {
    console.log('server running at http://127.0.0.1:800');
})