/*Rock Paper Scissors
1. Import random
2. When user inputs 'Rock','Paper' or 'Scissors'
3. If user inputs Rock when random is paper
4. Print paper covers rock
5. If user inputs paper when random is scissors
6. Print scissors cuts paper
7. If user input scissors, when random is rock
8. Print rock beats scissors
*/


let userScore = 0;
let npcScore = 0;

function getUserChoice(){
    const user = prompt("Type in rock, paper or scissors:");
    return user;
}

function getComputerChoice(){
    const RPS = ['rock', 'paper', 'scissors'];
    return RPS[Math.floor(Math.random() * RPS.length)];
}

function playRound(userChoice, npcChoice){
    if(userChoice == 'rock' && npcChoice == 'scissors'){
        return console.log(`User input ${userChoice} and computer input ${npcChoice}` + "\n" +
                    `Rock beats scissors, User wins!`);

    } else if (userChoice == 'scissors' && npcChoice == 'rock'){
        return console.log(`User input ${userChoice} and computer input ${npcChoice}` + "\n" + 
                    `Rock beats scissors, NPC wins!`);

    } else if (userChoice == 'scissors' && npcChoice == 'rock'){
        return console.log(`User input ${userChoice} and computer input ${npcChoice}` + "\n" + 
                    `Rock beats scissors, NPC wins!`);
    }



}

const userSelection = getUserChoice();
const computerSelection = getComputerChoice();
console.log(playRound(userSelection, computerSelection));






