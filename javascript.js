// I will be using the project steps as plan/pseudocode 
//Setup the project structure
//Write the logic to get the computer choice
function getComputerChoice () {
    let computerChoice = Math.random() ;
    if (computerChoice <= 0.33) {
        return "Rock" ;
    } else if (computerChoice <= 0.66) { 
        return "Paper" ;
    } else {
        return "Scissors" ;
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
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase() ;
    if (humanChoice === "Rock" && computerChoice === "Scissors") {
        humanScore++ ;
        return "Rock against Scissors. It is a win! You: " + humanScore + " & " + "Computer: " + computerScore ;
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        humanScore++ ;
        return "Paper against Rock. It is a win! You: " + humanScore + " & " + "Computer: " + computerScore ;
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
       humanScore++ ;
        return "Scissors against Paper. It is a win! You: " + humanScore + " & " + "Computer: " + computerScore ;
    } else if (humanChoice === computerChoice) {
        return humanChoice + " against " +computerChoice +". It is a tie! You: " + humanScore + " & " + "Computer: " + computerScore ;
    } else {
        computerScore++ ;
        return humanChoice + " against " + computerChoice + "." + " It is a lose! You: " + humanScore + " & " + "Computer: " + computerScore ;
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