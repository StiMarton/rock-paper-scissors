
/* Rock-paper-scissor in Javascript */

/* The game can now be replayed five times.
Fix the winner message when the game is over
Fix the timer so it don't count when players don't type "rock, paper or scissor" correctly */



/*Declare the scores*/
let userScore = 0;
let computerScore = 0;

//Make a variable that contains the strings "rock, paper and scissor"
var hand = ["rock", "paper", "scissor"];

//The computer returns rock, paper or scissor at random 
function getComputerChoice (hand) {
    return hand[Math.floor(Math.random()*hand.length)];
        }
    let computerSelection = getComputerChoice(hand);

// This function runs the entire game up to five times 
function game() { /*
    for (let i = 1; i <= 6; i++) {
        // If the computer has the most point after five rounds, it wins
        if (i == 6 && computerScore > userScore) {
            console.log("Game is over, computer wins the game!");

        // If it's equal number of points, it is a draw
        } else if (i == 6 && computerScore == userScore) {
            console.log("Game is over, it is a draw!");

        // If the player has the most point after five rounds, they win
        } else if (i == 6) {
            console.log("Game is over, you win the game!");

        } else { 
            /* -A prompt gets the input from user, and stores it in a variable.
            - The parameter must be case-insensitive
            - When user selects a hand the computer also selects a hand
            let userSelection = prompt('Please type "rock, paper or scissor".');

                if (userSelection.toLowerCase() === "rock" || userSelection.toLocaleLowerCase() === "paper" || userSelection.toLocaleLowerCase() === "scissor") {
                    console.log(`You select ${userSelection}`);
                    console.log(`The computer selects ${computerSelection}`);
                } else {
                    alert('Please type "rock, paper or scissor"');
                }
        */


            //A single round, user against computer
            function playRound (userSelection, computerSelection) {
                if (userSelection == "rock" && computerSelection == "scissor"
                    || userSelection == "paper" && computerSelection == "rock"
                    || userSelection == "scissor" && computerSelection == "paper") {
                    userScore++;
                    return `You win this round, ${userSelection} beats ${computerSelection}.`;
                } else if (userSelection == computerSelection) {
                    return "Draw! Do it again.";
                } else if (userSelection == "rock" && computerSelection == "paper"
                    || userSelection == "paper" && computerSelection == "scissor"
                    || userSelection == "scissor" && computerSelection == "rock") {
                    computerScore++
                    return `You lose this round, ${computerSelection} beats ${userSelection}.`;
                } else {
                    return "No game";
                }

                
            }
                // console.log(playRound(userSelection, computerSelection));
                // console.log(`Score is ${userScore} to ${computerScore} at round ${i}`);  
                //DOM Stuff
                const buttons = document.querySelectorAll('button');
                buttons.forEach((button) => {
                    button.addEventListener('click', (playRound) => {
                        console.log(button.id);
    });
});       
        }
        
    /*}
}*/
game();