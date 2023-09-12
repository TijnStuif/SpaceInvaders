const widthPlayerShip = 60
const heightPlayerShip = 20
var playerShipX = 570
const playerShipY = 570
function preload() {
  spaceImg = loadImage('images_game/space.jpg')
  //spaceshipImg = loadImage('images_game/player_ship.png')
}

function setup () {
  createCanvas(1200,600);
}

function draw () {
  image(spaceImg, 0, 0);
  //image(spaceshipImg, playerShipX, playerShipY);
  fill(0,255,0);
  noStroke();
  rect(playerShipX, playerShipY, widthPlayerShip, heightPlayerShip);
  if (keyIsDown(LEFT_ARROW) && playerShipX > 0 || keyIsDown(65) && playerShipX > 0){
    playerShipX = playerShipX - 10;
  }
  if (keyIsDown(RIGHT_ARROW) && playerShipX < 1140 || keyIsDown(68) && playerShipX < 1140) {
    playerShipX = playerShipX + 10
  }
}