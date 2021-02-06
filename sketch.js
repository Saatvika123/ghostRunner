var ghost, tower, climber, door, invisibleBlock
var ghostImage, towerImage, climberImage, doorImage
var doorGroup
var climberGroup
var invisibleGround
var gameState="play"
var sound

function preload(){
towerImage=loadImage("tower.png")
ghostImage=loadImage("ghost-standing.png")
doorImage=loadImage("door.png")
climberImage=loadImage("climber.png") 
sound=loadSound("spooky.wav")
}

function setup(){
createCanvas(600,600)
//sound.loop()
tower=createSprite(300,300)
tower.addImage("tower",towerImage)
tower.velocityY=1 
ghost=createSprite(200,200, 50,50)
ghost.addImage("ghost", ghostImage)
ghost.scale=0.5
doorGroup=new Group()
climberGroup=new Group()
invisibleGroup=new Group()
}

function draw(){
background("black")
if(gameState=="play"){
if(keyDown("space")){
ghost.velocityY=-9
}
if(keyDown("left_Arrow")){
  ghost.x=ghost.x-3
}
if(keyDown("right_Arrow")){
  ghost.x=ghost.x+3
}
ghost.velocityY=ghost.velocityY+.3  
if(tower.y>400){
tower.y=300
}
spawnDoors()
if(climberGroup.isTouching(ghost)){
  ghost.velocityY=0
  
}
  if(invisibleGroup.isTouching(ghost)||ghost.y>600){
    ghost.destroy()
    gameState="end"
  }
 drawSprites() 
}
  
if(gameState==="end"){
  fill("yellow")
  textSize(30)
  text("game over",230, 250)
  
  
  
}
  
  
  

  
  
}
function spawnDoors(){
if(frameCount%250===0){
door=createSprite(200,-50)
door.addImage("door",doorImage)
door.velocityY=1;
climber=createSprite(200,10)
climber.addImage("climber",climberImage)
climber.velocityY=1
  invisibleGround=createSprite(200,15)
  invisibleGround.width=climber.width
  invisibleGround.height=2
  invisibleGround.velocityY=1
  door.x=Math.round(random(100,400))
  climber.x=door.x
  invisibleGround.x=door.x
  ghost.depth=door.depth
  ghost.depth+=1 
  door.lifetime=700
  climber.lifetime=700
  invisibleGround.lifetime=700
  doorGroup.add(door)
  climberGroup.add(climber)
  invisibleGroup.add(invisibleGround)
  
}

  

  
}

