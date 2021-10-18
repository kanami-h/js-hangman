const Hangman = function (word, remainingGuesses) {
  this.word = word.toLowerCase().split("");
  this.remainingGuesses = remainingGuesses;
  this.guessedLetters = [];
  this.status = "playing";
};

Hangman.prototype.getPuzzle = function () {
  let puzzle = "";

  this.word.forEach((letter) => {
    if (this.guessedLetters.includes(letter) || letter === " ") {
      puzzle += letter;
    } else {
      puzzle += "*";
    }
  });

  return puzzle;
};

Hangman.prototype.makeGuess = function (guess) {
  guess = guess.toLowerCase();
  const isUnique = !this.guessedLetters.includes(guess);
  const isBadGuess = !this.word.includes(guess);

  if (this.status !== "playing") {
    return;
  }

  if (isUnique) {
    // add to the array;
    this.guessedLetters.push(guess);
  }
  if (isUnique && isBadGuess) {
    this.remainingGuesses--;
  }

  this.calucStatus();
};

const section = document.querySelector(".section-center");

Hangman.prototype.calucStatus = function () {
  // the letters in the word exists in the array --> "finished"
  // remainingGuesses became 0 --> "failed"
  let finished = true;
  this.word.forEach((letter) => {
    if (!this.guessedLetters.includes(letter)) {
      finished = false;
    }
  });

  if (this.remainingGuesses === 0) {
    return (this.status = "failed");
  } else if (finished) {
    this.status = "finished";
  } else {
    this.status = "playing";
  }
};

Hangman.prototype.showMessage = function () {
  if (this.status === "playing") {
    return `Guesses left: <span class="remaining-num">${game.remainingGuesses}</span>`;
  } else if (this.status === "failed") {
    section.classList.add("failed");
    return `Nice guess! The word was "${this.word.join("")}"`;
  } else {
    section.classList.add("correct");
    return `Great work! You guessed the word!`;
  }
};
