var sea;
var seaImg;
var ship3;
var ship3Img;

function preload(){
seaImg=loadImage("sea.png");
ship3Img=loadImage("ship-3.png");
}

function setup(){
  createCanvas(400,600);
  //moving background
  sea=createSrite(400,200);
  sea.addImage(sea.png);
  sea.velocityX=50 

  //creating ship running
  ship3=createSprite(70,580,20,20);
  ship3.addAnimation("shipMoving","ship3Img");
  ship3.addAnimation("shipMoving","ship3Img");
  ship3.scale=0.08;
}

function draw() {
  background("0");
 sea.velocityX=-3;
 if (sea.x<0) {
   sea.x=sea.width/8;
 }
}