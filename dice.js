var randomNumber1 = Math.floor(Math.random()*6 +1);
console.log(randomNumber1);
var randomDiceImg1 = "dice" + randomNumber1 + ".png"; 
console.log(randomDiceImg1);
document.querySelector(".img1").setAttribute("src","images/"+ randomDiceImg1 +"");
var randomNumber2 = Math.floor(Math.random()*6 + 1);
console.log(randomNumber2);
var randomDiceImg2 = "dice" + randomNumber2 + ".png";
console.log(randomDiceImg2);
document.querySelector(".img2").setAttribute("src","images/"+ randomDiceImg2 +"");
// if(randomNumber1===1){
//     document.querySelector(".img1").setAttribute("src","images/dice1.png");
// }
if(randomNumber1 === 6 ){
document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else if(randomNumber2 === 6){
    document.querySelector("h1").innerHTML="Player 2 Wins!";  
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}