function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);

    switch (randomNum) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function getHumanChoice() {
    let choice;
    while (true) {
        choice = prompt("Rock, Paper or Scissors: ");
        if (choice === "Rock" || choice === "Paper" || choice === "Scissors") {
            break;
        } else {
            alert("Invalid choice");
        }
    }
    return;
}