const rock = "rock";
const paper = "paper";
const scissors = "scissors";

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber === 0) {
        return rock;
    }
    else if (randomNumber === 1) {
        return paper;
    }
    else (randomNumber === 2); {
        return scissors;
    }
}

function getHumanChoice() {
   let humanChoice = prompt("Choose: rock, paper, or scissors");
}