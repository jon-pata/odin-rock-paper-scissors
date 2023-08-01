playRound();

function playRound(){
    displayWinner(getWinner(getPlayerChoice(), getComputerChoice()));
}

function displayWinner(winCode){
    if(winCode === 0){
        alert("You tie")
    }else if(winCode === 1){
        alert("You win")
    }else{
        alert("You lose")
    }
}

//returns 0 if tie, 1 if player, 2 if computer
function getWinner(playerChoice, computerChoice){
    if(playerChoice === computerChoice){
        return 0;
    }

    if(playerChoice === "rock" && computerChoice === "scissors"){
        return 1;
    }else if(playerChoice === "paper" && computerChoice === "rock"){
        return 1;
    }else if(playerChoice === "scissors" && computerChoice === "paper"){
        return 1;
    }else{
        //all other scenarios should be a lose, covered ties, and covered win scenarios
        return 2;
    }
}

function getComputerChoice(){
    //gets random number 1-3
    const randomChoice = Math.floor(Math.random()*3)+1;

    return getChoiceFromSelectionCode(randomChoice);
}

function getPlayerChoice(){
    const playerChoice = Number((window.prompt("Please type in your selection: 1 for rock, 2 for paper, 3 for scissors")).trim());
    return getChoiceFromSelectionCode(playerChoice, "Player");
}

function getChoiceFromSelectionCode(cd, who="Computer"){
    switch(cd){
        case 1:
            console.log(`${who} chooses rock`);
            return "rock";
        case 2:
            console.log(`${who} chooses paper`);
            return "paper";
        case 3:
            console.log(`${who} chooses scissors`);
            return "scissors";
    }
}