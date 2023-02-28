
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var ground;
var boyrunning;
var boy;
var building;
var bg_img;
var fireAnimation, fire,fire1,fire2
var balloon, balloonImg;
var platform, platform2, platform3,platfomr4,platform5,platform6,platform7;
var carImg, car


function preload(){

  boyrunning=loadImage("boyrunning1.png");
bg_img = loadImage("bg_img.png");
fireAnimation = loadAnimation("fire1.png","fire2.png");
balloonImg = loadImage("balloon.png");
carImg = loadImage("racecar.png");

  
}


function setup() {
  createCanvas(windowWidth,windowHeight);




  engine = Engine.create();
  world = engine.world;


  ground = createSprite(width/2, 1090,width,10)



building = createSprite(1000,600,1000,00);
building.scale = 0.5
building.addImage(bg_img);



fire = createSprite(1000,910,600,90);
fire.addAnimation("fire", fireAnimation);
fire.scale = 2;

fire1 = createSprite(1150,910,600,90);
fire1.addAnimation("fire", fireAnimation);
fire1.scale = 2;

fire2 = createSprite(850,910,600,90);
fire2.addAnimation("fire", fireAnimation);
fire2.scale = 2;


balloon = createImg("balloon.png")
balloon.position(500,900);
balloon.size(100,100)
//balloon.mouseClicked();
balloon.scale = 0.1


car = Matter.Bodies.rectangle(300,980,100,100)


platform = new Platform(500,750,100,10);
platform2 = new Platform(540,600,100,10);
platform3 = new Platform(640,450,100,10);  
platform4 = new Platform(740,300,100,10);  
platform5 = new Platform(1340,400,100,10);  
platform6 = new Platform(1040,170,100,10);  
  rectMode(CENTER);
}


function draw()
{

  background("white");
  Engine.update(engine);
platform.display();
platform2.display();
platform3.display();
platform4.display();
platform5.display();
platform6.display();

  
imageMode(CENTER);

if(car!=null){
  image(carImg,car.position.x,car.position.y,250,250);
}

//car.collide(ground)


if (keyDown(LEFT_ARROW)){
  car.x = car.x -5
}

if (keyDown(RIGHT_ARROW)){
car.x = car.x +5
}

if (keyDown("space")   ){
  balloonBlow();

}

/*if(car.collide(fire) || car.collide(fire1)|| car.collide(fire2)){
  car.remove(fire); 
}

 /*car.collide(fire)
 car.collide(fire1)
 car.collide(fire2);
 car.collide(building);
*/
//car.velocityY = car.velocityY +0.8

  drawSprites();
}

function balloonBlow(){
  Matter.Body.setVelocity(car,{x:0,y:90});
}