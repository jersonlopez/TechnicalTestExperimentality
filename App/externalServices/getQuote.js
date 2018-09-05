'use strict';

const axios = require('axios');


// **********************************************
// ***         constant variables             ***
// **********************************************

const subscriptionKey = '66hzRyvDJrmshw24fQxas9etR2QMp1s2SKnjsnMyY5iHiMVce9';

const host = 'andruxnet-random-famous-quotes.p.mashape.com';
const path = '/?cat=famous&count=1';
const url = `https://${host}${path}`;

const headers = {
    'X-Mashape-Key' : subscriptionKey,
    'Accept' : 'application/json'
}

module.exports.getQuote = async () => {
    try {
        let result = await axios.get(url, {
            headers: headers
        })
        return result.data[0].quote
    } catch (error) {
        console.log('An error has occurred obtaining the quote:\n' + error);
        return { error :`An error has occurred obtaining the quote:\n ${error}` };
    }
}