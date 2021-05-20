const express = require("express");

const app = express();

app.get("/", function (request, response) {
  response.send("www.google.com");
});

app.get("/contact", function (req, res) {
          res.send("Contact me at: angela@gmail.com");
});

app.get("/hobbies",function(req, res)
{
          res.send("No ginger");
})

app.listen(3000, function () {
  console.log("Server started on port 3000");
});

//nodemon is a utility that will monitor for any changes in your source and will restart the server automatically

