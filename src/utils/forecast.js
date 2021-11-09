const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=7dee4bb5e05db6ff5fc455565659a02c&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions + 
                    ' It is currently ' + body.current.temperature +
                    ' degress out & humidity is ' + body.current.humidity
                    + '. There is a ' + body.current.feelslike + '% chance of rain.')
        }
    })
}

module.exports = forecast