'use strict'

const mongoose = require('mongoose')

let url = "mongodb://system:Root123@ds245772.mlab.com:45772/famous-quotes"

mongoose.connection.on('error', (err) => {
  if (err) {
    console.log('ERROR:', err)
  } else {
    console.log('Mongoose default connection open')
  }
})

let moon = mongoose.connect(url, { useNewUrlParser: true })

exports = moon