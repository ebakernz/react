var Fetch = require('whatwg-fetch'); // window.fetch JavaScript polyfill: https://github.com/github/fetch
var rootUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
var apiUrl = '&appid=f9b6b8d8680e6b24999da6bb88dfa21e';

// Compose the final url by concatinating the variables plus the city's name which recieve as a parameter
// pass into the fetch method
// then we have a 'promise' that will receive the response from the API
// return it in JSON format
module.exports = {
    get: function(place) {
        return fetch(rootUrl + place + apiUrl, {
            headers: {
                // No need for special headers
            }
        })
        .then(function(response) {
            return response.json();
        });
    }
};