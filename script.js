// define instruments of the game
// safe to rename, must capitalize first letter
const weapons = ['Rock', 'Paper', 'Scissors'];

const ROCK = weapons[0];
const PAPER = weapons[1];
const SCISSORS = weapons[2];

let wins = {"player": 0, "computer": 0};

const playButtons = document.querySelectorAll('.play');
const resetButton = document.querySelector('.reset')
const announcement = document.querySelector('.announcement');
const outcome = document.querySelector('.outcome');
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');

//randomly return the computer's choice
function computerPlay() {
   const randomNumber = Math.floor(Math.random() * 3);
   //console.log(`Computer chooses ${weapons[randomNumber]}`);
   return weapons[randomNumber];
}

//run one round of the game
function playRound(e) {
   const playerSelection = e.target.textContent;
   const computerSelection = computerPlay();
   //handle matched outcomes
   if (playerSelection === computerSelection) {
      console.log(`Tie, both players chose ${playerSelection}.`);
      return {outcome: 0, status: `Tie, both players chose ${playerSelection}.`}
   } 
   //handle mismatched outcomes
   else if (computerSelection === ROCK) {
      if (playerSelection === PAPER) {
         console.log(`You Win, ${PAPER} beats ${ROCK}.`);
         return {outcome: 1, status: `You Win, ${PAPER} beats ${ROCK}.`};
      } else {
         console.log(`You Lose, ${ROCK} beats ${SCISSORS}.`);
         return {outcome: -1, status: `You Lose, ${ROCK} beats ${SCISSORS}.`};
      }
   } 
   else if (computerSelection === PAPER) {
      if (playerSelection === SCISSORS) {
         console.log(`You Win, ${SCISSORS} beats ${PAPER}.`);
         return {outcome: 1, status: `You Win, ${SCISSORS} beats ${PAPER}.`};
      } else {
         console.log(`You Lose, ${PAPER} beats ${ROCK}.`);
         return {outcome: -1, status: `You Lose, ${PAPER} beats ${ROCK}.`};
      }
   } 
   else if (computerSelection === SCISSORS) {
      if (playerSelection === ROCK) {
         console.log(`You Win, ${ROCK} beats ${SCISSORS}.`);
         return {outcome: 1, status: `You Win, ${ROCK} beats ${SCISSORS}.`};
      } else {
         console.log(`You Lose, ${SCISSORS} beats ${PAPER}.`);
         return {outcome: -1, status: `You Lose, ${SCISSORS} beats ${PAPER}.`};
      }
   }
}

//update the scorecards from wins object
function updateScore() {
   playerScore.textContent = wins.player;
   computerScore.textContent = wins.computer;
   if (wins.player === 5) {
      outcome.textContent = `Player wins the game!`;
      playButtons.forEach(btn => btn.classList.toggle('hidden'));
      resetButton.classList.toggle('hidden');
   } else if (wins.computer === 5) {
      outcome.textContent = `Computer wins the game!`;
      playButtons.forEach(btn => btn.classList.toggle('hidden'));
      resetButton.classList.toggle('hidden');
   } 
}

function reset() {
   wins = {"player": 0, "computer": 0};
   playerScore.textContent = wins.player;
   computerScore.textContent = wins.computer;
   announcement.textContent = `Choose your weapon...`;
   outcome.textContent = `First to 5 wins`;
   playButtons.forEach(btn => btn.classList.toggle('hidden'));
   resetButton.classList.toggle('hidden');
}


//call the round to run and display, log the returns
function handleRoundOutput(e) {
   let roundResult = playRound(e);
   switch (roundResult.outcome) {
      case 0:
         announcement.textContent = `Tie`;
         break;
      case -1:
         wins.computer++;
         updateScore();
         announcement.textContent = `You Lose`;
         break;
      case 1:
         wins.player++;
         updateScore();
         announcement.textContent = `You Win`;
         break;
   }
}

playButtons.forEach((button, i) => {button.textContent = weapons[i];});
playButtons.forEach(button => button.addEventListener('click', handleRoundOutput));
resetButton.addEventListener('click', reset);


/* OLD FUNCTIONS NOT NEEDED ANYMORE

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
   //console.log(`Player chooses ${playerChoice}`);
   return playerChoice
}

//run n rounds of the game and summarize results
function game(gameLength) {
   let wins = 0;
   for (let i = 0; i < gameLength; i++) {
      wins += playRound().outcome;
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
OLD FUNCTIONS NOT NEEDED ANYMORE */