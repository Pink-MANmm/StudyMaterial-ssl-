const myBodyParser = require('./34-自定义中间件')
const express = require('express')
const app = express()

app.use(myBodyParser)

app.post('/', (req, res) => {
    res.send(req.body)
})

app.listen(84, () => {
    console.log('Express server running at http://127.0.0.1:84');
})