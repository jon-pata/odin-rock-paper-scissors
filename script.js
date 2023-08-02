//playRound();

function playRound(playerSelection){
    console.log(playerSelection);
    const winCd = getWinner(getPlayerChoice(playerSelection), getComputerChoice());
    updateScoreBoard(winCd);
    //check if someone won the game
    if(didSomeoneWin()) displayFinalMessage();
}

function displayFinalMessage(){
    yourScore = 0;
    compScore =0;
    yourScoreText.textContent = yourScore;
    compScoreText.textContent = compScore;
    const modal = document.querySelector('#final-msg');
    modal.style.display = 'block';
}

const buttons = document.querySelectorAll('div > button');
console.log(buttons);
buttons.forEach((btn) => {
    btn.addEventListener('click', (e)=>{
        playRound(Number(e.target.attributes[0].value));
    });
});

let yourScore = 0, compScore = 0;
const yourScoreText = document.querySelector('#yourScore');
const compScoreText = document.querySelector('#compScore');
yourScoreText.textContent = yourScore;
compScoreText.textContent = compScore;

function updateScoreBoard(winCode){
    if(winCode === 0){
        return;
    }else if(winCode === 1){
        yourScore++;
        yourScoreText.textContent = yourScore;
    }else{
        compScore++;
        compScoreText.textContent = compScore;
    }
}

function didSomeoneWin(){
    return (yourScore >= 5 || compScore >= 5);
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

function getPlayerChoice(playerSelection){
    //const playerChoice = Number((window.prompt("Please type in your selection: 1 for rock, 2 for paper, 3 for scissors")).trim());
    return getChoiceFromSelectionCode(playerSelection, "Player");
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