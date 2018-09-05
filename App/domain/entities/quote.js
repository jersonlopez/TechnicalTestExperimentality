'use strict'

let mongoose = require('mongoose')  
let schema = mongoose.Schema   

let quoteSchema = {
    id: {
        type: String,
        required: false
      },
    quote : {
        type: String,
        required: true
      },
    image: {
        type: String,
        required: true
      }
  }
  
  let schemaJson = new schema(quoteSchema)
  let quote = mongoose.model('Quote', schemaJson) 
      
  module.exports = {
      quote
  }