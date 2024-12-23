function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);

    switch (randomNum) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    let choice;
    while (true) {
        choice = prompt("Rock, Paper or Scissors: ").toLowerCase();
        if (choice === "rock" || choice === "paper" || choice === "scissors") {
            break;
        } else {
            alert("Invalid choice");
        }
    }
    return choice;
}

function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
}



function playGame() {
    function playRound(humanChoice, computerChoice) {
        if (
            humanChoice === "rock" && computerChoice === "scissors" ||
            humanChoice === "scissors" && computerChoice == "paper" ||
            humanChoice === "paper" && computerChoice == "rock"
        ) {
            alert(`You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`);
            humanScore++;
        } else if (
            computerChoice === "rock" && humanChoice === "scissors" ||
            computerChoice === "scissors" && humanChoice == "paper" ||
            computerChoice === "paper" && humanChoice == "rock"
        ) {
            alert(`You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`);
            computerScore++;
        } else {
            alert("It's a tie!");
        }
    }

    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    alert(`You score: ${humanScore}\nComputer score: ${computerScore}`);
}

playGame();