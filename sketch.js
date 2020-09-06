const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, block1, block2, block3, block4, block5, block6, block7;
var slingShot, stand1, stand2, poly, polyImg;

function preload() {
  polygonImg = loadImage("polygon.png");
}

function setup() {
  createCanvas(900,400);

  ground = new Ground(880,20,900,20);
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);

  //polygon holder with slings
  poly = Bodies.circle(50,200,20);
  World.add(world, poly);
  slingShot = new Slingshot(this.poly,{x:100,y:200});

  World.add(world, ground);

}

function draw() {
  background(211, 211, 211);

  ground.display();
  stand1.display();
  stand2.display();

  strokeWeight(2);
  stroke(15);
  fill("skyblue");

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  imageMode(CENTER)
  image(polygonImg, poly.position.x, poly.position.y,40,40);

  drawSprites();
}

function mouseDragged() {
  Matter.Body.setPosition(this.poly,{x:mouseX,y:mouseY});
}

function mouseReleased() {
  slingShot.fly();
}