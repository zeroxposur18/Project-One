//Variables
var board = [1,2,3,4]
var userArray =[];
var gameArray =[];
var gameCount;
var userCount;
let gameOver = 0;
var tempo;
var isMatch = false;

//Elements
const squareOne = document.querySelector("#sq1");
const squareTwo = document.querySelector("#sq2");
const squareThree = document.querySelector("#sq3");
const squareFour = document.querySelector("#sq4");
//Event listener set up
document.querySelector('.board').addEventListener('click', onClick);
document.querySelector('button').addEventListener('click', btnClick);
squareOne.addEventListener('click', oneClick);
squareTwo.addEventListener('click', twoClick);
squareThree.addEventListener('click', threeClick);
squareFour.addEventListener('click', fourClick);
//onclick function
function btnClick(e){
    console.log("Shit button works too");
    start();
}
function onClick(e){
    console.log("shit it works");
};

//Functions
function start(){
    gameRandom()
};
function gameRandom(){
    gameArray.push(Math.floor(Math.random()*4)+ 1);
}
function oneClick(){
    console.log("Shit button one works")
};
function twoClick(){
    console.log("Shit button two works")
};
function threeClick(){
    console.log("Shit button three works")
};
function fourClick(){
    console.log("Shit button four works")
};