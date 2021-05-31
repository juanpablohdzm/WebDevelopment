const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.listen(3000, function (req, res) {
  console.log("Server ready");
});

var items=[];

app.get("/", function (req, res) {

  let today = new Date();

  let options = {
    weekday : 'long',
    day : "numeric",
    month : "long"
  };

  let day  = today.toLocaleDateString("en-US",options);

  res.render("list", { kindOfDay: day,items: items });
});

app.post("/", function(req, res){
  item = req.body.newItem;
  items.push(item);
  res.redirect("/");
});
