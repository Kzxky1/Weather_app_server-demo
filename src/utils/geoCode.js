
const request = require('request')

const geoCode = (address, callb) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYW51cmFnYnVydXRlIiwiYSI6ImNqeHluZnZ4bDBjY3IzbW9ldjVoNjBpeWkifQ.0VRJKZlBmndxUDvGDDm1sA&limit=1'
  request({ url, json: true }, (err, { body }) => {
    if (err) {
      callb('Unable to connect ot the Internet')
    } else if (body.features.length === 0) {
      callb('Unable to find location')
    } else {
      callb(undefined, {
        coordinates: body.features[0].center,
        longitude: body.features[0].center[0],
        latitude: body.features[0].center[1],
        location: body.features[0].place_name
      })
    }
  })
}

module.exports = geoCode
