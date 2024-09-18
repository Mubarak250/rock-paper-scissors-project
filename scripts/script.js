let computerMove;

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNumber = Math.random();
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
  const round = 5;


  if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      document.querySelector('.result').innerHTML = 'It\'s a Tie! ';
    } else if (computerMove === 'paper') {
      document.querySelector('.result').innerHTML = 'You Lost This Round!, Paper Beats Rock';
      computerScore++;
    } else if (computerMove === 'scissors') {
      document.querySelector('.result').innerHTML = 'You Win This Round!, Rock Beats Scissors';
      humanScore++;
    }
  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      document.querySelector('.result').innerHTML = 'You Win This Round!, Paper Beats Rock';
      humanScore++;
    } else if (computerMove === 'paper') {
      document.querySelector('.result').innerHTML = 'It\'s a Tie! ';
    } else if (computerMove === 'scissors') {
      document.querySelector('.result').innerHTML = 'You Lost This Round!, Scissors Beats Paper';
      computerScore++;
    }
  } else if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      document.querySelector('.result').innerHTML = 'You Lost This Round!, Rock Beats Scissors';
      computerScore++;
    } else if (computerMove === 'paper') {
      document.querySelector('.result').innerHTML = 'You Win This Round!, Scissors Beats Paper';
      humanScore++;
    } else if (computerMove === 'scissors') {
      document.querySelector('.result').innerHTML = 'It\'s a Tie!';
    }
  }

  document.querySelector('.scores').innerHTML = `SCORE: You ${humanScore} - ${computerScore} Computer`;


  // console.log(computerMove, playerMove);
  // console.log(humanScore)
  // console.log(computerScore)


  if (humanScore === round && computerScore < round) {
    document.querySelector('.scores').innerHTML = 'You Win';

    document.querySelector('.result').innerHTML = `You ${humanScore} - ${computerScore} Computer`;

    humanScore = 0;
    computerScore = 0;
  } else if (computerScore === round && humanScore < round) {
    document.querySelector('.scores').innerHTML = 'You Lose';

    document.querySelector('.result').innerHTML = `You ${humanScore} - ${computerScore} Computer`;

    humanScore = 0;
    computerScore = 0;
  }


  
}

