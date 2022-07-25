//Working on the first image
let randomNum1 = Math.floor(Math.random() * 6) + 1; //number 1-6

let randomDiceImg = "dice" + randomNum1 + ".png"; //dice1-6.png

let randomImgSrc = "images/" + randomDiceImg; //images/dice1-6.png

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImgSrc);


//Working on the second image
let randomNum2 = Math.floor(Math.random() * 6) + 1;

let randomImgSrc2 = "images/dice" + randomNum2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImgSrc2);

if(randomNum1 > randomNum2){
    document.querySelector("h1").innerHTML = "✨Player 1 Wins!"
} else if(randomNum2 > randomNum1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!✨"
} else{
    document.querySelector("h1").innerHTML = "✨Draw!✨"
}