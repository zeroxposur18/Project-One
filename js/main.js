//Variables
var board = [1,2,3,4]
var userArray =[];
var gameArray =[];
var gameCount;
let gameOver = 0;
var isMatch = false;

//Event listener set up
document.querySelector('.board').addEventListener('click', onClick);
document.querySelector('button').addEventListener('click', btnClick)
//onclick function
function btnClick(e){
    console.log("Shit button works too");
}
function onClick(e){
    console.log("shit it works");
};