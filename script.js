
const weapons = ['Rock', 'Paper', 'Scissors'];

//randomly return the computer's choice
function computerPlay() {
   const randomNumber = Math.floor(Math.random() * 3);
   return weapons[randomNumber];
}

