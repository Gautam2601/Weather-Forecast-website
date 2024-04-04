const request = require('request')

const forecast = (lattitude, longitude, callback) =>{
    url =  'http://api.weatherstack.com/current?access_key=dca69b8780c12b644ed8f7d67e283400&query=' + encodeURIComponent(lattitude) + ',' + encodeURIComponent(longitude) + '&units=m'
    request({url: url, json: true}, (error, response)=>{
        if(error){
            callback(error, undefined)
        }else{
            callback(undefined, {
                temp: response.body.current.temperature,
                windSpeed: response.body.current.wind_speed,
                feelLike: response.body.current.feelslike,
                chanceOfRain: response.body.current.precip
            })
        }
    })
}

module.exports = forecast;
