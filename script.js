
const weapons = ['Rock', 'Paper', 'Scissors'];

//randomly return the computer's choice
function computerPlay() {
   const randomNumber = Math.floor(Math.random() * 3);
   return weapons[randomNumber];
}

function playRound(playerSelection, computerSelection) {
   //handle tie
   if (playerSelection === computerSelection) {
      return `Tie, both players chose ${playerSelection}.`
   } else if (computerSelection === 'Rock') {
      if (playerSelection === 'Paper') {
         return 'You Win, Paper beats Rock.'
      } else {
         return 'You Lose, Rock beats Scissors.'
      }
   } else if (computerSelection === 'Paper') {
      if (playerSelection === 'Scissors') {
         return 'You Win, Scissors beats Paper.'
      } else {
         return 'You Lose, Paper beats Rock.'
      }
   } else if (computerSelection === 'Scissors') {
      if (playerSelection === 'Rock') {
         return 'You Win, Rock beats Scissors.'
      } else {
         return 'You Lose, Scissors beats Paper.'
      }
   }
}
