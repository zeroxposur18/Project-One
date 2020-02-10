//Variables
var userArray =[];
var gameArray =[];
var count;
let gameOver = 0;
var tempo;
var isMatch = false;

//Elements
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
    start();
};

function oneClick(){
    userArray.push(1);
    squareOne.style.backgroundColor = 'green';
    setTimeout(() =>{
        colorClear()
    },800)
};

function twoClick(){
    userArray.push(2);
    squareTwo.style.backgroundColor = 'red';   
    setTimeout(() =>{
        colorClear()
    },800) 
};

function threeClick(){
    userArray.push(3);
    squareThree.style.backgroundColor = 'yellow';
    setTimeout(() =>{
        colorClear()
    },800)
};

function fourClick(){
    userArray.push(4)
    squareFour.style.backgroundColor = 'blue';
    setTimeout(() =>{
        colorClear()
    },800)
};

//Functions
function start(){
    gameRandom()
    gameFlash()
    console.log(gameArray);
};

function gameRandom(){
    gameArray.push(Math.floor(Math.random()*4)+ 1);
};

function gameFlash(){
    gameArray.forEach((flash, i) =>{
        setTimeout(() => {
            if (flash === 1) one();
            if (flash === 2) two();
            if (flash === 3) three();
            if (flash === 4) four();
        }, (i + 1) * 1000);
    });}
function one(){
    squareOne.style.backgroundColor = 'green';
    setTimeout(() =>{
        colorClear()
    },800)
};
function two(){
    squareTwo.style.backgroundColor = 'red';   
    setTimeout(() =>{
        colorClear()
    },800) 
};
function three(){
    squareThree.style.backgroundColor = 'yellow';
    setTimeout(() =>{
        colorClear()
    },800)
};
function four(){
    squareFour.style.backgroundColor = 'blue';
    setTimeout(() =>{
        colorClear()
    },800)
};
function colorClear() {
    squareOne.style.backgroundColor = 'darkgreen';
    squareTwo.style.backgroundColor = 'darkred';
    squareThree.style.backgroundColor = 'darkgoldenrod';
    squareFour.style.backgroundColor = 'darkblue';
};
