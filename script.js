"use strict";

const containerEl =document.querySelector(".container");
const btnPlayEl =document.querySelector(".btn_again");
const btnChckEl =document.querySelector(".btn_chck");
const hideNumEl =document.querySelector(".hide_num");
const msgEl =document.querySelector(".message");
const inputNumEl =document.querySelector(".input_number");
const highScoreEl =document.querySelector(".high_score");
const scoreEl = document.querySelector(".score");


let secretNum = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

console.log(secretNum);

btnChckEl.addEventListener('click', () => {
    const guess = Number(inputNumEl.value);
    
    if (guess) {


   if(guess != secretNum){

   if (score >1){
   score--;
   scoreEl.textContent = score;

   msgEl.textContent = guess > secretNum ? "Too High" : "Too Low";
   scoreEl.textContent = score;

   }else{
    displayMessage( "You've Lost the Game");
    containerEl.style.backgroundColor = "#fff";
    scoreEl.textContent = 0;
   }

}else{
   hideNumEl.textContent = secretNum; 
   hideNumEl.stylewidth = "50%";
   hideNumEl.style.transition = "all 0.5s ease-in";
   containerEl.style.backgroundColor = "#e0d8d3";
   displayMessage( "Congratulations You've Won the Game :)")


   }


}else {
    displayMessage( "Please Enter the Number :(")
}
});


const displayMessage =function (message) {
    msgEl.textContent = message;
}; 

btnPlayEl.addEventListener('click',()=>{
  score = 20;
  secretNum =Math.floor(Math.random()*20)+1;
  scoreEl.textContent =score;
  hideNumEl.style.textContent = "?";
  hideNumEl.style.width = "25%";
  hideNumEl.style.transition = "all 0.5s ease-in";
  inputNumEl.value = ""
  containerEl.style.backgroundColor = "#ddd";
  displayMessage("Start Guessong..........")



})