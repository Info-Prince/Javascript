let randomNumber = parseInt(Math.random()*100+1)
console.log(randomNumber);

const userInput = document.querySelector('#inputField');
// console.log(userInput);
const submit = document.querySelector ('#guessSubmit');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.remainResult');
const lowOrHigh = document.querySelector ('.lowOrHigh');

const startOver = document.querySelector ('.resultParas');
let p = document.createElement('p')

//strategy
let prevGuess = [];
let numOfGuesses = 1;
let playGame = true;

//* If user available for playing game
if (playGame) {
    submit.addEventListener ( 'click', (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value)
        validateGuess(guess);       
    });
}


//functions
function validateGuess (guess) {
    if (guess > 100) {
        alert (`Please Enter value less than 100`)
    } else if ( isNaN(guess) ) {
        alert(`Please Enter a valid number`)
    } else if ( guess < 1) {
        alert (`Please Enter a number greater than 1`)
    } else {
        //guessed number validate
        prevGuess.push(guess);
        if (numOfGuesses > 9 ) {
            //no remain attempt
            cleanUp(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);   
            endGame ();        
        }  else {
            //attempt remains
            cleanUp (guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You guessed it right`);
        endGame ();
    } else if (guess < randomNumber) {
        displayMessage(`Number is Too Low`);
    } else if ( guess > randomNumber ) {
        displayMessage(`Number is Too High`);
    } 
}

function cleanUp (guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess},  `;
    remaining.innerHTML = `${10 - numOfGuesses}`;
    numOfGuesses++;
}

function displayMessage(message) {
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame () {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h3 id= "newGame">Start New Game</h3>`;
    startOver.appendChild(p);

    playGame = false;
    newGame();
}

function newGame () {
    const newGameBtn = document.querySelector('#newGame')
    newGameBtn.addEventListener ('click', (e) => {
        //reset all field
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numOfGuesses = 1;
        guessSlot.innerHTML = '';
        lowOrHigh.innerHTML = '';
        remaining.innerHTML = `${10}`;;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame = true;
    })
}