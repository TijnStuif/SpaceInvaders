const moveSpeedPlayerShip = 10;
const moveSpeedPlayerBullet = 5;
const moveSpeedEnemy = 1;
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

let playerBullets = []
let shootingEnemies = []
let peacefulEnemies = []

function preload () {
  spaceImg = loadImage('images_game/space.jpg');
  playerShipImg = loadImage('images_game/player_ship.png');
  peacefulEnemyImg = loadImage('images_game/peaceful_enemy.png');
  shootingEnemyImg = loadImage('images_game/shooting_enemy.png');
  playerBulletImg = loadImage('images_game/player_bullet.png');
}

function setup () {
  createCanvas(1200,600);

  
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 1; j++) {
    let shootingEnemy = {
      x: 100 + i * 100,
      y: 100 + j * 50,
      direction: 1
    }
    shootingEnemies.push(shootingEnemy)
    console.log(shootingEnemy.x)
  }
for (let i = 0; i < 10; i++) {
  for (let j = 2; j < 5; j++) {
    let peacefulEnemy = {
      x: 100 + i * 100,
      y: 100 + j * 50,
      direction: 1
    }
    peacefulEnemies.push(peacefulEnemy)
    console.log(peacefulEnemy.x)
    }
  }
}
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

for(let peacefulEnemy of peacefulEnemies){
  image(peacefulEnemyImg, peacefulEnemy.x, peacefulEnemy.y);
  peacefulEnemy.x += moveSpeedEnemy * peacefulEnemy.direction;
  if (peacefulEnemy.x < 0 || peacefulEnemy.x > width - distanceFromRightSide) {
    peacefulEnemy.direction *= -1;
  }
}
for(let shootingEnemy of shootingEnemies){
  image(shootingEnemyImg, shootingEnemy.x, shootingEnemy.y);
  shootingEnemy.x += moveSpeedEnemy * shootingEnemy.direction;
  if (shootingEnemy.x < 0 || shootingEnemy.x > width - distanceFromRightSide) {
    shootingEnemy.direction *= -1;
  }
}

  
  if (keyIsDown(LEFT_ARROW) && playerShipX > distanceFromLeftSide || keyIsDown(AKeyCode) && playerShipX > distanceFromLeftSide){
    playerShipX = playerShipX - moveSpeedPlayerShip;
  }
  if (keyIsDown(RIGHT_ARROW) && playerShipX < width - distanceFromRightSide || keyIsDown(DKeyCode) && playerShipX < width - distanceFromRightSide) {
    playerShipX = playerShipX + moveSpeedPlayerShip;
  }
  for(let playerBullet of playerBullets){
    playerBullet.y -= moveSpeedPlayerBullet;
    fill(127);
    image(playerBulletImg, playerBullet.x,playerBullet.y);
    if (playerBullet.y < 0) {
      playerBullets.splice(0, 1);
    }
  }
}

