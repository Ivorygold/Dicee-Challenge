var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImages1 = "dice" + randomNumber1 + ".png";
var randomImageSource1 = "images/" + randomDiceImages1;
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImages2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImages2;
var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "player 1 wins";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "player 2 wins";
} else {
  document.querySelector("h1").innerHTML = "Is a Draw Game";
}
