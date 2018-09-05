'use strict'

let { save, remove, update, find } = require('../repository/crud');
const { quote } = require('../entities/quote');
let { getImage } = require('../../externalServices/getImage');
let { getQuote } = require('../../externalServices/getQuote')


let saveQuote = async () => {
    let quotes = await getQuote();    
    let images = await getImage(quotes);

    if (quotes.error !== undefined || images.error !== undefined) {
        return { error :`An error has occurred generating the quote` };
    }
    
    let newQuote = new quote({
        id : "",
        quote : quotes,
        image : images
    })

    let result = await save(newQuote);

    let filter = { _id: result._id }
    let set = { $set: { id: result._id } }
    update(quote ,filter, set)

    let projection = '-_id -__v'
    let search = await find(quote, filter, projection);

    return { "message": "quote generated successfully", "quote": search }
};

let deleteQuote = async (req) => {
    let filter = { id: req.id }
    await remove(quote, filter)

    return { "message": "quote deleted successfully" }
};

let getQuotes = async () => {
    let projection = '-_id -__v'
    return await find(quote, {}, projection);
}


module.exports = {
    saveQuote,
    deleteQuote,
    getQuotes
}