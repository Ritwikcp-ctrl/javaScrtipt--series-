const submit = document.querySelector('#subt') // this the submit button
const randomNumber = parseInt((Math.random())*10) +1
const userInput = document.querySelector('#guessField')

const guessSlot = document.querySelector('.guess')
const remaining = document.querySelector('.lasResult')
const lowOrHi = document.querySelector('.lowOrHi')
const strtOverf = document.querySelector('.resultParas')


const p = document.currentElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

//This line of code is checking wheter is player available , and recieving the input form the user and on submiting the button it leads to another function which further check for the validation
if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

//lets write the vaidation check

function validateGuess(guess) { //check for the validation whether the value is numnber etc.
 if(isNaN(guess)){
    alert(`pls enter a vailid number`)
 }else if(guess<1){
   alert(`pls enter positive number`)
 }else if(guess>100){
    alert(`pls enter less the 100`)
 }else {
    prevGuess.push()
    if(numGuess === 11){
        displayGuess(guess)
        displayMessage(`Game over.Random numher was ${randomNumber}`)
        endGame()
    }else {
        displayGuess(guess)
        checkGuess(guess)
    }
 }
}

function checkGuess(guess) { //check whether the value is equal to guess number , that is correct guess
    if (guess === randomNumber){
        displayMessage(`your guess is right `)
        endGame()
    }else if(guess < randomNumber){
        displayMessage(`Number is low `)
    }else if(guess > randomNumber) {
        displayMessage(`guess is too high`)
    }

}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess   }` // provided the space in  the previous guessed number
    numGuess++
    remaining.innerHTML = `${11-numGuess}`

}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`

}

function endGame() {

userInput.value = ""
userInput.setAttribute('disabled', '')
p.classList.add('button')
p.innerHTML = <h2 id = "newGame"> Start new Game </h2>
startOver.appendChild(p)
playGame = false
newGame()
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        randomNumber = parseInt(Math.random()*100+1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11-numGuess}`
       userInput.removeAttribute('disabled')
       startOver.removeChild(p)

        playGame = true
    })

}


