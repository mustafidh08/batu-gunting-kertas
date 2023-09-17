const game = () => {
  let pScore = 0;
  let cScore = 0;

  //Start the Game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
  //Play Match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });
    //Computer Options
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        //Computer Choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
          if (pScore < 3) {
            {
              // Here is where we call compare hands
              compareHands(this.textContent, computerChoice);
              // Update Images
              playerHand.src = `img/${this.textContent}.png`;
              computerHand.src = `img/${computerChoice}.png`;
            }
          } else if (pScore > 2) {
            switch (this.textContent) {
              case "rock":
                compareHands(this.textContent, "paper");
                playerHand.src = `img/${this.textContent}.png`;
                computerHand.src = "img/paper.png";
                break;

              case "paper":
                compareHands(this.textContent, "scissors");
                playerHand.src = `img/${this.textContent}.png`;
                computerHand.src = "img/scissors.png";
                break;

              case "scissors":
                compareHands(this.textContent, "rock");
                playerHand.src = `img/${this.textContent}.png`;
                computerHand.src = "img/rock.png";
                break;
            }
          }
        }, 2000);
        // Animation
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  // Score
  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    const winner = document.querySelector(".winner");
    const gone = document.querySelector(".options");
    const restart = document.querySelector(".restart");

    playerScore.textContent = pScore;
    computerScore.textContent = cScore;

    if (cScore > 4) {
      winner.textContent = "KAMU KALAH!";
      gone.style.display = "none";
      restart.classList.add("fadeIn");
    }

    if (pScore > 4) {
      winner.textContent = "KAMU MENANG!";
      gone.style.display = "none";
      restart.classList.add("fadeIn");
    }
  };

  const compareHands = (playerChoice, computerChoice) => {
    //Update Text
    const winner = document.querySelector(".winner");
    //Checking for a tie
    if (playerChoice === computerChoice) {
      winner.textContent = "Draw";
      return;
    }
    //Check for Rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player Wins!";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins!";
        cScore++;
        updateScore();
        return;
      }
    }
    //Check for Paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Computer Wins!";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins!";
        pScore++;
        updateScore();
        return;
      }
    }
    //Check for Scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Computer Wins!";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins!";
        pScore++;
        updateScore();
        return;
      }
    }
  };

  //Is call all the inner function
  startGame();
  playMatch();
};

//start the game function
game();

var myVar;

function loader() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.querySelector(".spinner").style.display = "none";
  document.querySelector(".game").style.display = "block";
}
