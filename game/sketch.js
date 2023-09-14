const widthPlayerShip = 60;
const heightPlayerShip = 20;
const widthEnemyShip = 60;
const heightEnemyShip = 20;
const moveSpeedPlayerShip = 10;
const distanceFromLeftSide = 5;
const distanceFromRightSide = 65;
const playerShipY = 560;
const AKeyCode = 65;
const DKeyCode = 68;
let playerShipX = 568;
let playerBulletX = 595;
let playerBulletY = 580;
let enemyShipX = 100;
let enemyShipY = 50;

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
  fill(255, 0, 0);
  for (let enemyShooterX = 0.4; enemyShooterX < 5; enemyShooterX++) {
    for (let enemyShooterY = 0; enemyShooterY < 1; enemyShooterY++) {
    rect(100 + enemyShooterX * 200, 100 + enemyShooterY * 50, widthEnemyShip, heightEnemyShip) }
  }
  fill(0, 0, 255);
  for (let enemyShipX = 0.4; enemyShipX < 5; enemyShipX++) {
    for (let enemyShipY = 2; enemyShipY < 5; enemyShipY++)
    rect(100 + enemyShipX * 200, 50 + enemyShipY * 50, widthEnemyShip, heightEnemyShip)
  }
  if (keyIsDown(LEFT_ARROW) && playerShipX > distanceFromLeftSide || keyIsDown(AKeyCode) && playerShipX > distanceFromLeftSide){
    playerShipX = playerShipX - moveSpeedPlayerShip;
  }
  if (keyIsDown(RIGHT_ARROW) && playerShipX < width - distanceFromRightSide || keyIsDown(DKeyCode) && playerShipX < width - distanceFromRightSide) {
    playerShipX = playerShipX + moveSpeedPlayerShip;
  }
}