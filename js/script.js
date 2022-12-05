
// Rock-paper-scissor in Javascript 

const rock = 'https://github.com/StiMarton/rock-paper-scissors/blob/rps-ui/img/rock.jpg?raw=true';
const paper = 'https://github.com/StiMarton/rock-paper-scissors/blob/rps-ui/img/paper.jpg?raw=true';
const scissor = 'https://github.com/StiMarton/rock-paper-scissors/blob/rps-ui/img/scissor.jpg?raw=true';
const handImgArray = [rock, paper, scissor];

const img = document.getElementsByClassName('image');
const rockId = document.getElementById('rock');
const paperId = document.getElementById('paper');
const scissorId = document.getElementById('scissor');
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
const hand = ["rock", "paper", "scissor"];

init();

// Restarts the game
function init() {
    imgComp.style.display = 'none';
    resPanel.style.visibility = 'hidden';
    userScore = 0;
    computerScore = 0;
    gameRound = 0;
    userScoreDisplay.textContent = '0';
    computerScoreDisplay.textContent = '0';
    document.querySelector('#rock').disabled = false;
    document.querySelector('#paper').disabled = false;
    document.querySelector('#scissor').disabled = false;
}

btnNewGame.addEventListener('click', init);

//DOM Select hands from forEach, instead of individual variables
userSelection.forEach((button) => {
    button.addEventListener('click', () => {
        getComputerChoice(hand);
        playRound(button.id, getComputerChoice(hand));
    });
}); 

//The computer returns rock, paper or scissor at random 
function getComputerChoice (hand) {
    const randNum = Math.floor(Math.random()* 3);
    imgComp.src = handImgArray[randNum];
    return hand[randNum];
        }   
let computerSelection = getComputerChoice(hand);

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
        imgComp.style.display = 'inline';
        resText.textContent = 'Draw.';
        console.log('draw');
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
    imgComp.style.display = 'inline';
    resPanel.style.visibility = 'visible';
    resText.textContent = 'You score!';
    userScoreDisplay.textContent = userScore;
    computerScoreDisplay.textContent = computerScore;
    console.log('player won round');
    declareWinner();
}

function losing() {
    computerScore++;
    imgComp.style.display = 'inline';
    resPanel.style.visibility = 'visible';
    resText.textContent = 'Computer score.';
    userScoreDisplay.textContent = userScore;
    computerScoreDisplay.textContent = computerScore;
    console.log('player lose round');
    declareWinner();
}

function declareWinner() {
    if (computerScore == 5 || userScore == 5) {
        document.querySelector('#rock').disabled = true;
        document.querySelector('#paper').disabled = true;
        document.querySelector('#scissor').disabled = true;
            if (computerScore == 5 && userScore == 1 || userScore == 0) {
                resText.textContent = 'YOU LOSE! You suck at this, try again.';
            } else if (computerScore == 5 && userScore == 4) {
                resText.textContent = 'YOU LOSE! So close to victory, try again!'
            } else if (computerScore == 5) {
                resText.textContent = 'YOU LOSE! Try again!';
            } else if (userScore == 5 && computerScore == 1 || computerScore == 0) {
                resText.textContent = 'YOU WIN! You are a rock-paper-scissor pro!';
            } else if (userScore == 5 && computerScore == 4) {
                resText.textContent = 'YOU WIN! That was a close call!';
            } else if (userScore == 5) {
                resText.textContent = 'YOU WIN!';
        }
    }
}
    // console.log(playRound(userSelection, computerSelection));
    // console.log(`Score is ${userScore} to ${computerScore} at round ${i}`);  

         /*      
        }
        
    }
}

game();*/