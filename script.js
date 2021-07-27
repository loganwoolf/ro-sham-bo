
const weapons = ['Rock', 'Paper', 'Scissors'];

//randomly return the computer's choice
function computerPlay() {
   const randomNumber = Math.floor(Math.random() * 3);
   return weapons[randomNumber];
}

function promptPlayer() {
   let input = prompt('Rock, Paper or Scissors?');
   let playerChoice = input
      .toUpperCase()
      .slice(0,1)
      .concat(input
         .toLowerCase()
         .slice(1)
      );
   if (!weapons.includes(playerChoice)) {
         promptPlayer();
         return;
      }
   console.log(`Player chooses ${playerChoice}`);
   return playerChoice
}

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
