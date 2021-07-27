
const weapons = ['Rock', 'Paper', 'Scissors'];

//randomly return the computer's choice
function computerPlay() {
   const randomNumber = Math.floor(Math.random() * 3);
   console.log(`Computer chooses ${weapons[randomNumber]}`);
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

function playRound() {
   const playerSelection = promptPlayer();
   const computerSelection = computerPlay();
   
   //handle matched outcomes
   if (playerSelection === computerSelection) {
      console.log(`Tie, both players chose ${playerSelection}.`);
      return 0
   } 
   //handle mismatched outcomes
   else if (computerSelection === 'Rock') {
      if (playerSelection === 'Paper') {
         console.log('You Win, Paper beats Rock.');
         return 1;
      } else {
         console.log('You Lose, Rock beats Scissors.');
         return -1;
      }
   } 
   else if (computerSelection === 'Paper') {
      if (playerSelection === 'Scissors') {
         console.log('You Win, Scissors beats Paper.');
         return 1;
      } else {
         console.log('You Lose, Paper beats Rock.');
         return -1;
      }
   } 
   else if (computerSelection === 'Scissors') {
      if (playerSelection === 'Rock') {
         console.log('You Win, Rock beats Scissors.');
         return 1;
      } else {
         console.log('You Lose, Scissors beats Paper.');
         return -1;
      }
   }
}

   }
}
