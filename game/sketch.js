const moveSpeedPlayerShip = 10;
const moveSpeedPlayerBullet = 5;
const moveSpeedEnemyBullet = 2;
const moveSpeedEnemy = 1;
const distanceFromLeftSide = 30;
const distanceFromRightSide = 30;
const playerShipY = 590;
const AKeyCode = 65;
const DKeyCode = 68;
let playerBulletX = 600;
let playerBulletY = 590;
let playerShipX = 580;
let enemyGroupDirection = 1;
let enemyGroupY = 0;

let playerBullets = [];
let enemyBullets = [];
let shootingEnemies = [];
let peacefulEnemies = [];

function preload () {
  spaceImg = loadImage('images_game/space.jpg');
  playerShipImg = loadImage('images_game/player_ship.png');
  peacefulEnemyImg = loadImage('images_game/peaceful_enemy.png');
  shootingEnemyImg = loadImage('images_game/shooting_enemy.png');
  playerBulletImg = loadImage('images_game/player_bullet.png');
  enemyBulletImg = loadImage('images_game/enemy_bullet.png')
}

function setup () {
  createCanvas(1200,600);
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 1; j++) {
      let shootingEnemy = {
        x: 100 + i * 100,
        y: 100,
      }
      shootingEnemies.push(shootingEnemy)
    }
  for (let i = 0; i < 10; i++) {
    for (let j = 1; j < 5; j++) {
      let peacefulEnemy = {
        x: 100 + i * 100,
        y: 100 + j * 50,
      }
      peacefulEnemies.push(peacefulEnemy)
      }
    }
  }
  }

function keyPressed() {
  if (keyCode === 32) {
    let playerBullet = {
    x: playerShipX,
    y: playerShipY}
  playerBullets.push(playerBullet)
    }
}

function draw () {
  clear();
  imageMode(CENTER)
  image(spaceImg, 600, 300);
  image(playerShipImg, playerShipX, playerShipY);

for (let peacefulEnemy of peacefulEnemies){
  image(peacefulEnemyImg, peacefulEnemy.x, peacefulEnemy.y + enemyGroupY);
  peacefulEnemy.x += moveSpeedEnemy * enemyGroupDirection;
  if (peacefulEnemy.x < distanceFromLeftSide || peacefulEnemy.x > width - distanceFromRightSide) {
    enemyGroupDirection *= -1;
    enemyGroupY += 50;
  }
  if (enemyGroupY > 250) {
    remove();
  }
}
for (let shootingEnemy of shootingEnemies){
  image(shootingEnemyImg, shootingEnemy.x, shootingEnemy.y + enemyGroupY);
  shootingEnemy.x += moveSpeedEnemy * enemyGroupDirection;
  if (shootingEnemy.x < distanceFromLeftSide || shootingEnemy.x > width - distanceFromRightSide) {
    enemyGroupDirection *= -1;
    enemyGroupY += 50;
  }
  if (random(0,400) > 399) {
    let enemyBullet = {
      x: shootingEnemy.x,
      y: shootingEnemy.y + enemyGroupY
    }
    enemyBullets.push(enemyBullet);
  }
  if (enemyGroupY > 250) {
    remove();
  }
}
if (keyIsDown(LEFT_ARROW) && playerShipX > distanceFromLeftSide || keyIsDown(AKeyCode) && playerShipX > distanceFromLeftSide){
    playerShipX = playerShipX - moveSpeedPlayerShip;
  }
if (keyIsDown(RIGHT_ARROW) && playerShipX < width - distanceFromRightSide || keyIsDown(DKeyCode) && playerShipX < width - distanceFromRightSide) {
    playerShipX = playerShipX + moveSpeedPlayerShip;
  }
for (let enemyBullet of enemyBullets) {
  enemyBullet.y += moveSpeedEnemyBullet;
  image(enemyBulletImg, enemyBullet.x, enemyBullet.y);
  if (enemyBullet.y > 1200) {
    enemyBullets.splice(0, 1);
  }
}
for (let playerBullet of playerBullets){
    playerBullet.y -= moveSpeedPlayerBullet;
    image(playerBulletImg, playerBullet.x,playerBullet.y, 5, 25);
    if (playerBullet.y < 0) {
      playerBullets.splice(0, 1);
    }
  }
}