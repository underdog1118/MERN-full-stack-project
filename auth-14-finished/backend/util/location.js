const axios = require('axios');

const HttpError = require('../models/http-error');

const API_KEY = process.env.GOOGLE_API_KEY;
// const API_KEY = 'AIzaSyDgLmMpKCzveJf1_yuA0fUzzhy0WRChvZA';

async function getCoordsForAddress(address) {
  return {
    lat: 40.7484474,
    lng: -73.9871516
  };
  // const response = await axios.get(
  //   `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
  //     address
  //   )}&key=${API_KEY}`
  // );

  const data = response.data;

  if (!data || data.status === 'ZERO_RESULTS') {
    const error = new HttpError(
      'Could not find location for the specified address.',
      422
    );
    throw error;
  }

  const coordinates = data.results[0].geometry.location;

  return coordinates;
}

module.exports = getCoordsForAddress;




// const axios = require("axios");
// const HttpError = require("../models/http-error");
// const API_KEY = "YOUR_API_KEY_HERE";
 
// async function getCoordsForAddress(address) {
//   const response = await axios.get(
//     `https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${encodeURIComponent(
//       address
//     )}&format=json`
//   );
 
//   const data = response.data[0];
 
//   console.log(data);
 
//   if (!data || data.status === "ZERO_RESULTS") {
//     const error = new HttpError(
//       "Could not find location for the specified address.",
//       422
//     );
//     throw error;
//   }
 
//   const coorLat = data.lat;
//   const coorLon = data.lon;
//   const coordinates = {
//     lat: coorLat,
//     lng: coorLon
//   };
 
//   return coordinates;
// }
 
// module.exports = getCoordsForAddress;