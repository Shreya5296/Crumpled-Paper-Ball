
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground,leftWall,rightWall;
var ball;

function setup() {
	createCanvas(windowWidth, windowHeight);
	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(90,100,20,ball_options);
	World.add(world,ball);

	ground=new Ground(width/2,670,width,10);

	leftWall = new Ground(width- 400,590,10,140);

    rightWall = new Ground(width - 150,590,10,140);

	rectMode(CENTER);
	ellipseMode(RADIUS);
	Engine.run(engine);
}


function draw() {
  background(0);

  ellipse(ball.position.x,ball.position.y,20,20);

  ground.display();
  leftWall.display();
  rightWall.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode=== UP_ARROW ){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:80,y:-80});
	}
}
