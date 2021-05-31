const express = require("express");
const date = require(__dirname+"/date.js");

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.listen(3000, function (req, res) {
  console.log("Server ready");
});

var items=[];

app.get("/", function (req, res) {
  let day = date.getDate();
  res.render("list", { kindOfDay: day,items: items });
});

app.post("/", function(req, res){
  item = req.body.newItem;
  items.push(item);
  res.redirect("/");
});
