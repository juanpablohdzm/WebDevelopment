const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});

app.post("/", function (req, res) {
  let firstName = req.body.fName;
  let lastName = req.body.lName;
  let email = req.body.email;

  console.log(firstName, lastName, email);
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
