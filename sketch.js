var car,wall,car_img,wall_img;
var speed,weight,deformationc;
var gameState;
var reTest,reTest_img,test;

function preload(){
  car_img = loadImage("car.png");
  wall_img = loadImage("wall.jpg");
  test_img = loadImage("icon.png");
}
function setup() {
  createCanvas(1400,400);

  gameState = "testing";

  speed = random(55,90);
  weight = random(400,1500);

  deformation = (speed*speed*weight)/22500

  car = createSprite(200, 200, 60, 40);
  car.addImage("car1",car_img);
  car.velocityX = 10;
  car.setCollider("rectangle",0,0,400,200);
  //car.debug = true;
  car.scale = 0.5;

  wall = createSprite(1390,200,50,400);
  wall.addImage("wall1",wall_img);
  //wall.debug = true;
  wall.scale = 0.5;

  test = createSprite(700,300,50,50);
  test.scale = 0.5;
  test.addImage("test1",test_img);
}

function draw() {
  background(190,190,190);
  test.visible = false;
    if(gameState === "testing"){
    if(car.isTouching(wall)){
      car.velocityX = 0;
      Deformation();
      gameState = "retest";
    }
    }else if(gameState === "retest"){
      test.visible = true;
      if(mousePressedOver(test)){
        reset();
      }
    }
  


  drawSprites();
}

function reset(){
  car.x = 200;
  car.y = 200;
  car.velocityX = 10;
 gameState = "testing";
 test.visible = false;

}
function Deformation (){
  var signal = createSprite(750,50,60,200);
  signal.shapeColor = "white";
  

  if(deformation>180){
    signal.shapeColor = "red";
  
  }

  if(deformation<180 && deformation > 100){
    signal.shapeColor = "yellow";
   
  }

  if(deformation<100){
    signal.shapeColor = "green";
    
  }
}