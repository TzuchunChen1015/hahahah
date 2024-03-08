const guessInput = document.querySelector("#guess-input");
const submitGuess = document.querySelector("#submit-guess");

const maxNumber = 100;
const getNewRandomNumber = () => {
  return Math.floor(Math.random() * maxNumber) + 1;
};

let answer = getNewRandomNumber();

submitGuess.addEventListener("click", () => {
  let guessNumber = guessInput.value.trim();
  if(guessNumber.length > 0) {
    guessInput.value = "";
    guessNumber = parseInt(guessNumber);
    if(guessNumber < 1 || guessNumber > 100) {
      window.alert("It's out of bound!");
    } else if(answer === guessNumber) {
      window.alert("You got the correct answer!\nLet's start a new game.");
      answer = getNewRandomNumber();
    } else if(answer > guessNumber) {
      window.alert("It's too small!");
    } else {
      window.alert("It's too large!");
    }
  }
});
