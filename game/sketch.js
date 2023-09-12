const widthPlayerShip = 60
const heightPlayerShip = 20
var playerShipX = 570
const playerShipY = 570

function setup () {
  createCanvas(1200,600);
}

function draw () {
  background(0);
  fill(0,255,0);
  noStroke();
  rect(playerShipX, playerShipY, widthPlayerShip, heightPlayerShip)
  if (keyIsDown(LEFT_ARROW) && playerShipX > 0){
    playerShipX = playerShipX - 10;
  }
  if (keyIsDown(RIGHT_ARROW) && playerShipX < 1140) {
    playerShipX = playerShipX + 10
  }
}