
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

$("h1").click(function(){
          $("h1").css("color","purple");
});

//This will handle all the buttons
$("button").click(function(){
          $("h1").css("color","purple");
});

$("document").keypress(function(event)
{
          $("h1").text(event.key);
});

$("h1").on("mouseover",function(){
          $("h1").css("color","purple");
})


//Add elements while running
$("h1").before("<button>New</button>"); //Adds a button element before h1
$("h1").after("<button>New</button>"); //Adds a button element after h1
$("h1").prepend("<button>New</button>"); //Adds a button element inside h1 before the text
$("h1").append("<button>New</button>"); //Adds a button element inside h1 after the text (or closing tag)

//JQuery animations
$("button").click(function()
{
          //$("h1").toggle();
          //$("h1").fadeToggle(); //fadeIn() fadeOut()
          //$("h1").slideToggle();
          $("h1").animate({
                    opacity: 0.5, //Only numbers 
          });

          //you can chain together slideUp().fadeOut().toggle()
})