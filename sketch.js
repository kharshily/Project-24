const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(700, 200);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(30,150,20);
	ground = new Ground(350,190,800,10)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  fill("red");
  rect(560,160,10,60);
  rect(590,180,70,10);
  rect(620,160,10,60);

  paper.display();
  ground.display();
  keyPressed();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	Matter.body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}



