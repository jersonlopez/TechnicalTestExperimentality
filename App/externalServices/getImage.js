'use strict';

const axios = require('axios');


// **********************************************
// ***         constant variables             ***
// **********************************************

const subscriptionKey = '4b713762f9684f468e60a8a75a103e39';

const host = 'api.cognitive.microsoft.com';
const path = '/bing/v7.0/images/search/';
const url = `https://${host}${path}`;

const headers = {
    'Ocp-Apim-Subscription-Key': subscriptionKey
}

module.exports.getImage = async (search) => {
    try {
        let result = await axios.get(`${url}?q=${encodeURIComponent(search)}`, {
            headers: headers
        });
        return result.data.value[0].contentUrl;
    } catch (error) {
        console.log('An error has occurred obtaining the image:\n' + error);
        return { error :`An error has occurred obtaining the the image:\n ${error}` };
    }
}