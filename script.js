'use strict';

// Selecting Element 
const btnCheck = document.querySelector('.check');
const guessInput = document.querySelector('.guess');
const message = document.querySelector('.message');
const randNum = document.querySelector('.number');
const btnRefresh = document.querySelector('.again');
const body = document.querySelector('body');

// Selectin dynamic element
let score = document.querySelector('.score');
let highScore = document.querySelector('.highscore');

let firstTime = false;

// Deactive check button
btnCheck.disabled = false;

// Generate Random Number between 1 and 20
let genRandNum = Math.floor(Math.random() * 20) + 1;

// Generate message game
const displayGameMsg = (msg) => {
  message.textContent = msg
}

// Change body background color
const changeBgColor = () => {
  body.style.backgroundColor = Number(guessInput.value) === genRandNum ? '#60b347' : '#222';
}

// Creating functions
const checkGuessInput = (guess) => {
  // Turn string into Integer
  guess = Number(guess.value);
  // When guess is not a number
  if (!guess) {
    displayGameMsg("⛔️ this is not a valid number");
    // When guess is wrong
  } else if (guess !== genRandNum) {
    if (guess >= 1) {
      displayGameMsg(guess > genRandNum ? "📈 number too high" : "📉 number too low");
      score.innerText -= 1;
    } else {
      displayGameMsg("💥 Sorry you lost the game");
      score.innerText = 0;
      btnCheck.disabled = true;
    }
    // When guess is correct  
  } else if (guess === genRandNum) {
    displayGameMsg("🎉 Congratulations, you guessed the secret number");
    highScore.innerText = score.innerText;
    changeBgColor();
    randNum.textContent = genRandNum;
    randNum.style.width = "30rem";
  }
}

// Reacting to Event Listener
btnCheck.addEventListener('click', () => {
  checkGuessInput(guessInput);
})

btnRefresh.addEventListener('click', () => {
  genRandNum;
  highScore.textContent = score.innerText;
  randNum.style.width = "15rem";
  randNum.textContent = '?';
  guessInput.value = '';
  score.innerText = '20';
  checkGuessInput(guessInput);
  changeBgColor();
  displayGameMsg("Start guessing...");
})
