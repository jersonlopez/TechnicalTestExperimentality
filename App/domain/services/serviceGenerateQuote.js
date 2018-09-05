'use strict'

let { save, remove, update } = require('../repository/crud');
const { quote } = require('../entities/quote');


let saveQuote = async (req) => {
    let newQuote = new quote({
        id : "",
        quote : req.quote,
        image : req.image
    })

    let result = await save(newQuote);

    let filter = { _id: result._id }
    let set = { $set: { id: result._id } }
    update(quote ,filter, set)

    return { "message": "quote successful" }
};

let deleteQuote = async (req) => {

    let filter = { id: req.id }
    await remove(quote, filter)

    return { "message": "usuario eliminado correctamente" }
};


module.exports = {
    saveQuote,
    deleteQuote
}