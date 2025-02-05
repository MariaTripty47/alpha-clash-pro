
// way-01
// function play() {
// step-1: hide the home screen
// const homeSection = document.getElementById('home-screen');
// homeSection.classList.add('hidden');

//  show the playground
// const playGroundSection = document.getElementById('play-ground');
// playGroundSection.classList.remove('hidden');

// }



function handleKeyboardKeyUpEvent(event){

 const playerPressed = event.key;

console.log('player pressed', playerPressed);

//stop the game if pressed 'Esc'

if(playerPressed === 'Escaped'){
gameOver();


}


// get the expected to press

const currentAlphabetElemnet = document.getElementById('current-alphabet');

const currentAlphabet = currentAlphabetElemnet.innerText;

const expectedAlphabet = currentAlphabet.toLocaleLowerCase();


// check matched or not

if(playerPressed === expectedAlphabet){

console.log('you get a point');

// update score:
// 1. get the current score

const currentScoreElement = document.getElementById('current-score');
const currentScoreText =  currentScoreElement.innerText;
const currentScore = parseInt(currentScoreText);

// 2. increase the score by 1

const newScore = currentScore + 1;

// 3. show the updated score

currentScoreElement.innerText = newScore;

// starts a new round
removeBackgroundColourById(expectedAlphabet);

continueGame(); 

}

else{

    console.log('you missed.you lost a life');

// 1. get the current life number
const currentLifeElement = document.getElementById('current-life');
const currentLifeText =  currentLifeElement.innerText;
const currentLife = parseInt(currentLifeText);

// 2. reduce the life count

const newLife = currentLife - 1;


// 3. display the updated life count

currentLifeElement.innerText = newLife;


if(newLife === 0){

    gameOver();
}

}

}

// capture keyboard keypress
document.addEventListener('keyup', handleKeyboardKeyUpEvent);


//way-2

function continueGame(){
// step-1: generate a random alphabet

const alphabet = getARandomAlphabet();
// console.log('your random alphabet', alphabet);

// display the random alphabet
const currentAlphabetElemnet = document.getElementById('current-alphabet');

currentAlphabetElemnet.innerText = alphabet;

// set background color
setBackgroundColourById(alphabet);

}

function play(){

    //hide everything show only the playground

    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    //reset score and life
    setTextElementValueById(current-life,5);
    setTextElementValueById(current-score,0);

    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    //update final-score

    const gameScore = getTextElementValueById('current-score')

    setTextElementValueById('game-score',gameScore)
 
// clear the last selected alphabet highlight

const currentAlphabet = getElementTextById('current-alphabet');

removeBackgroundColourById(currentAlphabet);
}