document.querySelector("h1").style.color = "red"; //Change the properties, but not ideal
document.getElementsByClassName("btn-click")[0].style.backgroundColor = "blue";
document.querySelector(".btn-click").classList.add("invisible"); //Add classes that represent the style
document.querySelector(".btn-click").classList.remove("invisible");
document.querySelector(".btn-click").classList.toggle("invisible"); //Remove or add
document.querySelector("h1").classList.add("huge");