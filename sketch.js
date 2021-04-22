
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var ground, hammer, stone, rubber, iron;
var sand1, sand2, sand3, sand4, sand5, sand6, sand7, sand8, sand9, sand10;

function setup() {
	var canvas= createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 ground = new Ground(600, height, 1200,20);

	 hammer = new Hammer(10,100);
	 stone = new Stone(700,320,100,100);
	 rubber = new Rubber(900,400,70);
	 sand1=new Sand(200,320,10);
	 sand2=new Sand(202,320,10);
	 sand3=new Sand(204,320,10);
	 sand4=new Sand(206,320,10);
	 sand5=new Sand(208,320,10);
	 sand6=new Sand(210,320,10);
	 sand6=new Sand(212,320,10);
	 sand7=new Sand(214,320,10);
	 sand8=new Sand(216,320,10);
	 sand9=new Sand(218,320,10);
	 sand10=new Sand(220,320,10);
	 iron = new Iron(400,320, 50, 80);

	Engine.run(engine);
  
}

function draw() {
  background("lightBlue");
  Engine.update(engine);
  
  ground.display();
  hammer.display();
  stone.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();
  iron.display();
  
 // drawSprites();
 
}