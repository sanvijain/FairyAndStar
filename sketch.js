var backgroundImage;
var star,starImage;
var fairy,fairyImage;

function preload()
{
   backgroundImage=loadImage("images/starnight.png");
   starImage=loadImage("images/star.png");
  //fairyImage=loadAnimation("images/fairy.png,fairy1.png,fairy2.png");
  fairyImage=loadImage("images/fairy1.png");
}

function setup() {
  createCanvas(800, 680);
  
  

  star=createSprite(650,40,50,50);
  star.addImage(starImage);
  star.scale=0.2;

  fairy=createSprite(100,500,50,50);
  fairy.addImage(fairyImage);
  fairy.scale=0.2;
}


function draw() {
  background(backgroundImage);

if(keyDown(RIGHT_ARROW)){
  fairy.x = fairy.x+4;
}
if(keyDown(LEFT_ARROW)){
  fairy.x = fairy.x-4;
}

if(fairy.x > 520){
  star.y=480;
  fairy.velocityX = 0;
}

  drawSprites();
}
