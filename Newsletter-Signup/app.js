const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

//Heroku port or local port
app.listen(process.env.PORT || 3000, function () {
  console.log("Server is running on port 3000");
});

app.post("/", function (req, res) {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };

  var jsonData = JSON.stringify(data);

  const apiKey = "";
  const url = `https://us4.api.mailchimp.com/3.0/lists/${apiKey}`;
  const options = {
    method: "POST",
    auth: `juanp:${apiKey}`,
  };

  const request = https.request(url, options, function (response) {

    if(response.statusCode === 200)
    {
      res.sendFile(__dirname+"/success.html");
    }
    response.on("data", function (data) {
      console.log(JSON.parse(data));
    });
  });

  request.on("error",function(error){
    res.sendFile(__dirname+"/failure.html");
  });

  request.write(jsonData);
  request.end();
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
