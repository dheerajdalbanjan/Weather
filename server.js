const exp = require('constants');
const express = require('express');
const https = require('https');

const app = express();
const bodyParser = require('body-parser');
const urlencoded = require('body-parser/lib/types/urlencoded');
const { Socket } = require('dgram');
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('public'));

app.post("/" , function(req , res){
    if (req.body.city != null) {
    var city = req.body.city;
    const url = "https://api.openweathermap.org/data/2.5/weather?lat=15.3647&lon=75.1240&appid=643424dc4cc3ac2a0efd29e8d108c892&units=metric&q=" + city + "#";
    https.get(url , function(response){
        response.on('data' , function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            const pressure = weatherData.main.pressure;
            const windspeed = weatherData.wind.speed;
            const icon = weatherData.weather[0].icon ;
            const url = "https://openweathermap.org/img/wn" + icon + "@2x.png";
            res.send("<h2>The temparature  is " + temp + "</h2>" + "<h2>The Description is " + description + "</h2>"
            + "<h2>The pressure is " + pressure + "</h2>" + "<h2>The windspeed is " + windspeed + "</h2>" +
            "<img src =  " + " + url + " + ">");
    })
    })
}
    else if(req.body.zipcode != null){
        var zipcode = req.body.zipcode;
    const url = "https://api.openweathermap.org/data/2.5/weather?lat=15.3647&lon=75.1240&appid=643424dc4cc3ac2a0efd29e8d108c892&units=metric&zip=" + zipcode + "#";
    https.get(url , function(response){
        response.on('data' , function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            const pressure = weatherData.main.pressure;
            const windspeed = weatherData.wind.speed;
            const icon = weatherData.weather[0].icon ;
            const url = "https://openweathermap.org/img/wn" + icon + "@2x.png";
            res.send("<h2>The temparature  is " + temp + "</h2>" + "<h2>The Description is " + description + "</h2>"
            + "<h2>The pressure is " + pressure + "</h2>" + "<h2>The windspeed is " + windspeed + "</h2>" +
            "<img src = " + url + ">");
        })
    })

    }
    else {
        var lat = req.body.lattitude;
        var lon = req.body.longitude;
        const url = "https://api.openweathermap.org/data/2.5/weather?appid=643424dc4cc3ac2a0efd29e8d108c892&units=metric&lat=" + lat + "&lon=" + lon +  "#";
        https.get(url , function(response){
            response.on('data' , function(data){
                const weatherData = JSON.parse(data);
                const temp = weatherData.main.temp;
                const description = weatherData.weather[0].description;
                const pressure = weatherData.main.pressure;
                const windspeed = weatherData.wind.speed;
                const icon = weatherData.weather[0].icon ;
                const url = "https://openweathermap.org/img/wn" + icon + "@2x.png";
                res.send("<h2>The temparature  is " + temp + "</h2>" + "<h2>The Description is " + description + "</h2>"
                + "<h2>The pressure is " + pressure + "</h2>" + "<h2>The windspeed is " + windspeed + "</h2>" +
                "<img src = " + url + ">");
            })
        })

    }
})

app.listen(process.env.PORT || 3000 , function(){
    console.log("The server is running on the port 3000");
})