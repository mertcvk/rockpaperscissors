// I will be using the project steps as plan/pseudocode 
//Setup the project structure
//Write the logic to get the computer choice
function getComputerChoice () {
    let computerChoice = Math.random() * 100
if (computerChoice <= 33) {
    return ("Rock") ;
} else if (computerChoice <= 66) { 
    return ("Paper") ;
} else {
    return ("Scissors")
}
}

//Write the logic to get the human choice
function getHumanChoice () {
    let humanChoice = prompt("Enter your choice:");
    return (humanChoice);
}

//Declare the players score variables
let humanScore = 0
let computerScore = 0

//Write the logic to play a single round
function playRound(humanChoice, computerChoice) { 
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase() ;
    if (humanChoice === "Rock" && computerChoice === "Rock") {
        return ("Rock against Rock. It is a tie!") ; 
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        humanScore++ ;
        return ("Rock against Scissors. It is a win!") ;
    } else if (humanChoice === "Paper" && computerChoice === "Paper") {
        return ("Paper against Paper. It is a tie!") ; 
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        humanScore++ ;
        return ("Paper against Rock. It is a win!") ;
    } else if (humanChoice === "Scissors" && computerChoice === "Scissors") {
        return ("Scissors against Scissors. It is a tie!") ; 
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
       humanScore++ ;
        return ("Scissors against Paper. It is a win!") ;
    } else {
        computerScore++ ;
        return (humanChoice + " against " + computerChoice + "." + " It is a lose!")
    }
    }

console.log(playRound(getHumanChoice(), getComputerChoice()));
let result = ("You: " + humanScore + " & " + "Computer: " + computerScore)
console.log(result)