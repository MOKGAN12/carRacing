var gameState = 0;
var playerCount;

var database;
var form;
var player;
var game;

function setup(){
    database = firebase.database();
    createCanvas(500,500);
    
}

function draw(){
    background("white");
   game = new Game();
   game.getState();
   game.start();
   
    drawSprites();
}

