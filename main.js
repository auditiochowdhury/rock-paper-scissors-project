console.log('Hello Javascript')

function getComputerChoice(){
    //this function will randomly return either rock, papers or scissors
    // 
    let rock = 'rock'
    let paper = 'paper'
    let scissors = 'scissors'
    let randomNum = Math.floor(Math.random()* 100 + 1) 
    
    //If randomNum is less than or equal to 25, return rock
    //else if greather than 25 and less than 50, return paper
    // else return scisso

    if(randomNum<=25){
        return 'rock'
    }else if(randomNum > 25 && randomNum<=50){
        return 'paper'
    }else return 'scissors'

}

// Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

let playerScore = 0
let computerScore = 0
function playRound(playerSelection,computerSelection){
    
    if(playerSelection.toLowerCase() === 'rock' && computerSelection=='paper'){
        computerScore +=1
        return 'you lost!, rock does not beat paper'
    }else if(playerSelection.toLowerCase() === 'paper' && computerSelection == 'rock'){
        playerScore += 1
        return 'you won!, paper does beat rock'
    }else if(playerSelection.toLowerCase()==='rock' && computerSelection=='scissors'){
        playerScore += 1
        return 'you won!, rock does beat scissors'
    }else if(playerSelection.toLowerCase() ==='scissors' && computerSelection=='rock'){
        computerScore +=1
        return 'you lost, scissors does not beat rock'
    }else if(playerSelection.toLowerCase()==='paper' && computerSelection=='scissors'){
        computerScore +=1
        return 'You lost!, paper does not beat scissors'
    }else if(playerSelection.toLowerCase()==='scissors' && computerSelection=='paper'){
        playerScore += 1
        return 'You won, Scissors beats paper!'
    }else return 'Nobody Won!'
}
//Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
//function game should playRound 5 times, and keeps score, score is at

// function game(){
//     for(let i = 0;i<5;i++){

//         let playerChoice = prompt('Your Choice?').toLowerCase()
//         console.log(playRound(playerChoice,getComputerChoice()))
//         console.log(`{player's score is ${playerScore}}`)
//         console.log(`{computer's score is ${computerScore}}`)
      
                
        
//     }
//     if(playerScore >= 3){
//         return 'You won the best of 5!:)'
//     }else return 'You lost the best of 5! :('

// }

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

const buttons = document.querySelectorAll('button')
buttons.forEach( button => button.addEventListener('click',) )