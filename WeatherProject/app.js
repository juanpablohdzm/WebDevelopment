const express = require("express");
const https = require("https");

const app = express();

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});

app.get("/", function (req, res) {
  https
    .get(
      "https://api.openweathermap.org/data/2.5/weather?q=London&appid=e72ca729af228beabd5d20e3b7749713&units=metric",
      function (response) {
        console.log(response.statusCode);
        response.on("data", function (data) {
          let weatherData = JSON.parse(data);
          console.log(weatherData); //Check the path for the information we need.
          let temp = weatherData.main.temp;
          let imageURL = "http://openweathermap.org/img/wn/10d@2x.png";
          res.write("The weather is currently"+ weatherData.main.temp);
          res.write(
            "<h1>The temperature in London is " + temp + "degrees Celcius</h1>"
            ); 
          res.write("<img src="+imageURL+">");
          res.send();//You can only have one send.
        });
      }
    )
    .on("error", function (e) {
      console.error(e);
    });
});
