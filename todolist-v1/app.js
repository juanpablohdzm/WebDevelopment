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
var workItems = [];

app.get("/", function (req, res) {
  let day = date.getDate();
  res.render("list", { listTitle: day,items: items });
});

app.post("/", function(req, res){

  let item = req.body.newItem;
  if(req.body.list === "Work")
  {
    workItems.push(item);
    res.redirect("/work");
  }
  else
  {
    items.push(item);
    res.redirect("/");
  }

});


app.get("/work",function(req,res){
    res.render("list",{listTitle:"Work List", workItems});
});

app.post("/work", function(req,res){
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});
