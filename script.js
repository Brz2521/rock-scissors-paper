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
    if(userChoice === npcChoice){
        console.log("It's a tie!");
        return 'tie';
    }

    if(
        (userChoice == 'rock' && npcChoice == 'scissors') || // '||' means OR operator
        (userChoice == 'paper' && npcChoice == 'rock') ||
        (userChoice == 'scissors' && npcChoice == 'paper')
    ){
        userScore++;
        console.log(`You win! ${userChoice} beats ${npcChoice}`);
        return 'human'; 
    } else {
        npcChoice++;
        console.log(`You lose! ${npcChoice} beats ${userChoice}`);
        return 'computer';
    }

}

function playGame(){
    userScore = 0;
    npcChoice = 0;

    for(let i=0; i < 3; i++){
        console.log(`Round ${i+1}: "\n"`);
        const userSelection = userChoice();
        const computerSelection = npcChoice();
        playRound(userSelection,computerSelection);
    }

    console.log("\nFinal Score:");
    console.log(`You: ${userScore} - Computer: ${npcScore}`);

    if(userScore > npcChoice){
        console.log("User wins!")

    }else if(npcChoice > userScore){
        console.log("Computer wins!");
    } else {
        console.log("The game ended in a tie!");
    }

}

playGame();

/*const userSelection = getUserChoice();
const computerSelection = getComputerChoice();
console.log(playRound(userSelection, computerSelection));*/






