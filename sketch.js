const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground0, platform1, platform2;
var stone, slingshot;

function setup(){
    var canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;

    ground0 = new Ground(0,589,600,13);
    platform1 = new Ground(100,400,190,13);
    platform2 = new Ground(300,350,190,13);
    stone = new Stone(100,100);
    
    

    block1 = new Block(100,370,20,30);
    block2 = new Block(120,370,20,30);
    block3 = new Block(140,370,20,30);
    block4 = new Block(160,370,20,30);
    block5 = new Block(180,370,20,30);
    blocki2 = new Block(120,340,20,30);
    blocki3 = new Block(140,340,20,30);
    blocki4 = new Block(160,340,20,30);
    blockii3 = new Block(140,310,20,30);

    block6 = new Block(300,320,20,30);
    block7 = new Block(320,320,20,30);
    block8 = new Block(340,320,20,30);
    block9 = new Block(360,320,20,30);
    block10 = new Block(380,320,20,30);
    blocki7 = new Block(320,290,20,30);
    blocki8 = new Block(340,290,20,30);
    blocki9 = new Block(360,290,20,30);
    blockii8 = new Block(340,260,20,30);
    slingshot = new SlingShot(stone.body,{x:120,y:100});


}

function draw(){
    background(0);
    Engine.update(engine);
 
    reset();

    ground0.display();
    platform1.display();
    platform2.display();
    slingshot.display();
    stone.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    blocki2.display();
    blocki3.display();
    blocki4.display();
    blockii3.display();
    
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    blocki7.display();
    blocki8.display();
    blocki9.display();
    blockii8.display();
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function reset(){
    if(keyCode === 32){
        slingshot.attach(stone.body);
        

    }
}


