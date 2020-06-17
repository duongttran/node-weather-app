var express = require('express');
var router = express.Router();
const getGeocode = require("../utils/getGeocode");
const getForecast = require("../utils/getForecast")

/* GET home page. */
router.get('/', async function (req, res, next) {

  try {
    //console.log("hello World")
    //console.log(process.env.MAPBOX_KEY)
    console.log(req.query)
    const { city } = req.query
    console.log(city)

    if (!city) {
      res.render('index', { title: 'Grrrreat Weather App' })
    }


    const location = await getGeocode(city)
    const forecast = await getForecast(location.geometry.coordinates)
    console.log(forecast)
    console.log(forecast)

    return res.render('index', { 
      title: 'Grrrreat Weather App',
      forecast: forecast.current, city: city
    })
  } catch (err) {
    throw err
  }


});

module.exports = router;
