var playerShip;

function setup() {
  createCanvas(1200, 600);
  playerShip = new Player();;
}

function Player() {
  this.x = 1200/2 - 30;
  this.y = 600-30;
  this.color = "green";
  this.width = 60;
  this.height = 20;
}

this.spawn = function() {
  fill(0,255,0);
  noStroke();
  rect(playerShip.x, playerShip.y, playerShip.width, playerShip.height);
  console.log(playerShip.x, playerShip.y, playerShip.width, playerShip.height)
}

function draw() {
  background(0);
  this.spawn();
  if (keyIsDown(LEFT_ARROW)) {
    playerShip.x = playerShip.x - 8
  }
  if (keyIsDown(RIGHT_ARROW)) {
    playerShip.x = playerShip.x + 8
  }
}