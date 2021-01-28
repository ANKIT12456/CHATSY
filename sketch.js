var icon,icon1;
var enter,enter1,bg;
var pass,gameState="enter",pass1;

function preload(){
  icon1=loadImage("icon.png");
  enter1=loadImage("enter.png");
  bg=loadImage("bg.png");
}

function setup(){
  createCanvas(windowWidth,windowHeight);

  icon=createSprite(width/2,height/4);
  icon.addImage(icon1);
  icon.scale=0.1;

  enter=createSprite(width/2,height/2);
  enter.addImage(enter1);

  pass=createSprite(width/2,height/2,250,50);
  pass.shapeColor="white";
  pass.visible=false;

  //enter.scale=0.1;,

}

function draw(){
  background(bg);
   //pass1="ENTER YOUR PASSWORD HERE";
   if(mousePressedOver(enter) && gameState=="enter"){
     gameState="over";
     enter.visible=false;
     //rectMode(CENTER);
     //rect(200,400,100,20); 
     pass.visible=true; 
     text("ENTER YOUR PASSWORD HERE",200,400);
      
   }
  drawSprites();
}