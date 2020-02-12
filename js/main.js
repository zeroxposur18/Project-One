//Variables
var userArray = [];
var gameArray =[];
var count =0;
var playerTurn = false;
var matchArray;
var timeLeft;
var timeCheck;
var timer;
var functionTempo;
var tempoOne;
var tempoTwo;
//Cached Elements
const squareOne = document.querySelector("#sq1");
const squareTwo = document.querySelector("#sq2");
const squareThree = document.querySelector("#sq3");
const squareFour = document.querySelector("#sq4");
//Event listener set up
document.querySelector('button').addEventListener('click', btnClick);
squareOne.addEventListener('click', oneClick);
squareTwo.addEventListener('click', twoClick);
squareThree.addEventListener('click', threeClick);
squareFour.addEventListener('click', fourClick);
//onclick function
function btnClick(e){
    if (count === 0)
        userArray =[];
        start();
};
function oneClick(){
    userArray.push(1);
    document.getElementById('audio-one').play();
    squareOne.style.backgroundColor = 'lightgreen';
    setTimeout(function() {
        colorClear();
        audioClear();
    },600)
};
function twoClick(){
    userArray.push(2);
    document.getElementById('audio-two').play();
    squareTwo.style.backgroundColor = 'red';   
    setTimeout(function() {
        colorClear();
        audioClear();
    },600) 
};
function threeClick(){
    userArray.push(3);
    document.getElementById('audio-three').play();
    squareThree.style.backgroundColor = 'yellow';
    setTimeout(function() {
        colorClear();
        audioClear();
    },600)
};
function fourClick(){
    userArray.push(4)
    document.getElementById('audio-four').play();
    squareFour.style.backgroundColor = 'blue';
    setTimeout(function() {
        colorClear();
        audioClear();
    },600)
};
//Functions
function start(){
    document.getElementById('audio-start').volume = .3;
    document.getElementById('audio-start').play();
    gameRandom();
    gameFlash();
};
function gameRandom(){  
    gameArray.push(Math.floor(Math.random()*4)+ 1);
    count++;
    flashTempo();
    userTempo();
    gameTempo();
};
function gameFlash(){
    document.querySelector('button').innerHTML ='<h1>Computer Turn</h1>';
     gameArray.forEach((flash, i) => {
        setTimeout(function() {
            if (flash === 1)
                one();
            if (flash === 2)
                two();
            if (flash === 3)
                three();
            if (flash === 4)
                four();
        }, (i + 1) * tempoOne);
    });
;setTimeout(function() {
    document.querySelector('button').innerHTML ='<h1>Your Turn!</h1>';
    userTurn();
}, (count + 1)*tempoOne);
}
function one(){
    document.getElementById('audio-one').play();
    squareOne.style.backgroundColor = 'lightgreen';
    setTimeout(function() {
        colorClear();
        audioClear();
    },functionTempo)
};
function two(){
    document.getElementById('audio-two').play();
    squareTwo.style.backgroundColor = 'red';   
    setTimeout(function() {
        colorClear();
        audioClear();
    },functionTempo) 
};1
function three(){
    document.getElementById('audio-three').play();
    squareThree.style.backgroundColor = 'yellow';
    setTimeout(function() {
        colorClear();
        audioClear();
    },functionTempo)
};
function four(){
    document.getElementById('audio-four').play();
    squareFour.style.backgroundColor = 'blue';
    setTimeout(function() {
        colorClear();
        audioClear();
    },functionTempo)
};
function colorClear() {
    squareOne.style.backgroundColor = 'darkgreen';
    squareTwo.style.backgroundColor = 'darkred';
    squareThree.style.backgroundColor = 'darkgoldenrod';
    squareFour.style.backgroundColor = 'darkblue';
};
function audioClear(){
    document.getElementById('audio-one').pause();
    document.getElementById('audio-two').pause();
    document.getElementById('audio-three').pause();
    document.getElementById('audio-four').pause();
    document.getElementById('audio-one').currentTime = 0;
    document.getElementById('audio-two').currentTime = 0;
    document.getElementById('audio-three').currentTime = 0;
    document.getElementById('audio-four').currentTime = 0;
}
function userTurn() {
playerTurn = true;
timer = setInterval(function(){
    document.querySelector('button').innerHTML =`<h1> ${timeLeft}   seconds remaining. </h1>`;
    timeLeft -= 1;
    if (timeLeft < 0){clearInterval(timer)}
}, 1000)
if (playerTurn = true) {setTimeout(function() {
    if (userArray.length === gameArray.length){
        userCheck();}
    else gameOver();
},tempoTwo)}
};
function userCheck() {
    playerTurn = false;
    arrayCheck();
    if (matchArray === true){
        userArray = [];
        document.querySelector('button').innerHTML = '<h1>Nice Job!</h1>';
        setTimeout(function(){
            startAgain();
        }, 2000);
    }
    else gameOver();
};
function arrayCheck(){
    for (var i = 0; i < count; i++) {
        if (userArray[i] === gameArray[i]){
        matchArray = true;}
        else matchArray = false;
    }};
function userTempo(){
    if (count >= 1 && count <4){
        tempoTwo = 5000;
        timeLeft = 4;
    }
    else if (count >= 4 && count < 8){
        tempoTwo = 4000;
        timeLeft = 3;
    }
    else if (count >= 8){
        tempoTwo = 3000;
        timeLeft = 2;
    }
};
function gameTempo(){
    if (count >= 1 && count <4){
        tempoOne = 1000;
    }
    else if (count >= 4 && count < 8){
        tempoOne = 800;
    }
    else if (count >= 8){
        tempoOne = 700;
    }
};
function flashTempo(){
    if (count >= 1 && count <4){
        functionTempo = 800;
    }
    else if (count >= 4 && count < 8){
        functionTempo = 700;
    }
    else if (count >= 8){
        functionTempo = 600;
    }  
}
function gameOver(){
    document.getElementById('audio-start').pause();
    document.getElementById('audio-start').currentTime = 0;
    document.querySelector('button').innerHTML = `<h1>Game Over! <br>You reached level ${count} <br>Try Again?</h1>`;
    userArray =[];
    gameArray =[];
    count = 0;
    playerTurn = false;
};
function startAgain(){
    gameRandom();
    gameFlash();
}
