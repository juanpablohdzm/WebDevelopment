
///$(document).ready(function(){alert("Im ready");});
$("h1").css("color","red");

var color = $("h1").css("color"); //color is red

var bt =$("h1").addClass("big-title new-color");
bt.css("color","blue");
//.removeClass("big-title");
bt.css("color","green"); //You are just adding an inline style to the tag. 

$("h1").hasClass("big-title");


///Change text
$("h1").text("bye");

$("button").text("don't click me"); //Will change the text of all buttons

$("button").html("<em>Hey</em>"); //this would be similar to innerHtml

var image_src = $("img").attr("src");

$("a").attr("href","https://www.yahoo.com"); //sets the value of href