var fixedRect, movingRect;
var gameObject1, gameObject2;
var canvas;

function setup() {
  canvas = createCanvas(800,400);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "blue";
  gameObject1 = createSprite(200, 100, 50, 50);
  gameObject1.shapeColor = "red";
  gameObject2 = createSprite(300, 100, 50, 50);
  gameObject2.shapeColor = "red";
}

function draw() {
  background(255,255,255);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(movingRect, gameObject1)) {
    movingRect.shapeColor = "orange";
    gameObject1.shapeColor = "orange";
  }
  else {
    movingRect.shapeColor = "blue";
    gameObject1.shapeColor = "blue";
  }
  drawSprites();

}
function isTouching (object1, object2) {
  if (object1.x - object2.x < object2.width/2 + object1.width/2 &&
      object2.x - object1.x < object2.width/2 + object1.width/2 &&
      object1.y - object2.y < object2.height/2 + object1.height/2 &&
      object2.y - object1.y < object2.height/2 + object1.height/2 ) {
        return true;
      }
      else {
        return false;
      }
}

