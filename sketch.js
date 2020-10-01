var rect1,rect2,rect3,rect4,rect5,rect6;



function setup() {
  createCanvas(800,400);
  rect1 = createSprite(100,200,10,200);
  rect2 = createSprite(200,200,10,200);
  rect1.shapeColor = "red";
  rect2.shapeColor = "green";
  rect3 = createSprite(300,200,10,200);
  rect3.velocityX = 2;
  rect4 = createSprite(400,200,10,200);
  rect3.shapeColor = "red";
  rect4.shapeColor = "green";
  rect5 = createSprite(500,200,10,200);
  rect6 = createSprite(600,200,10,200);
  rect6.velocityX = -2;
  rect5.shapeColor = "red";
  rect6.shapeColor = "green";
}



function draw() {
  background("blue");
  
 if(isTouching(rect1,rect6)) {

    rect1.shapeColor = "purple";
    rect6.shapeColor = "yellow";


  } 
  else {

rect1.shapeColor = "red";
rect6.shapeColor = "green";

  }

  bounceOff(rect3,rect6);

  
  rect1.y = mouseY;
  rect1.x = mouseX;

  drawSprites();
}