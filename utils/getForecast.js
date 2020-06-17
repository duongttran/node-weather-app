const axios = require('axios');

const getForecast = async ([lon, lat]) => {
    try {
        const token = process.env.OPEN_WEATHER_APP
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={minutely,daily}&appid=${token}`
        console.log(url)
        const res = await axios.get(url)
        return res.data
    } catch (err) {
        throw err
    }
}

module.exports = getForecast