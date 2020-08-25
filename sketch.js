var helicopterIMG, helicopterSprite, packageSprite,packageIMG
var packageBody,ground,drop1Sprite,drop2Sprite,drop3Sprite,drop1Body,drop2Body,drop3Body
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	drop1Sprite=createSprite(300,610,20,100);
	drop1Sprite.shapeColor=color(255,0,0)

	drop2Sprite=createSprite(410,650,200,20);
	drop2Sprite.shapeColor=color(255,0,0)

	drop3Sprite=createSprite(510,610,20,100);
	drop3Sprite.shapeColor=color(255,0,0)
	engine = Engine.create();
	world = engine.world;
	
	drop1Body = Bodies.rectangle(300,610,20,100,{isStatic:true});
	World.add(world, drop1Body);
	
	drop2Body = Bodies.rectangle(410,640,200,20,{isStatic:true});
	World.add(world,drop2Body);
	
	drop3Body = Bodies.rectangle(510,610,20,100,{isStatic:true});
	World.add(world,drop3Body);
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.2,friction:0, isStatic:true});
	World.add(world, packageBody);
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
     Matter.Body.setStatic(packageBody,false);
  }
}



