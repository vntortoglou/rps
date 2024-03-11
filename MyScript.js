function playRound(playerSelection, computerSelection) {

if (playerSelection === "rock" && computerSelection === "rock"){
    return `It's DRAW!!! Both picked ROCK`
  }
else if (playerSelection ==="rock" && computerSelection ==="paper"){
    return `You LOSE!!! PAPER beats ROCK`
}
else if (playerSelection ==="rock" && computerSelection ==="scissors"){
        return `YOU WIN!!! ROCK beats SCISSORS`
    }
else if (playerSelection ==="paper" && computerSelection ==="rock"){
        return `You WIN!!! PAPER beats ROCK`
    }
else if (playerSelection ==="paper" && computerSelection ==="paper"){
        return `It's DRAW!!! Both picked PAPER`
    }
else if (playerSelection ==="paper" && computerSelection ==="scissors"){
        return `You LOSE!!! SCISSORS beats PAPER`
    }

else if (playerSelection ==="scissors" && computerSelection ==="rock"){
        return `You LOSE!!! ROCK beats PAPER`
    }

else if (playerSelection ==="scissors" && computerSelection ==="paper"){
        return `You WIN!!! SCISSORS beats PAPER`
    }

else if (playerSelection ==="scissors" && computerSelection ==="scissors"){
        return `It's DRAW!!! You both picked SCISSORS`
    }
}

let getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() *3);
    switch(randomNumber){
        case 0:
          return'rock';
        case 1:
          return'paper';
        case 2:
          return'scissors';
}
}
    

const playerSelection = prompt(`Choose Rock, Paper or Scissors`).toLowerCase();
if(playerSelection !==`rock` && playerSelection !==`paper` && playerSelection !==`scissors`) {console.log(`Please try again`)}



  const computerSelection = getComputerChoice();


  console.log(playRound(playerSelection, computerSelection))