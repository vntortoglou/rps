// Variables from HTML

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const display = document.querySelector(`h2`);
const pscore = document.getElementById(`pscore`);
const cscore = document.getElementById(`cscore`);

// Global Variables

let playerWins = 0;
let computerWins = 0;

// Round rules
function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "rock") {
    display.textContent = `It's a draw! Both picked ✊ Rock.`;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    display.textContent = `You lose! ✊ Rock is covered by ✋ Paper.`;
    computerWins++;
    cscore.textContent = computerWins;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    display.textContent = `You win! ✊ Rock crushes ✌️ Scissors.`;
    playerWins++;
    pscore.textContent = playerWins;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    display.textContent = `You win! ✋ Paper covers ✊ Rock.`;
    playerWins++;
    pscore.textContent = playerWins;
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    display.textContent = `It's a draw! Both picked ✋ Paper.`;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    display.textContent = `You lose! ✋ Paper is cut by ✌️ Scissors.`;
    computerWins++;
    cscore.textContent = computerWins;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    display.textContent = `You lose! ✌️ Scissors are crushed by ✊ Rock.`;
    computerWins++;
    cscore.textContent = computerWins;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    display.textContent = `You win! ✌️ Scissors cut ✋ Paper.`;
    playerWins++;
    pscore.textContent = playerWins;
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    display.textContent = `It's a draw! Both picked ✌️ Scissors.`;
  }

  // Check if someone has won
  if (playerWins === 5) {
    display.textContent = "🎉 You win the game! 🎉";
  } else if (computerWins === 5) {
    display.textContent = "😭 You Lose! 😭";
  }

  updateScores();
}

function updateScores() {
  pscore.textContent = playerWins;
  cscore.textContent = computerWins;
}

// Computer's Choice

let getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

rock.addEventListener("click", function () {
  playerSelection = "rock";
  return playRound(playerSelection, getComputerChoice());
});

paper.addEventListener("click", function () {
  playerSelection = "paper";
  return playRound(playerSelection, getComputerChoice());
});

scissors.addEventListener("click", function () {
  playerSelection = "scissors";
  return playRound(playerSelection, getComputerChoice());
});

function updateScores() {
  pscore.textContent = playerWins;
  cscore.textContent = computerWins;

  if (playerWins === 5 || computerWins === 5) {
    playerWins = 0;
    computerWins = 0;
    pscore.textContent = playerWins;
    cscore.textContent = computerWins;

    if (playerWins === 5) {
      display.textContent = "You win!";
    } else if (computerWins === 5) {
      display.textContent = "You lose!";
    }
  }
}
