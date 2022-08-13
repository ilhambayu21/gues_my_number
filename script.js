'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!✨🎉';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 10;
console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
//Check Button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  //When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent =
    //   ' ❌Please, insert some number!';
    displayMessage('❌Please, insert some number!');

    //When the player is win
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number!✨🎉';;
    displayMessage('Correct Number!✨🎉');
    document.querySelector('body').style.backgroundColor = '#68b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } //Guess is wrong
  else if (guess !== secretNumber) {
    //Higher
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈Too high!' : '📉Too Low!';
      displayMessage(guess > secretNumber ? '📈Too high!' : '📉Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😥You lose the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});
/*
  else if (guess < secretNumber) {
    //Lower
    if (score > 1) {
      document.querySelector('.message').textContent = '📉Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😥You lose the game';
      document.querySelector('.score').textContent = 0;
    }
  }

*/
//Again Button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').style.width = '15rem';
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});
