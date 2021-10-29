class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split("");
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = [];
    this.status = "playing";
  }
  calucStatus() {
    const finished = this.word.every(
      (letter) => this.guessedLetters.includes(letter) || letter === " ",
    );

    if (this.remainingGuesses === 0) {
      this.status = "failed";
    } else if (finished) {
      this.status = "finished";
    } else {
      this.status = "playing";
    }
  }
  get statusMessage() {
    if (this.status === "playing") {
      return `Guesses left: <span class="remaining-num">${this.remainingGuesses}</span>`;
    } else if (this.status === "failed") {
      section.classList.add("failed");
      return `Nice guess! The word was "${this.word.join("")}"`;
    } else {
      section.classList.add("correct");
      return `Great work! You guessed the word!`;
    }
  }
  get puzzle() {
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
}
const section = document.querySelector(".section-center");

export { Hangman as default };
