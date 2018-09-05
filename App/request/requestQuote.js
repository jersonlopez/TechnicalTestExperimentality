'use strict'

let { saveQuote, deleteQuote, getQuotes } = require('../domain/services/serviceGenerateQuote');

let save = async (req, res) => {
    let result = await saveQuote()

    if(result.error !== undefined) res.status(500).send(result.error);

    res.send(result);
}

let remove = async (req, res) => {
    let data = req.params;
    res.send(await deleteQuote(data))
}

let get = async (req, res) => {
    res.send(await getQuotes())
}

module.exports = {
    save,
    remove,
    get
}