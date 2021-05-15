//Variables
var tom1 = new Audio("sounds/tom-1.mp3");
var tom2 = new Audio("sounds/tom-2.mp3");
var tom3 = new Audio("sounds/tom-3.mp3");
var tom4 = new Audio("sounds/tom-4.mp3");
var kickBass = new Audio("sounds/kick-bass.mp3");
var crash = new Audio("sounds/crash.mp3");
var snare = new Audio("sounds/snare.mp3");
//</Variables>

var buttons = document.getElementsByTagName("button");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var buttonInnerHtml = this.innerHTML;
    playSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}

document.addEventListener("keydown", function (event) {
  var key = event.key;
  playSound(key);
  buttonAnimation(key);
});

function playSound(key) {
  switch (key) {
    case "w":
      tom1.play();
      break;
    case "a":
      tom2.play();
      break;
    case "s":
      tom3.play();
      break;
    case "d":
      tom4.play();
      break;
    case "j":
      kickBass.play();
      break;
    case "k":
      crash.play();
      break;
    case "l":
      snare.play();
      break;
    default:
      break;
  }
}

function buttonAnimation(key)
{
  var currentButton = document.querySelector("."+key);
  currentButton.classList.add("pressed");

  setTimeout(function(){currentButton.classList.remove("pressed")},100);
}
