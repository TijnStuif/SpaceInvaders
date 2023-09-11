var playerShip;

function setup() {
  createCanvas(1200, 600);
  playerShip = new Player();;
  playerBullet = new pBullet();;
}

function Player() {
  this.x = width/2 - 30;
  this.y = height-30;
  this.width = 60;
  this.height = 20;
}

function pBullet() {
  this.x = playerShip.x + 125;
  this.y = playerShip.y - 10;
  this.width = 10;
  this.height = 20;
  this.pBulletFired = false;
}

Player.spawn = function() {
  fill(0,255,0);
  noStroke();
  rect(playerShip.x, playerShip.y, playerShip.width, playerShip.height);
  rect(playerShip.x + 20, playerShip.y-10,playerShip.width - 40, playerShip.height - 10);
}

pBullet.spawn = function() {
  fill(127);
  stroke(150);
  rect(playerBullet.x, playerBullet.y, playerBullet.width, playerBullet.height);
  console.log(playerBullet.x, playerBullet.y, playerBullet.width, playerBullet.height)
}

function keyPressed() {
  if (keyCode === 32) {
    pBullet.pBulletFired = true;
  }
}

function draw() {
  background(0);
  Player.spawn();
  if (keyIsDown(65)  && playerShip.x > 0 || keyIsDown(LEFT_ARROW) && playerShip.x > 0) {
    playerShip.x = playerShip.x - 10
  }
  if (keyIsDown(68) && playerShip.x < 1140 || keyIsDown(RIGHT_ARROW) && playerShip.x < 1140) {
    playerShip.x = playerShip.x + 10
  }
  if (pBullet.pBulletFired == true) {
      pBullet.spawn();
      playerBullet.y = playerBullet.y - 5;
  }
  if (playerBullet.y < 0) {
    pBullet.pBulletFired == false;
  }
}