const game = new Hangman("car parts", 5);

const puzzle = document.querySelector(".puzzle");
const message = document.querySelector(".status");
const remainingNumber = document.querySelector(".remaining-num");

// initial settings
window.addEventListener("DOMContentLoaded", () => {
  puzzle.textContent = game.puzzle;
  message.innerHTML = game.statusMessage;
});

window.addEventListener("keypress", (e) => {
  const guess = String.fromCharCode(e.charCode);
  game.makeGuess(guess);
  // display the puzzle
  puzzle.textContent = game.puzzle;
  message.innerHTML = game.statusMessage;
});

getPuzzle((error, puzzle) => {
  if (error) {
    console.log(`Error: ${error}`);
  } else {
    console.log(puzzle);
  }
});

getCountry("US", (error, country) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Country name: ${country.name}`);
  }
});
