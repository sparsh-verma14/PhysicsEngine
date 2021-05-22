const Engine=Matter.Engine
const World= Matter.World
const Bodies=Matter.Bodies

function setup() {
  createCanvas(800,400);
  myEngine=Engine.create()
  myWorld=myEngine.world
  var Options={
    isStatic:true
  }
  ground=Bodies.rectangle(400,370,800,20,Options)
  World.add(myWorld,ground)
  var balloptions={
    restitution:1
  }
  ball=Bodies.circle(200,200,10,balloptions )
  World.add(myWorld,ball)
}


function draw() {
  background(0);  
  Engine.update(myEngine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,20)
  drawSprites();
  ellipseMode(CENTER)
  ellipse(ball.position.x,ball.position.y,20,20)
}