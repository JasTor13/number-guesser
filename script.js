let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor(Math.random() * 10);
};

function compareGuesses(humanGuess, computerGuess, targetNumber) {
    const difference1 = Math.abs(humanGuess - targetNumber);
    const difference2 = Math.abs(computerGuess - targetNumber);
    if (difference1 < difference2) {
        return true
    } else if (difference1 === difference2){
        return true
    } else if (difference1 > difference2) {
        return false
    }
};

function alert(humanGuess) {
    if (humanGuess < 0 || humanGuess > 9) {
        console.log('The number should be between 0 and 9')
    }
}

function updateScore(winner) {
    switch(winner) {
        case 'human':
            humanScore += 1;
            break;
        case 'computer':
            computerScore += 1;
            break;
    }
};

function advanceRound() {
    currentRoundNumber += 1;
};