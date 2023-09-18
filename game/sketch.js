const moveSpeedPlayerShip = 10;
const moveSpeedPlayerBullet = 5;
const distanceFromLeftSide = 5;
const distanceFromRightSide = 65;
const playerShipY = 560;
const AKeyCode = 65;
const DKeyCode = 68;
const bulletWidth = 10;
const bulletHeight = 20;
let playerBulletX = 595;
let playerBulletY = 580;
let playerShipX = 568;
let enemyShipX = 0;
let enemyShipY = 0;

let playerBullets = []

function preload () {
  spaceImg = loadImage('images_game/space.jpg');
  playerShipImg = loadImage('images_game/player_ship.png');
  peacefulEnemyImg = loadImage('images_game/peaceful_enemy.png');
  shootingEnemyImg = loadImage('images_game/shooting_enemy.png');
  playerBulletImg = loadImage('images_game/player_bullet.png');
}
function setup () {
  createCanvas(1200,600);
}

function keyPressed() {
  if (keyCode === 32) {
    let playerBullet = {
    x: playerShipX + 25,
    y: playerShipY}
  playerBullets.push(playerBullet)
    }
}

function draw () {
  image(spaceImg, 0, 0);
  image(playerShipImg, playerShipX, playerShipY);
  fill(255, 0, 0);
  for (let enemyShooterX = 0; enemyShooterX < 10; enemyShooterX++) {
    for (let enemyShooterY = 0; enemyShooterY < 1; enemyShooterY++) {
    image(shootingEnemyImg, 100 + enemyShooterX * 100, 100 + enemyShooterY * 50) }
  }
  fill(0, 0, 255);
  for (let enemyShipX = 0; enemyShipX < 10; enemyShipX++) {
    for (let enemyShipY = 2; enemyShipY < 5; enemyShipY++)
    image(peacefulEnemyImg, 100 + enemyShipX * 100, 50 + enemyShipY * 50);
  }
  if (keyIsDown(LEFT_ARROW) && playerShipX > distanceFromLeftSide || keyIsDown(AKeyCode) && playerShipX > distanceFromLeftSide){
    playerShipX = playerShipX - moveSpeedPlayerShip;
  }
  if (keyIsDown(RIGHT_ARROW) && playerShipX < width - distanceFromRightSide || keyIsDown(DKeyCode) && playerShipX < width - distanceFromRightSide) {
    playerShipX = playerShipX + moveSpeedPlayerShip;
  }
  for(let playerBullet of playerBullets){
    playerBullet.y = playerBullet.y - moveSpeedPlayerBullet;
    fill(127);
    image(playerBulletImg, playerBullet.x,playerBullet.y);
    if (playerBullet.y < 0) {
      playerBullets.splice(0, 1);
    }
  }
console.log(playerBullets)
  /*if (playerBullet == true) 
  {playerBulletSpawn()}
  playerBulletY = playerBulletY - 5;*/
}