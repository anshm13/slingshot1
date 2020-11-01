const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  
  platform1 = new Platform(100,200,1,1);
 
 
  ball = new Ball(100,250,25);
 rope = new Rope1(ball.body, platform1.body);
// slingshot = new SlingShot(ball.body,{x:200, y:50});
 
  platform2 = new Platform(350,350,200,20);
  block1 = new Block(275,325,50,50);
  block2 = new Block(325,325,50,50);
  block3 = new Block(375,325,50,50);
  block4 = new Block(425,325,50,50);
  block5 = new Block(300,275,50,50);
  block6 = new Block(350,275,50,50);
  block7 = new Block(400,275,50,50);
  block8 = new Block(325,225,50,50);
  block9 = new Block(375,225,50,50);
  block10 = new Block(350,175,50,50);

  platform3 = new Platform(700,200,200,20);
  block11 = new Block(625,175,50,50);
  block12 = new Block(675,175,50,50);
  block13 = new Block(725,175,50,50);
  block14 = new Block(775,175,50,50);
  block15 = new Block(650,125,50,50);
  block16 = new Block(700,125,50,50);
  block17 = new Block(750,125,50,50);
  block18 = new Block(675,75,50,50);
  block19 = new Block(725,75,50,50);
  block20 = new Block(700,25,50,50);

  Engine.run(engine); 
}

function draw() {
  background(0,255,400);  
  rectMode(CENTER);
  

  platform1.display();
  //polygon.display();
  ball.display();
 rope.display();
 //slingshot.display();
  
  platform2.display();
  block1.display("red");
  block2.display("orange");
  block3.display("red");
  block4.display("orange");
  block5.display("blue");
  block6.display("green");
  block7.display("blue");
  block8.display("maroon");
  block9.display("pink");
  block10.display("black");

  platform3.display();
  block11.display("orange");
  block12.display("red");
  block13.display("orange");
  block14.display("red");
  block15.display("green");
  block16.display("blue");
  block17.display("green");
  block18.display("pink");
  block19.display("maroon");
  block20.display("yellow");
  console.log(ball.body);
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  
  //slingshot.fly();
 // rope.fly();
}