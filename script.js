// define instruments of the game
// safe to rename, must capitalize first letter
const weapons = ['Rock', 'Paper', 'Scissors'];

const ROCK = weapons[0];
const PAPER = weapons[1];
const SCISSORS = weapons[2];

//randomly return the computer's choice
function computerPlay() {
   const randomNumber = Math.floor(Math.random() * 3);
   console.log(`Computer chooses ${weapons[randomNumber]}`);
   return weapons[randomNumber];
}

//return the player's choice using input prompt
function promptPlayer() {
   let input = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`);
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

//run one round of the game
function playRound() {
   const playerSelection = promptPlayer();
   const computerSelection = computerPlay();
   
   //handle matched outcomes
   if (playerSelection === computerSelection) {
      console.log(`Tie, both players chose ${playerSelection}.`);
      return 0
   } 
   //handle mismatched outcomes
   else if (computerSelection === ROCK) {
      if (playerSelection === PAPER) {
         console.log(`You Win, ${PAPER} beats ${ROCK}.`);
         return 1;
      } else {
         console.log(`You Lose, ${ROCK} beats ${SCISSORS}.`);
         return -1;
      }
   } 
   else if (computerSelection === PAPER) {
      if (playerSelection === SCISSORS) {
         console.log(`You Win, ${SCISSORS} beats ${PAPER}.`);
         return 1;
      } else {
         console.log(`You Lose, ${PAPER} beats ${ROCK}.`);
         return -1;
      }
   } 
   else if (computerSelection === SCISSORS) {
      if (playerSelection === ROCK) {
         console.log(`You Win, ${ROCK} beats ${SCISSORS}.`);
         return 1;
      } else {
         console.log(`You Lose, ${SCISSORS} beats ${PAPER}.`);
         return -1;
      }
   }
}

//run n rounds of the game and summarize results
function game(gameLength) {
   let wins = 0;
   for (let i = 0; i < gameLength; i++) {
      wins += playRound();
   }
   if (wins === 0) {
      console.log(`The ${gameLength} match game ends in a tie.`); 
      return;
   } else if (wins > 0) {
      console.log(`Victory!! You won by ${wins} matches!`);
      return;
   } else {
      console.log(`Defeat! You lost by ${wins * -1} matches.`);
   }
}


const playButtons = document.querySelectorAll('.button__play');
playButtons.forEach((button, i) => {button.textContent = weapons[i];});