"use strict";

let Score = 20,
  highScore = 0,
  isFin = false,
  randomNumber = Math.trunc(Math.random() * 20) + 1;

const decreaseScore = function () {
  if (Score > 0) {
    Score--;
    document.querySelector(".score").textContent = Score;
    if (Score === 0)
      document.querySelector(".message").textContent =
        "Game Over 🤣🤣👀👀🤣🤣...";
  }
};
const changes = function (opt) {
  document.querySelector("body").style.backgroundColor = opt
    ? "#a72727"
    : "#222";
  document.querySelector(".number").style.width = opt ? "30rem" : "15rem";
  showMessage(
    opt ? "Congratulation ! it is correct ✔️✔️" : " Start guessing..."
  );
  document.querySelector(".number").textContent = opt ? randomNumber : "?";
  if (!opt) {
    document.querySelector(".guess").value = "";
    Score = 20;
    document.querySelector(".score").textContent = Score;
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    isFin = false;
  }
};
const showMessage = function (text) {
  document.querySelector(".message").textContent = text;
};
document.querySelector(".check").addEventListener("click", function () {
  if (!isFin) {
    const guessedNum = Number(document.querySelector(".guess").value);
    if (!guessedNum) {
      showMessage("❌ NO NUMBER !! ");
    } else {
      showMessage("Start guessing...");
      if (!(guessedNum >= 1 && guessedNum <= 20)) {
        showMessage("Sorry the number should be between 1 to 20 ...");
      } else {
        if (randomNumber === guessedNum) {
          changes(true);
          if (Score > highScore) {
            highScore = Score;
            document.querySelector(".highscore").textContent = highScore;
            isFin = true;
          }
        } else {
          showMessage(
            guessedNum > randomNumber
              ? "This number is higher ! ..."
              : "This number is Lower ! ..."
          );
          decreaseScore();
        }
      }
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  changes(false);
});
