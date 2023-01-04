


//Crear espacio de nombre para Engine
const Engine = Matter.Engine;
//Crear espacio de nombre para World
const World = Matter.World;
//Crear espacio de nombre para Bodies
const Bodies = Matter.Bodies;
//Crear espacio de nombre para Body
const Body = Matter.Body;
const Constraint = Matter.Constraint

var engine, world
var boton;
//var ven;
var angle = 60;
var Fan1;

function setup() {
  createCanvas(400,400);
//crear engine
  //Agregar world a engine
  engine = Engine.create();

  world = engine.world;

  
   var ball_options = {
    restitution: 1,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };

   
  
  
  //crear un fondo
  ground = Bodies.rectangle(200,400,400,20, ground_options);
  //agregarlo a world
  World.add(world, ground);
   Fan1 = new Fan(60,300,100,20);
   Fan2 = new Fan(200,300,100,20);
   Fan3 = new Fan(130,350,70,10);


  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  ball2 = Bodies.circle(100,20,20,ball_options);
  World.add(world,ball2);
  
  
  
   console.log(ground);
  rectMode(CENTER);
  ellipseMode(RADIUS);

   boton = createImg ("push.png");
   boton.position(20,30);
   boton.size(50,50);
   boton.mouseClicked(vForce);

   pendulo = Constraint.create({
    bodyA: ball,
    pointB: {x:300, y:100},
    length: 100,
    stiffeness: 0.01
   })
   World.add(world, pendulo);

   pendulo2 = Constraint.create({
    bodyA: ball,
    bodyB: ball2,
    length: 100,
    stiffeness: 0.01
   })
   World.add(world, pendulo2);

}


function draw() 
{
  background(51);
  Engine.update(engine);

  push();
  strokeWeight(3);
  stroke("white");
  line(300,100,ball.position.x,ball.position.y);
  pop();
  push();
  strokeWeight(3);
  stroke("blue");
  line(ball.position.x,ball.position.y, ball2.position.x, ball2.position.y);
  pop();
  //escribir una función rectangle para mostrar el suelo.
 rect(ground.position.x, ground.position.y, 400, 20);
 ellipse(ball.position.x,ball.position.y,20);
 ellipse(ball2.position.x,ball2.position.y,20);
 
  Fan1.show();
  Fan2.show();
  Fan3.show();
  console.log(Fan1.body.angle);

  

  
  
}

function vForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}