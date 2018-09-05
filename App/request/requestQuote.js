'use strict'

let { saveQuote, deleteQuote } = require('../domain/services/serviceGenerateQuote');
let { getImage } = require('../externalServices/getImage');
let { getQuote } = require('../externalServices/getQuote')

let save = async (req, res) => {
    let data = {}
    data.quote = await getQuote();
    data.image = await getImage("hola");
    res.send(await saveQuote(data));
}

let remove = async (req, res) => {
    let data = req.params;
    res.send(deleteQuote(data))
}

module.exports = {
    save,
    remove
}