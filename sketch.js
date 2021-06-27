const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var bomb, slingshot;

var gameState = "onSling";

var score = 0;

function preload() {
    backgroundImg = loadImage("sprites/Background.jpg")
   
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);
    
    box1 = new Box(700,320,70,70);
    box2 = new Box(700,240,70,70);
    box3 = new Box(700,160,70,70);
    box4 = new Box(910,320,70,70);
    box5 = new Box(770,320,70,70);
    box6 = new Box(840,320,70,70);
    box7 = new Box(910,240,70,70);
    box8 = new Box(910,240,70,70);
  
    
    treasure = new Treasure(800,270,100,100);
    bomb = new Bomb(200,50);

    slingshot = new SlingShot(bomb.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg); 
    noStroke();
    textSize(30)
    fill("black")
    text("You have to make the boxes disappear to get your treasure.",300,50)

    Engine.update(engine);
    
    box1.display();
    box1.score();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
   
    ground.display();
    bomb.display();
    platform.display();
    treasure.display();
    slingshot.display();
    
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bomb.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32 && bomb.body.speed < 1){
       
       Matter.Body.setPosition(bomb.body,{x:200, y:50});
       slingshot.attach(bomb.body);
    }
}

