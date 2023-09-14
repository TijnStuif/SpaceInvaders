const widthPlayerShip = 60;
const heightPlayerShip = 20;
const moveSpeedPlayerShip = 10;
const distanceFromLeftSide = 5;
const distanceFromRightSide = 65;
var playerShipX = 568;
const playerShipY = 560;
var playerBulletX = 595;
var playerBulletY = 580;
var enemyShipX = 100;
var enemyShipY = 50;

function preload () {
  spaceImg = loadImage('images_game/space.jpg');
  playerShipImg = loadImage('images_game/player_ship.png');
}
function setup () {
  createCanvas(1200,600);
}

function draw () {
  image(spaceImg, 0, 0);
  image(playerShipImg, playerShipX, playerShipY);
  for (let enemyShipX = 100; enemyShipX < 1200; enemyShipX++) {for (let enemyShipY = 50; enemyShipY < 150; enemyShipY++)
    rect(100 + enemyShipX * 200, 0, 100 + enemyShipX * 200, enemyShipY)
  }
  console.log(enemyShipX)
  console.log(enemyShipY)
  if (keyIsDown(LEFT_ARROW) && playerShipX > distanceFromLeftSide || keyIsDown(65) && playerShipX > distanceFromLeftSide){
    playerShipX = playerShipX - moveSpeedPlayerShip;
  }
  if (keyIsDown(RIGHT_ARROW) && playerShipX < width - distanceFromRightSide || keyIsDown(68) && playerShipX < width - distanceFromRightSide) {
    playerShipX = playerShipX + moveSpeedPlayerShip;
  }
}