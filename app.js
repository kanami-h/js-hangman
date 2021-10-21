const game = new Hangman("car parts", 5);

const puzzle = document.querySelector(".puzzle");
const message = document.querySelector(".status");
const remainingNumber = document.querySelector(".remaining-num");

// initial settings
window.addEventListener("DOMContentLoaded", () => {
  puzzle.textContent = game.puzzle; // getPuzzle();
  message.innerHTML = game.statusMessage; // showMessage();
});

window.addEventListener("keypress", function (e) {
  const guess = String.fromCharCode(e.charCode);
  game.makeGuess(guess);
  // display the puzzle
  puzzle.textContent = game.puzzle; //getPuzzle();
  message.innerHTML = game.statusMessage; // showMessage();
});
