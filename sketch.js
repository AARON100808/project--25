
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paperObject
var engine,world

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
    paperObject=new paper(300,100,100);
  
}


function draw() {
  rectMode(CENTER);
  background("darkblue");
 
  Engine.update(engine);

  groundObject.display();
  dustbinObj.display();
  paperObject.display();
}

function keyPressed(){
if (keyCode === UP_ARROW){


	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:1000,y:-600});
}


}

