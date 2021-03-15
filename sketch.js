
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage,backgroundImage,background1;
var FoodGroup, obstacleGroup
var score = 0
var block
var fruitnum = 0;
var Gamestate = PLAY;
var END = 0;
var PLAY = 1;
var gameState = PLAY;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  backgroundImage = loadImage("jungle.jpg");

}



function setup() {
  FoodGroup = new Group();
obstacleGroup = new Group();
  createCanvas(600,500);
  monkey = createSprite(0,400,20,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.2;
  block = createSprite(0,490,9920,10);
   background1 = createSprite(0,0,600,600);
    background1.addImage(backgroundImage);
    background1.scale = 2.1
      background1.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
 monkey.scale = 0.1
}


function draw() {
block.visible  = false
  background(255);
   if(gameState === PLAY){ 

  score = score + Math.round(getFrameRate()/60);
 

  monkey.collide(block);
   
    if(keyDown("space")&&monkey.y >= 235) {
      monkey.velocityY = -11; 
    }
  
    monkey.velocityY = monkey.velocityY + 0.8
   
   banna();
         background1.velocityX = -3 

        if (background1.x < 0){
          background1.x = background1.width/2;
        }
   
     

drawSprites();
   rocks();
   if(monkey.isTouching(FoodGroup)){
   fruitnum = fruitnum+1;
     monkey.scale = monkey.scale+0.03;
     FoodGroup.destroyEach();
     
 }
  if(monkey.isTouching(obstacleGroup)){
obstacleGroup.destroyEach();
    monkey.scale =  monkey.scale - 0.02
 }}
   fill("white");
  text("SURVIVAL TIME: "+score, 470, 20);
  
  text("SCORE: "+fruitnum, 400, 20);

}
function rocks(){
  
  if(frameCount%300==0){
    obstacle = createSprite(600,450,0,0)
 obstacle.addImage(obstacleImage);
    obstacle.velocityX=-6
    obstacle.lifetime=200;
    obstacle.scale=0.2

        obstacle.setCollider("circle",0,0,50)
     obstacleGroup.add(obstacle);
  }
}
function banna(){
  if(frameCount%80==0){
   banana = createSprite(600,Math.round(random(0,400),10,10))
  banana.addImage(bananaImage);
  banana.scale= 0.2
    banana.velocityX=-6
    banana.lifetime=200
   FoodGroup.add(banana);
  }
}







