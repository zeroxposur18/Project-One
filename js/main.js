//Variables
var userArray = [];
var gameArray =[];
var count =0;
var playerTurn = false;
var tempo;
var matchArray;
var arrayPass;
var wait;
var isMatch = false;
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
        start();
};
function oneClick(){
    userArray.push(1);
    squareOne.style.backgroundColor = 'lightgreen';
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
    gameRandom();
    gameFlash();
    console.log(gameArray);
};
function gameRandom(){
    
    gameArray.push(Math.floor(Math.random()*4)+ 1);
    count++;
};
function gameFlash(){
     gameArray.forEach((flash, i) => {
        setTimeout(() => {
            if (flash === 1)
                one();
            if (flash === 2)
                two();
            if (flash === 3)
                three();
            if (flash === 4)
                four();

        }, (i + 1) * 1000);
    });
;setTimeout(() => {
    userTurn();
}, (count + 1)*1000);
}
function one(){
    squareOne.style.backgroundColor = 'lightgreen';
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
function userTurn() {
playerTurn = true;
if (playerTurn = true) {setTimeout(() =>{
    if (userArray.length === gameArray.length){
        console.log("");
        clearTimeout();
        userCheck();
    } else gameOver();
},3000)}
};
function userCheck() {
    playerTurn = false;
    arrayCheck();
    if (matchArray === true){
        console.log("CLEAR");
        userArray = [];
        startAgain();
    }
    else gameOver();
};
function arrayCheck(){
    for (var i = 0; i < count; i++) {
        if (userArray[i] === gameArray[i]){
        matchArray = true;}
        else matchArray = false;
    }}

function gameOver(){
    console.log("YOU DONE FUCK UP BITCH");
    userArray =[];
    gameArray =[];
    count = 0;
    playerTurn = false;
};
function startAgain(){
    gameRandom();
    gameFlash();
}