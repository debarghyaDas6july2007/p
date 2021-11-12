var sky, skying
var run, runner
var rock, rocking

function preload(){
skying=loadImage("sky.png.jpg")
runner=loadAnimation("k.png","k2.png","k3.png","k4.png","k5.png","k6.png")
rocking.loadImage("k7.png")
}

function setup() {
 createCanvas(600,600)
 sky=createSprite(300,300)
 sky.scale=0.6
 sky.addImage("sky.png.jpg",skying)
 sky.velocityX=-6
 sky.x=width/3

 run=createSprite(100,520,50,50)
 run.addAnimation("k.png","k2.png","k3.png","k4.png","k5.png","k6.png",runner)

 rock=createSprite(520,520,60,60)
 rock.addImage("k7.png",rocking)
 rock.scale=0.4


}

function draw() {
background("white")

if(sky.x<20){
    sky.x=500
}

if(run.x>560){
  run.x=200

}
 drawSprites()

}