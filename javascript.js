// I will be using the project steps as plan/pseudocode 
//Setup the project structure
//Write the logic to get the computer choice
function getComputerChoice () {
    let computerChoice = Math.random() ;
    if (computerChoice <= 0.33) {
        return "rock" ;
    } else if (computerChoice <= 0.66) { 
        return "paper" ;
    } else {
        return "scissors" ;
    }
}

//Write the logic to get the human choice
function getHumanChoice () {
    let humanChoice = prompt("Enter your choice:") ;
    return humanChoice ;
}

//Declare the players score variables
let humanScore = 0;
let computerScore = 0;

//Write the logic to play a single round
function playRound(humanChoice, computerChoice) { 
    humanChoice = humanChoice.toLowerCase() ;
    if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++ ;
        return "Rock against Scissors. It is a win! You: " + humanScore + " & " + "Computer: " + computerScore ;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++ ;
        return "Paper against Rock. It is a win! You: " + humanScore + " & " + "Computer: " + computerScore ;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
       humanScore++ ;
        return "Scissors against Paper. It is a win! You: " + humanScore + " & " + "Computer: " + computerScore ;
    } else if (humanChoice === computerChoice) {
        return humanChoice.charAt(0).toUpperCase()+humanChoice.slice(1).toLowerCase() + " against " +computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1).toLowerCase() + ". It is a tie! You: " + humanScore + " & " + "Computer: " + computerScore ;
    } else {
        computerScore++ ;
        return humanChoice.charAt(0).toUpperCase()+humanChoice.slice(1).toLowerCase() + " against " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1).toLowerCase() +"." + " It is a lose! You: " + humanScore + " & " + "Computer: " + computerScore ;
    }
    }

//Write the logic to play the entire game
function playGame() {
    let roundone = playRound(getHumanChoice(), getComputerChoice()) ;
    console.log(roundone);
    let roundtwo = playRound(getHumanChoice(), getComputerChoice()) ;
    console.log(roundtwo);
    let roundthree = playRound(getHumanChoice(), getComputerChoice()) ;
    console.log(roundthree);
    let roundfour = playRound(getHumanChoice(), getComputerChoice()) ;
    console.log(roundfour);
    let roundfive = playRound(getHumanChoice(), getComputerChoice()) ;
    console.log(roundfive);
    let result = ("Final Result is You: " + humanScore + " & " + "Computer: " + computerScore) ;
    return result;
}

console.log(playGame());