var bullet, wall;
var bullet_speed, weight;
var damge;
var thickness;



function setup() {

  createCanvas(1600, 400);


  bullet_speed = random(231, 331);
  weight = random(30, 52);
  thickness = random(22, 83)

  bullet = createSprite(50, 200, 50, 50);
  wall = createSprite(1500, 200, thickness, height);

  bullet.velocityX = bullet_speed;
}

function draw() {

  background(0, 0, 0);

  if (bullet.collide(wall)) {
    damge = (bullet_speed * 2) / thickness;
  }

  if (damge <= 10) {
    bullet.shapeColor = "green";
    textSize(20);
    textFont("Georgia");
    textStyle(BOLD);
    text("This bullet collision will not damage or pucnture this wall", 300, 300);
  }
  else if (damge > 10) {
    bullet.shapeColor = "red";
    textSize(20);
    textFont("Georgia");
    textStyle(BOLD);
    text("This bullet collision will damage or pucntue this wall", 300, 300);
  }



  textSize(18);
  textFont("Georgia");
  textStyle(BOLD);


  text("Military bullet Collision simulator", 300, 30);

  text("Damage: " + Math.round(damge), 700, 30);

  text("bullet_speed: " + Math.round(bullet_speed), 1100, 30);

  text("Weight: " + Math.round(weight), 1300, 30);



  drawSprites();


}


