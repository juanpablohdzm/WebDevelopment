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
          console.log(temp);

        });
      }
    )
    .on("error", function (e) {

      console.error(e);

    });
  res.send("Server is up and running");
});
