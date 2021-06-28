const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var backgroundImage;
var star,starImage,starBody;
var fairy,fairyImage;
var fairyVoice;

function preload()
{
   backgroundImage=loadImage("images/starnight.png");
   starImage = loadImage("images/star.png");
  //fairyImage=loadAnimation("images/fairy.png,fairy1.png,fairy2.png");
  fairyImage = loadAnimation("images/fairy1.png","images/fairy2.png");
  fairyVoice = loadSound("sound/JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImage);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImage);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.rectangle(650 , 30 , 10 ,10, {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(backgroundImage);

  star.x= starBody.position.x 
  
 star.y= starBody.position.y 

  console.log(star.y);

  if(star.y > 470 && starBody.position.y > 470 ){
  	Matter.Body.setStatic(starBody,true);
  }

  drawSprites();

}

function keyPressed() {

 if(keyCode === RIGHT_ARROW){
     fairy.x = fairy.x + 20;
	}
	
 if(keyCode === LEFT_ARROW){
    fairy.x = fairy.x - 20;
	}

 if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
}
