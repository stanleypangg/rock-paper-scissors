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

function playRound(humanChoice, computerChoice) {
    if (
        humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice == "paper" ||
        humanChoice === "paper" && computerChoice == "rock"
    ) {
        result.textContent = `You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`;
        humanScore++;
    } else if (
        computerChoice === "rock" && humanChoice === "scissors" ||
        computerChoice === "scissors" && humanChoice == "paper" ||
        computerChoice === "paper" && humanChoice == "rock"
    ) {
        result.textContent = `You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`;
        computerScore++;
    } else {
        result.textContent = "It's a tie!";
    }

    score.textContent = `Your Score: ${humanScore} Computer Score: ${computerScore}`;

    if (humanScore === 5) {
        winner.textContent = "You win!";
    } else if (computerScore === 5) {
        winner.textContent = "Computer wins!";
    }

    // playRound(getHumanChoice(), getComputerChoice());

    // alert(`You score: ${humanScore}\nComputer score: ${computerScore}`);
}

let humanScore = 0;
let computerScore = 0;

const score = document.querySelector(".score");
score.textContent = `Your Score: ${humanScore} Computer Score: ${computerScore}`;

const result = document.querySelector(".result");

const winner = document.querySelector(".winner");

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());

});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});