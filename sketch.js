const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var h;

function preload() {
//preload the images here

}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
  engine = Engine.create;
  world = engine.world;
  Engine.run(engine);
  h = new Hero (300,400,80,80);



}

function draw() {
  background("lightgreen");
  h.display();

}

