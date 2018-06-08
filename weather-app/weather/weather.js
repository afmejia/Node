const request = require('request');

let getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/68b0074d9f79240b71b34fcb9f9475b1/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to Forecast.io.server');
        } else if (response.statusCode === 400) {
            callback('Unable to fetch wather')
        } else if (response.statusCode) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
    });
}

module.exports.getWeather = getWeather;
