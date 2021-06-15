'use strict';

// Selecting Element 
const btnCheck = document.querySelector('.check');
const guessInput = document.querySelector('.guess');
const message = document.querySelector('.message');
const randNum = document.querySelector('.number');
const btnRefresh = document.querySelector('.again');

let score = document.querySelector('.score');
let highScore = document.querySelector('.highscore');

btnCheck.disabled = false;

// Generate Random Number between 1 and 20
let genRandNum = Math.floor(Math.random() * 20) + 1;
randNum.textContent = genRandNum;

// Creating functions
const checkGuessInput = (guess) => {
  guess = Number(guess.value);
  if (!guess) {
    message.textContent = "⛔️ this is not a valid number";
  } else if (guess > genRandNum) {
    message.textContent = "📈 number too high";
    score.innerText -= 1;
    if (score.innerText < 1) {
      message.textContent = "💥 Sorry you lost the game";
      btnCheck.disabled = true;
    }
  } else if (guess < genRandNum) {
    message.textContent = "📉 number too low";
    score.innerText -= 1;
    if (score.innerText < 1) {
      message.textContent = "💥 Sorry you lost the game";
      btnCheck.disabled = true;
    }
  } else if (guess === genRandNum) {
    message.textContent = "🎉 Congratulations, you guessed the secret number";
    // highScore.textContent += 1;
  }
}

// Reacting to Event Listener
btnCheck.addEventListener('click', () => {
  checkGuessInput(guessInput);
})

btnRefresh.addEventListener('click', () => {
  window.location.reload();
})

