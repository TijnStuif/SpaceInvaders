const moveSpeedPlayerShip = 8;
const moveSpeedPlayerBullet = 5;
const moveSpeedEnemyBullet = 2;
const moveSpeedEnemy = 1;
const distanceFromLeftSide = 30;
const distanceFromRightSide = 30;
const distanceFromGround = 30;
const playerShipY = 590;
const AKeyCode = 65;
const DKeyCode = 68;
let playerBulletX = 600;
let playerBulletY = 590;
let playerShipX = 580;
let enemyDirection = 1;
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
        direction: 1,
      }
      shootingEnemies.push(shootingEnemy)
    }
  }
  for (let i = 0; i < 10; i++) {
    for (let j = 1; j < 5; j++) {
      let peacefulEnemy = {
        x: 100 + i * 100,
        y: 100 + j * 50,
        direction: 1,
      }
      peacefulEnemies.push(peacefulEnemy)
      }
    }
  console.log(peacefulEnemies)
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
  let enemyTouchesGround = peacefulEnemies.some(peacefulEnemy => peacefulEnemy.y > height - distanceFromGround) || shootingEnemies.some(shootingEnemy => shootingEnemy.y > height - distanceFromGround)
  let enemyTouchesLeft = peacefulEnemies.some(peacefulEnemy => peacefulEnemy.x < distanceFromLeftSide) || shootingEnemies.some(shootingEnemy => shootingEnemy.y < distanceFromLeftSide)
  let enemyTouchesRight = peacefulEnemies.some(peacefulEnemy => peacefulEnemy.x > width - distanceFromRightSide) || shootingEnemies.some(shootingEnemy => shootingEnemy.y > width - distanceFromRightSide)
  if (enemyTouchesGround == true) {
      console.log("L + ratio + yrou'e")
  }
for (let peacefulEnemy of peacefulEnemies){
  image(peacefulEnemyImg, peacefulEnemy.x, peacefulEnemy.y);
  if (enemyTouchesLeft == true || enemyTouchesRight == true) {
    peacefulEnemy.direction *= -1;
    peacefulEnemy.y += 50;
  }
  peacefulEnemy.x += moveSpeedEnemy * peacefulEnemy.direction;
}
for (let shootingEnemy of shootingEnemies){
  image(shootingEnemyImg, shootingEnemy.x, shootingEnemy.y);
  if (enemyTouchesLeft == true || enemyTouchesRight == true) {
    shootingEnemy.y += 50;
    shootingEnemy.direction *= -1;
  }
  shootingEnemy.x += moveSpeedEnemy * shootingEnemy.direction;
  if (random(0,300) > 299) {
    let enemyBullet = {
      x: shootingEnemy.x,
      y: shootingEnemy.y
    }
    enemyBullets.push(enemyBullet);
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
for (let peacefulEnemy of peacefulEnemies)
  for (let i = playerBullets.length - 1; i >= 0; i--){
    let playerBullet = playerBullets[i]
    if (dist(peacefulEnemy.x, peacefulEnemy.y, playerBullet.x, playerBullet.y) < 30){
      peacefulEnemies.splice(peacefulEnemies.indexOf(peacefulEnemy),1)
      playerBullets.splice(i, 1)
    }
  }
for (let shootingEnemy of shootingEnemies)
  for (let i = playerBullets.length - 1; i >= 0; i--){
    let playerBullet = playerBullets[i]
    if (dist(shootingEnemy.x, shootingEnemy.y, playerBullet.x, playerBullet.y) < 30){
      shootingEnemies.splice(shootingEnemies.indexOf(shootingEnemy),1)
      playerBullets.splice(i, 1)
    }
  }
}