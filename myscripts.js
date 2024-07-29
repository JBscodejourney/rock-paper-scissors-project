const rock = "rock";
const paper = "paper";
const scissors = "scissors";

let humanScore = 0;
let computerScore = 0;

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

function playRound(humanChoice, computerChoice) {
    humanChoice.toLowerCase();
    if (humanChoice === rock && computerChoice === scissors 
    || humanChoice === scissors && computerChoice === paper
    || humanChoice === paper && computerChoice === rock) {
        return console.log("Congrats. You win!")
        ++humanScore
    }
    else if (humanChoice === rock && computerChoice === paper
        ||  humanChoice === scissors && computerChoice === rock
        ||  humanChoice === paper && computerChoice === scissors) {
        return console.log("Oops! Try again.")
        ++computerScore
        }
    else {
        return console.log("Tie!")
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);