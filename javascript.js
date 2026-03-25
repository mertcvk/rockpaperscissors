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
console.log(getComputerChoice())

//Write the logic to get the human choice
function getHumanChoice () {
    let humanChoice = prompt("Enter your choice:");
    return (humanChoice);
}
console.log(getHumanChoice())

//Declare the players score variables
let humanScore = 0
let computerScore = 0