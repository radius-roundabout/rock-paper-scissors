console.log("Hello, World!")

let randomNumber;
let computerScore = 0;
let humanScore = 0;
let humanInput;
let computerInput;

// function getComputerChoice() {
//         //This loop removed 0 from the range 0-9 (if the calculation produces a 0), 
//         // since that range has 10 values and is not evenly divisible by 3. 
//         do {
//         randomNumber = Math.floor(Math.random() * 10);
//         }
//         while (randomNumber == 0);

//         if (randomNumber >= 1 && randomNumber <= 3) {
//             computerChoice = "Rock";
//         } else if (randomNumber > 3 && randomNumber <= 6) {
//             computerChoice = "Paper";
//         } else if (randomNumber > 6 && randomNumber <= 9) {
//             computerChoice = "Scissors";
//         }
    
    
//     return computerChoice; 
// }

function getComputerChoice() {
    //This loop removed 0 from the range 0-9 (if the calculation produces a 0), 
    // since that range has 10 values and is not evenly divisible by 3. 
    do {
    randomNumber = Math.floor(Math.random() * 10);
    }
    while (randomNumber == 0);

    if (randomNumber >= 1 && randomNumber <= 3) {
        return "Rock";
    } else if (randomNumber > 3 && randomNumber <= 6) {
        return "Paper";
    } else if (randomNumber > 6 && randomNumber <= 9) {
        return "Scissors";
    }

}

computerInput = getComputerChoice().toLowerCase();

console.log(computerInput);

humanInput = prompt("Choose \"rock\", \"paper\", or \"scissors.\"").toLowerCase();

console.log(humanInput);

function playRound(humanChoice, computerChoice) {

        if (humanChoice == "rock" && computerChoice == "paper") {
            computerScore++;
            return "You lose! Paper beats rock.";
        }

        else if (humanChoice == "rock" && computerChoice == "scissors") {
            humanScore++;
            return "You win! Rock beats scissors.";
        }

        else if (humanChoice == "paper" && computerChoice == "rock") {
            humanScore++;
            return "You win! Paper beats rock."; 
        }

        else if (humanChoice == "paper" && computerChoice == "scissors") {
            computerScore++;
            return "You lose! Scissors beat paper.";
        }

        else if (humanChoice == "scissors" && computerChoice == "rock") {
            computerScore++;
            return "You lose! Rock beats scissors.";
        }

        else if (humanChoice == "scissors" && computerChoice == "paper") {
            humanScore++;
            return "You win! Scissors beats paper."; 
        }

        else {
            return "It's a draw. Try again."
        }
}

console.log(playRound(humanInput, computerInput))
console.log("Human score is " + humanScore +".");
console.log("Computer score is " + computerScore + ".");


// let humanTest = "rock";
// let computerTest = "paper";

// function test () {
//     if (humanTest == "rock" && computerTest == "paper") {
//     computerScore++;
//     return "You lose! Paper beats rock.";
// }
// }

// console.log(test())