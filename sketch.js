const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var object,block,bgImg,bg;
var blockImg,objImg,boundary1,boundary2,boundary3,boundary4;
var object2,blockGroup,arrow,arrowImg,bow;
var score=0;
var bow,bowImage,launcherObj,block1,block2,block3;

var gameState="onBow";



function preload(){
bgImg=loadImage("images/img1.png");
blockImg=loadImage("images/img2.png");
bowImage = loadImage("images/img7.png");

}

function setup(){
    
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

    arrow=new Arrow(200,300);
    
  

    bow = createSprite(200,300,20,20)
    bow.addImage(bowImage);
    bow.scale=0.15
    launcherObj=new Launcher(arrow.body,{x:175,y:175});
    blockGroup=new Group();
  
}
function draw() {
  background(bgImg);
  text("Score:  "+score,100,100);
  Engine.update(engine);
  //keyPressed();
  //objects();
 
  arrow.display();
 launcherObj.display();
 if(collide(arrow,block)==true){
   console.log("1");
 }
 drawSprites();
}

//function keyPressed(){
  //if(keyCode===32){
    //Matter.Body.setPosition(launcherObj.body,{x:200,y:300})
    //launcherObj.attach(launcherObj.body);
  //}
//}

function mouseDragged(){
  if(gameState!=="launched"){
    Matter.Body.setPosition(arrow.body,{x:mouseX,y:mouseY});
  }
}

  function mouseReleased(){
    gameState="launched"
    launcherObj.fly();
  }

function objects(){
if(frameCount%80===0){
  block=createSprite(800,20,25,25);
  block.addImage(blockImg);
  block.scale=0.15
  block.velocityY=2;
  blockGroup.add(block);

}


}

function collide(body,sprite){
 
    var d= dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y)
  if(d<=100){
    //World.remove(engine.world,arrow);
    return true
  }
  else{
    return false;
  }
  
  
}