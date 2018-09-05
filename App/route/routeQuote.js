'use strict'

const Router = require('express').Router
let router = new Router()

let { save, remove, get } = require('../request/requestQuote')


router.route('/generate-changing-life-quote')
.get((...args) => {
  save(...args)
})

router.route('/generate-changing-life-quote/:id')
.get((...args) => {
  remove(...args)
})

router.route('/ping')
.get((req, res) => {
  res.send("pong")
})

router.route('/quotes/')
.get((...args) => {
    get(...args)
})

module.exports = router