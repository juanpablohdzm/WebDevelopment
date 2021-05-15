
///$(document).ready(function(){alert("Im ready");});
$("h1").css("color","red");

var color = $("h1").css("color"); //color is red

var bt =$("h1").addClass("big-title new-color");
bt.css("color","blue");
//.removeClass("big-title");
bt.css("color","green"); //You are just adding an inline style to the tag. 

$("h1").hasClass("big-title");
