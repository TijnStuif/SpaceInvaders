const widthPlayerShip = 60;
const heightPlayerShip = 20;
var playerShipX = 570;
const playerShipY = 570;
var playerBulletX = 595;
var playerBulletY = 580;
const space_image_source = 'images_game/space.jpg';
const player_ship_image_source = 'images_game/player_ship.png'

function setup () {
  createCanvas(1200,600);
  spaceImg = loadImage(space_image_source);
  playerShipImg = loadImage(player_ship_image_source);
}

function draw () {
  image(spaceImg, 0, 0);
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