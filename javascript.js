console.log("Hello, World!")

let randomNumber;
let computerChoice;
function getComputerChoice() {

        do {
        randomNumber = Math.floor(Math.random() * 10);
        }
        while (randomNumber == 0);

        if (randomNumber >= 1 && randomNumber <= 3) {
            computerChoice = "Rock";
        } else if (randomNumber > 3 && randomNumber <= 6) {
            computerChoice = "Paper";
        } else {
            computerChoice = "Scissors";
        }
    
    
    return computerChoice; 
}

console.log(getComputerChoice());