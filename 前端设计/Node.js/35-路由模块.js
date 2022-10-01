const express = require('express')
const router = express.Router()
router.get('/get', (req, res) => {
    const query = req.query
    res.send({
        status: 0,//0未成功，1为失败
        msg: 'GET',
        data: query
    })
})
router.post('/post', (req, res) => {
    const body = req.body
    res.send({
        status: 0,//0未成功，1为失败
        msg: 'GET',
        data: body
    })
})
router.delete('/delete', (req, res) => {
    res.send({
        status: 0,//0未成功，1为失败
        msg: 'DELETE请求成功',
    })
})

module.exports = router