//namespacing done to make code more easily readable! 
const WORLD = Matter.World;
const ENGINE = Matter.Engine;
const BODIES = Matter.Bodies;

//objects created for the game
var engine, world, ground, ball, box1, box2;

function setup() {
  createCanvas(1200,400);
  engine = ENGINE.create();
  world = engine.world; //namespacing


  ground = new Ground(600,height,1200,20);

  box1 = new Box(700,320,70,70);
  box2 = new Box(920,320,70,70);
  pig1 = new Pig(810 ,350);
  log1 = new Log(810,260,300,PI/2);

  

  box3 = new Box(700,240,70,70);
  box4 = new Box(920,240,70,70);
  pig2 = new Pig(810 ,220);
  log2 = new Log(810,180,300,PI/2);


  bird = new Bird(50,50);


  console.log("box1");
  console.log(box1);
  console.log("ground");
  console.log(ground);
  
}

function draw() {

  //updating the engine every millisecond
  ENGINE.update(engine);
  background("black");  
 
  ground.display();
  box1.display();
  box2.display();

  pig1.display();

  log1.display();

  box3.display();
  box4.display();

  pig2.display();

  log2.display();

  bird.display();


}