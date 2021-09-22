const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    
    ball=new Ball(200,350,50,50)
    iron = new Iron(340,100,100,50);
    gold= new Gold(100,100,100,50)
    wood= new Wood(390,100,100,50)
    hammer= new Hammer(mouseX,mouseY,90,50)
    ground = new Ground(190,height,450,50)
}

function draw(){
    background("red");
    Engine.update(engine);
   
    
    wood.display();
    ball.display();
    iron.display();
    gold.display();
    
    
    ground.display();
    hammer.display();

   
}
