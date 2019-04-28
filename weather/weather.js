const request = require('request');

var currentWeather = (address, callback) => {
    request({
        url: `https://api.darksky.net/forecast/ef4f010e9fe2c4301bb870da418d9733/${address}`,
        json: true
    },(error, response, body) => {
        if(!error && response.statusCode === 200){
            callback(undefined, body.currently);
        }
        else {
            callback('Unable to fetch the weather request.');
        }
    });
};

module.exports.currentWeather = currentWeather;