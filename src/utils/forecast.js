const request = require('request')

const foreCast = (latitude, longitude, callb) => {
  const url = 'https://api.darksky.net/forecast/9e4eba33afd74b7a1a1fca89efcaf1b9/' + latitude + ',' + longitude + '?units=auto'
  request({ url, json: true }, (err, { body }) => {
    if (err) {
      callb('Unable to connect to Internet')
    } else if (body.error) {
      callb('Unable to find the location. Try another search.')
    } else {
      callb(undefined, 'Currently outside it is ' + body.currently.temperature + ' degrees & ' + body.hourly.summary + ' With high of ' + body.daily.data[0].temperatureHigh + ' degrees & low of ' + body.daily.data[0].temperatureLow + ' degrees')
    }
  }
  )
}

module.exports = foreCast
