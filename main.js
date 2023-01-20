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

function checkWinner(){
    if(playerScore == 5 && computerScore<5){
        lastResult.innerText = 'You won the best of 5!:)'
    }else if(computerScore >= 5 ){
        lastResult.innerText = 'You lost the best of 5! :('
    }
    
}

// Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerChoice and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

let playerScore = 0
let computerScore = 0
let player;
let computer;


//Announce a winner once someone reaches 5 points


//event listeners
const buttons = document.querySelectorAll('button')
buttons.forEach(button=>button.addEventListener('click',playRound))




function playRound(){
    let lastResult = document.querySelector('.bestOf')
  
        

    




    let scoreResult = document.querySelector('.scoreboard')
    let computerSelection = getComputerChoice();
    let result = document.querySelector('.resultPara')
    let playerChoice = this.innerText
    console.log(playerChoice)
    console.log(computerSelection)
   
    if(playerChoice === 'rock' && computerSelection=='paper'){
        computerScore +=1
        result.innerText ='you lost!, rock does not beat paper'
        scoreResult.innerText = `Your score is ${playerScore} and the Computer's score is ${computerScore}`
    }else if(playerChoice === 'paper' && computerSelection == 'rock'){
        playerScore += 1
        result.innerText =  'you won!, paper does beat rock'
        scoreResult.innerText = `Your score is ${playerScore} and the Computer's score is ${computerScore}`
    }else if(playerChoice==='rock' && computerSelection=='scissors'){
        playerScore += 1
        result.innerText = 'you won!, rock does beat scissors'
        scoreResult.innerText = `Your score is ${playerScore} and the Computer's score is ${computerScore}`
    }else if(playerChoice ==='scissors' && computerSelection=='rock'){
        computerScore +=1
        result.innerText = 'you lost, scissors does not beat rock'
        scoreResult.innerText = `Your score is ${playerScore} and the Computer's score is ${computerScore}`
    }else if(playerChoice==='paper' && computerSelection=='scissors'){
        computerScore +=1
        result.innerText = 'You lost!, paper does not beat scissors'
        scoreResult.innerText = `Your score is ${playerScore} and the Computer's score is ${computerScore}`
    }else if(playerChoice==='scissors' && computerSelection=='paper'){
        playerScore += 1
        result.innerText = 'You won, Scissors beats paper!'
        scoreResult.innerText = `Your score is ${playerScore} and the Computer's score is ${computerScore}`
    }else {
        
        result.innerText = 'Nobody Won!'
        scoreResult.innerText = `Your score is ${playerScore} and the Computer's score is ${computerScore}`
      }
    if(playerScore==5){
            lastResult.innerText = 'You won and reached 5 Points!!:) Reload the page to play again!'
            disableButtons()
            console.log(`the player score is ${playerScore} and the copmuters score is ${computerScore}`)
            
        }else if(computerScore==5){
            console.log(`the player score is ${playerScore} and the copmuters score is ${computerScore}`)
            lastResult.innerText = 'The Computer won and reached 5 Points!!:) Reload the page to play again!'
            disableButtons()
            
        }
   

}





function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}
