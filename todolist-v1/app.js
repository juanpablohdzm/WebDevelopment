const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.listen(3000, function (req, res) {
  console.log("Server ready");
});

app.get("/", function (req, res) {
  let today = new Date();
  let dayIndex = today.getDay();
  let day = "";
  switch (dayIndex) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;

    default:
      break;
  }

  res.render("list", { kindOfDay: day });
});
