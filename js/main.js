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
    console.log("Shit button works too");
    start();
};

function oneClick(){
    console.log("Shit button one works");
    userArray.push(1);
};

function twoClick(){
    console.log("Shit button two works");
    userArray.push(2);
};

function threeClick(){
    console.log("Shit button three works");
    userArray.push(3);
};

function fourClick(){
    console.log("Shit button four works");
    userArray.push(4)
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
            console.log(flash);
            if (flash === 1) one();
            if (flash === 2) two();
            if (flash === 3) three();
            if (flash === 4) four();
        }, (i + 1) * 1000);
    });}
function one(){
    console.log("ONE WORKS LEGGO");
    squareOne.style.backgroundColor = 'green';
    setTimeout(() =>{
        colorClear()
    },800)
};
function two(){
    console.log("TWO WORKS FUCK YEAH");
    squareTwo.style.backgroundColor = 'red';   
    setTimeout(() =>{
        colorClear()
    },800) 
};
function three(){
    console.log("THREE MUTHAFUKIN WORKS")
    squareThree.style.backgroundColor = 'yellow';
    setTimeout(() =>{
        colorClear()
    },800)
};
function four(){
    console.log("wooo it's functioning");
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
