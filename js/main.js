//Variables
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
    console.log(gameArray);
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
function gameRandom(){
    gameArray.push(Math.floor(Math.random()*4)+ 1);
}