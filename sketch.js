  
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var ground ;
var box1, box2, box3 ;
var ball;

function setup() {
  createCanvas(1200,700); 
   engine=Engine.create();
   world=engine.world;
   ground = new Ground(width/2, height, width,20);
   box1 = new Box(800,300,100,150);
   box2 = new Box(800,100,100,150);
   box3 = new Box(800,500,100,150);
   ball = new Ball(200,100);
   slingshot = new SlingShot(ball.body,{x:550, y:50}); 
}

function preload() {
 
 
}

function draw() {
  background(0);  
  Engine.update(engine)
  
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  ball.display();
  slingshot.display();
 // drawSprites();
}

function mouseDragged(){
  
      Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});

}





