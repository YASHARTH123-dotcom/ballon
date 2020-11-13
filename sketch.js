var bow,bground,redBalloon,blueBalloon,greenBalloon, arrow,pinkBalloon;
var select_Ballon;
var score;
var redGroup;
var blueGroup;
var greenGroup;
var pinkGroup;
var arrowGroup;

function preload(){
 //load your images here 
 bowImage=loadImage("bow0.png");
  arrow_shoot=loadImage("arrow0.png");
  bgroundImage=loadImage("background0.png");
  redBalloonImage=loadImage("red_balloon0.png");
  greenBallonImage=loadImage("green_balloon0.png");
  blueBallonImage=loadImage("blue_balloon0.png");
  arrowImage=loadImage("arrow0.png");
  pinkBalloonImage=loadImage("pink_balloon0.png");
}
function setup() {
  createCanvas(600, 600);
  

  
 bground=createSprite(200,200,600,600);
  bground.addImage("bground",bgroundImage);
  bground.x=bground.width/2;
  bground.scale=3;
  bground.velocityX=-2;
 

  
 

  bow=createSprite(500,200,20,100);
  bow.addImage("shoot",bowImage);
  bow.scale=2;
score=0;
  redGroup=createGroup();
  blueGroup=createGroup();
  greenGroup=createGroup();
  pinkGroup=createGroup();
  arrowGroup=createGroup();
}

function draw() {
  
  if(bground.x<0){
  bground.x=bground.width/2;
  }
  
 if(keyDown("space")){
  shoot();  
 }
  bow.y=mouseY;
  
 
 select_Ballon=Math.round(random(1,4));
  console.log(select_Ballon)
 if(frameCount%60==0){
if(select_Ballon==1){
  redBallon()
}
 else if (select_Ballon==2){
   blueBallon()
 }
else if (select_Ballon==3){
   greenBallon()
 }
   else {
     pinkBallon()
   }
 }
  if(arrowGroup.isTouching(redGroup)){
    arrowGroup.destroyEach();
    redGroup.destroyEach();
    score=score+1;
  }
  if(arrowGroup.isTouching(blueGroup)){
    arrowGroup.destroyEach();
    blueGroup.destroyEach();
    score=score+2;
  }
  if(arrowGroup.isTouching(greenGroup)){
    arrowGroup.destroyEach();
    greenGroup.destroyEach();
    score=score+3;
  }
  if(arrowGroup.isTouching(pinkGroup)){
    arrowGroup.destroyEach();
   pinkGroup.destroyEach();
    score=score+4;
  }
  drawSprites();
  textSize(20);
  text("score:"+score,400,50);
}


function shoot(){
    
    var arrow=createSprite(500,200,80,20);
    arrow.addImage("Image",arrowImage);
    arrow.scale=0.5;
    arrow.velocityX=-6;
    arrow.y=bow.y;
    arrow.lifetime=80;
    arrowGroup.add(arrow);
   }
  
 function redBallon(){
 var redBalloon=createSprite(0,Math.round(random(50,500)),10,10);
    redBalloon.addImage("ballon",redBalloonImage);
    redBalloon.scale=0.1;
    redBalloon.velocityX=3;
    redBalloon.lifetime=200
    redGroup.add(redBalloon);
 }
  
function blueBallon(){
 var blueBalloon=createSprite(0,Math.round(random(50,500)),10,10);
    blueBalloon.addImage("ballon",blueBallonImage);
    blueBalloon.scale=0.1;
    blueBalloon.velocityX=3;
    blueBalloon.lifetime=200
    blueGroup.add(blueBalloon);
 } 
  
function greenBallon(){
var greenBalloon=createSprite(0,Math.round(random(50,500)),10,10);
    greenBalloon.addImage("ballon",greenBallonImage);
    greenBalloon.scale=0.1;
   greenBalloon.velocityX=3;
   greenBalloon.lifetime=200
    greenGroup.add(greenBalloon);
 }
function pinkBallon(){
 var pinkBalloon=createSprite(0,Math.round(random(50,500)),10,10);
    pinkBalloon.addImage("ballon",pinkBalloonImage);
    pinkBalloon.scale=1.2;
   pinkBalloon.velocityX=3;
   pinkBalloon.lifetime=200
    pinkGroup.add(pinkBalloon);
 }