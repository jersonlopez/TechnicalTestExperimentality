'use strict'

const Router = require('express').Router
let router = new Router()

let routerQuote = require('./route/routeQuote')

router.use('/api/v1', routerQuote )

module.exports = router