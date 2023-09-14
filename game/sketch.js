const widthPlayerShip = 60;
const heightPlayerShip = 20;
var playerShipX = 565;
const playerShipY = 560;
var playerBulletX = 595;
var playerBulletY = 580;
var enemyShipX = 100;
var enemyShipY = 50;

function preload () {
  spaceImg = loadImage('images_game/space.jpg')
  playerShipImg = loadImage('images_game/player_ship.png')
}
function setup () {
  createCanvas(1200,600);
}

function draw () {
  image(spaceImg, 0, 0);
  image(playerShipImg, playerShipX, playerShipY);
  /*for (let enemyShip = 100; enemyShip < 200; enemyShip++) {
    enemyShip(100 + enemyShipX * 200, 0, 100 + enemyShipX * 200, enemyShipY)
  } */
  if (keyIsDown(LEFT_ARROW) && playerShipX > 0 || keyIsDown(65) && playerShipX > 0){
    playerShipX = playerShipX - 10;
  }
  if (keyIsDown(RIGHT_ARROW) && playerShipX < 1140 || keyIsDown(68) && playerShipX < 1140) {
    playerShipX = playerShipX + 10
  }
}