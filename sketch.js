var bullet, wall, thickness;
var speed, weight, deformation, damage;
var ftx, fty;

function setup() {
  createCanvas(1600, 400);
  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83)
  bullet = createSprite(50, 200, 50, 10);
  wall = createSprite(1200, 200, thickness, 200);
  bullet.velocityX = speed;
  wall.shapeColor = (80, 80, 80);
  bullet.shapeColor = (255, 255, 255);
  bullet.debug = false;
  wall.debug = false;
}

function draw() {
  background(0, 0, 0);
  /*if(bullet.x - wall.x < wall.width/2 + bullet.width/2
    && wall.x - bullet.x < wall.width/2 + bullet.width/2 && bullet.y - wall.y < wall.height/2 + bullet.height/2
    && wall.y - bullet.y < wall.height/2 + bullet.height/2){
    bullet.velocityX = 0;
    deformation = (0.5*speed*speed*weight)/22500;
  }
  if(bullet.x - wall.x < wall.width/2 + bullet.width/2
    && wall.x - bullet.x < wall.width/2 + bullet.width/2 && bullet.y - wall.y < wall.height/2 + bullet.height/2
    && wall.y - bullet.y < wall.height/2 + bullet.height/2){
    bullet.x = wall.x - thickness;
  }
  */
 if(bullet.isTouching(wall)){
   bullet.velocityX = 0;
   damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness)
  if(damage > 10){
    wall.shapeColor = "red"
  }
  if(damage <= 10){
    wall.shapeColor = "green"
  }
 }
  drawSprites();
}