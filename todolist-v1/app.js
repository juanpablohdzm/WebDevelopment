const express = require("express");

const app = express();

app.listen(3000, function (req, res) {
  console.log("Server ready");
});

app.get("/", function (req, res) {
  let today = new Date();
  if (today.getDay() === 6 || today.getDay() === 0) {
    res.send("Yay it is the weekend!");
  } else {
    res.sendFile(__dirname+"/index.html");
  }
});
