
// Rock-paper-scissor in Javascript 

/* Hands as individual variables
const rock = document.getElementById('rock-btn');
const paper = document.getElementById('paper-btn');
const scissor = document.getElementById('scissor-btn');
*/

const userSelection = document.querySelectorAll('.game-btn');
const imgComp = document.querySelector('#comp-img');
const resPanel = document.querySelector('.result');
const resText = document.querySelector('.result-text');
const userScoreDisplay = document.querySelector('#user-score');
const computerScoreDisplay = document.querySelector('#computer-score');
const btnNewGame = document.querySelector('.newgame-btn');

let userScore = 0;
let computerScore = 0;
let gameRound = 0;
var hand = ["rock", "paper", "scissor"];

init();

//DOM Select hands from forEach, instead of individual variables
userSelection.forEach((button) => {
    button.addEventListener('click', () => {
        getComputerChoice(hand);
        playRound(button.id);
    });
}); 

btnNewGame.addEventListener('click', init);

// Restarts the game
function init() {
    imgComp.style.display = 'none';
    resPanel.style.visibility = 'hidden';
    userScore = 0;
    computerScore = 0;
    gameRound = 0;
    userScoreDisplay.textContent = '0';
    computerScoreDisplay.textContent = '0';
}

//The computer returns rock, paper or scissor at random 
function getComputerChoice (hand) {
    return hand[Math.floor(Math.random()*hand.length)];
        }
    computerSelection = getComputerChoice(hand);

    console.log(computerSelection)

/*
// This function runs the entire game up to five times 
function game() { 
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
*/
//A single round, user against computer
function playRound (userSelection, computerSelection) {
    if (userSelection == "rock" && computerSelection == "scissor"
        || userSelection == "paper" && computerSelection == "rock"
        || userSelection == "scissor" && computerSelection == "paper") {
            winning();
    } else if (userSelection == computerSelection) {
        resPanel.style.visibility = 'visible';
        resText.textContent = 'Draw!';
    } else if (userSelection == "rock" && computerSelection == "paper"
        || userSelection == "paper" && computerSelection == "scissor"
        || userSelection == "scissor" && computerSelection == "rock") {
        losing();
    } else {
        console.log('nothing')
    }
    console.log(userSelection, computerSelection);
}       

function winning() {
    userScore++;
    resPanel.style.visibility = 'visible';
    resText.textContent = 'You win!';
    userScoreDisplay.textContent = userScore;
}

function losing() {
    computerScore++
    resPanel.style.visibility = 'visible';
    resText.textContent = 'You loose!';
    userScoreDisplay.textContent = userScore;
}
    // console.log(playRound(userSelection, computerSelection));
    // console.log(`Score is ${userScore} to ${computerScore} at round ${i}`);  

         /*      
        }
        
    }
}

game();*/