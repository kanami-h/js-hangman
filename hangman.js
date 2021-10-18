class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split("");
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = [];
    this.status = "playing";
  }
  getPuzzle() {
    let puzzle = "";

    this.word.forEach((letter) => {
      if (this.guessedLetters.includes(letter) || letter === " ") {
        puzzle += letter;
      } else {
        puzzle += "*";
      }
    });

    return puzzle;
  }
  makeGuess(guess) {
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
  }
  calucStatus() {
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
  }
  showMessage() {
    if (this.status === "playing") {
      return `Guesses left: <span class="remaining-num">${game.remainingGuesses}</span>`;
    } else if (this.status === "failed") {
      section.classList.add("failed");
      return `Nice guess! The word was "${this.word.join("")}"`;
    } else {
      section.classList.add("correct");
      return `Great work! You guessed the word!`;
    }
  }
}
const section = document.querySelector(".section-center");
