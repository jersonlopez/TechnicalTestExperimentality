'use strict'

const Router = require('express').Router
let router = new Router()

let { save, remove } = require('../request/requestQuote')
let { getQuote } = require('../externalServices/getQuote')


router.route('/generate-changing-life-quote')
.get((...args) => {
  save(...args)
})

router.route('/generate-changing-life-quote/:id')
.delete((...args) => {
  remove(...args)
})

router.route('/ping')
.get((req, res) => {
  res.send("pong")
})

router.route('/image/:data')
.get(async (req, res) => {
    let result = await getImage(req.params.data)
    res.send(result)

})

router.route('/quote/')
.get(async (req, res) => {
    let result = await getQuote()
    res.send(result)

})

module.exports = router