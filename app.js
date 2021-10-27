const puzzleEl = document.querySelector(".puzzle");
const message = document.querySelector(".status");
const remainingNumber = document.querySelector(".remaining-num");
const resetBtn = document.getElementById("reset");
let game;

window.addEventListener("keypress", (e) => {
  const guess = String.fromCharCode(e.charCode);
  game.makeGuess(guess);
  render();
});

const render = () => {
  puzzleEl.textContent = game.puzzle;
  message.innerHTML = game.statusMessage;
};

const startGame = async () => {
  const puzzle = await getPuzzle("2");
  game = new Hangman(puzzle, 9);
  render();
};

resetBtn.addEventListener("click", () => {
  startGame();
});

startGame();
