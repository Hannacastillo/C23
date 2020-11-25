const World=Matter.World;
const Engine= Matter.Engine;
const Bodies=Matter.Bodies;

var myengine,myworld;
var box1, box2
var ground

function setup() {
  createCanvas(800,400);
  myengine=Engine.create();
  myworld=myengine.world;

 box1=new Box(100,200,50,50);
 box2=new Box(130,30,50,60)

ground=new Ground(400,390,800,20)


}

function draw() {
  background("black");  
  Engine.update(myengine);
 
  box1.display()
box2.display()

ground.display()

}