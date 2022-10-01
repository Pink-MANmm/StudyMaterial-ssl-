var express = require('express')
var router = express.Router()
router.get('/user/list', (req, res) => { res.send(req.query) })
router.post('/user/add', (req, res) => { res.send(req.body) })
module.exports = router