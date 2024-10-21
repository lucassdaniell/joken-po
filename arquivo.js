const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0 
let machineScoreNumber = 0

/*
humanScoreNumber  -> Camel case
GAME_OPTIONS      -> Snake case

  ENUM -> uma forma mais segura para você não errar oque esta escrito no seu codigo 

*/

 //ENUM 
const GAME_OPTIONS = {
    ROCK: 'rock',           //ENUM
    PAPER: 'paper',               //ENUM
    SCISSORS: 'scissors'             //ENUM
}   


const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS] //ENUM 
    //const choices = ['rock', 'paper', 'scissors']
    const numberRandom = Math.floor(Math.random() * 3)

    return choices[numberRandom]
}

const playTheGame = (human, machine) => {

    console.log(' Humano: ' + human + ' Maquina: ' + machine)

    if (human === machine) {
        result.innerHTML = 'Deu empate!!'
    } else if (
        //ENUM

        (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) ||          
        (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) || 
        (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER))

        //(human === 'paper' && machine === 'rock') ||          
       // (human === 'rock' && machine === 'scissors') || 
       // (human === 'scissors' && machine === 'paper'))
         {
            humanScoreNumber++
            humanScore.innerHTML =  humanScoreNumber
        result.innerHTML = 'Você ganhou!!'
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = 'Você perdeu pra Maquina!!'
    }
}




