const result = document.querySelector('.result')
const userScore = document.querySelector('.user-score span')
const computerScore = document.querySelector('.computer-score span')

let userPoints = 0
let computerPoints = 0

const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playComputer())
}

const playComputer = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]

}

const playTheGame = (human, computer) => {
    console.log("humano " + human + " computador " + computer)

if(human === computer) {
   result.innerHTML = "Deu Empate!"
} 
else if(human === "rock" && computer === "scissors" || human === "paper" && computer === "rock" || human === "scissors" && computer === "paper") {
    userPoints++
    userScore.innerHTML = userPoints
    result.innerHTML = "Você ganhou!"
} else {
    computerPoints++
    computerScore.innerHTML = computerPoints
    result.innerHTML = "Você perdeu!Computador ganhou!"
}
}
