var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
   }

   for (var j = 50; j <=width; j=j+50)
{
 
  plinkos.push(new plinko(j,85));
}
  
for (var j = 70;j <=width-10; j=j+50)
{
 
  plinkos.push(new plinko(j,175))
}
   
for (var j = 45;j <=width-10; j=j+40)
{
 
  plinkos.push(new plinko(j,275))
}
    
for (var j = 50;j <=width-10; j=j+50)
{
  
  plinkos.push(new plinko(j,375))
}
   
    

  
}
 


function draw() {
  background("green");
  textSize(20)
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-200, width/2+200),10,10));
  }
 
  Engine.update(engine);
  
  ground.display();
  
  for (var i = 0; i < plinkos.length; i++) {
    
    plinkos[i].display();
    
  }  

for (var j = 0; j < particles.length; j++) {
 
   particles[j].display();
 }
 for (var k = 0; k < divisions.length; k++) {
   
   divisions[k].display();
 }

 
  
}