const randomNumber = Math.random();
let computerMove;


function getComputerChoice() {
  if (randomNumber <= 1/3) {
    computerMove = 'rock';
  } else if (randomNumber <= 2/3) {
    computerMove = 'paper';
  } else {
    computerMove = 'scissors';
  }

  return computerMove;
}

// console.log(getComputerChoice());

// playGame('scissors');

function playGame(playerMove) {
  getComputerChoice();

  if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      console.log('Tie');
    } else if (computerMove === 'paper') {
      console.log('You Lose');
    } else if (computerMove === 'scissors') {
      console.log('You Win');
    }
  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      console.log('You Win');
    } else if (computerMove === 'paper') {
      console.log('Tie');
    } else if (computerMove === 'scissors') {
      console.log('You Lose');
    }
  } else if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      console.log('You Lose');
    } else if (computerMove === 'paper') {
      console.log('You Win');
    } else if (computerMove === 'scissors') {
      console.log('Tie');
    }
  }
  console.log(computerMove, playerMove);
}
