//all constants, variables and arrays
const moveSpeedPlayerShip = 8;
const moveSpeedPlayerBullet = 15;
const moveSpeedEnemyBullet = 6;
const moveSpeedEnemy = 1;
const moveSpeedUfo = 5;
const distanceFromLeftSide = 30;
const distanceFromRightSide = 30;
const distanceFromGround = 30;
const playerShipY = 590;
const AKeyCode = 65;
const DKeyCode = 68;
let playerBulletX = 600;
let playerBulletY = 590;
let playerShipX = 580;
let playerShipHealth = 3;
let enemyDirection = 1;
let score = 0;
let bulletPity = 1;
let ufoPity = 1;
let ufoSpawn = 0;
let playerBullets = [];
let enemyBullets = [];
let shootingEnemies = [];
let peacefulEnemies = [];
let shieldUnits = [];
let ufoEnemies = [];

//preload all images used
function preload () {
  spaceImg = loadImage('images_game/space.jpg');
  playerShipImg = loadImage('images_game/player_ship.png');
  peacefulEnemyImg = loadImage('images_game/peaceful_enemy.png');
  shootingEnemyImg = loadImage('images_game/shooting_enemy.png');
  playerBulletImg = loadImage('images_game/player_bullet.png');
  enemyBulletImg = loadImage('images_game/enemy_bullet.png');
  ufoEnemyImg = loadImage('images_game/ufo_enemy.png');
  shieldUnitWhiteImg = loadImage('images_game/shield_stages/shield.png');
  shieldUnitGreenImg = loadImage('images_game/shield_stages/shieldgreen.png')
  shieldUnitYellowImg = loadImage('images_game/shield_stages/shieldyellow.png')
  shieldUnitOrangeImg = loadImage('images_game/shield_stages/shieldorange.png')
  shieldUnitRedImg = loadImage('images_game/shield_stages/shieldred.png')
}

function setup () {
  createCanvas(1200,600);
  //for-loop that creates the shooting enemies
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 1; j++) {
      let shootingEnemy = {
        x: 100 + i * 100,
        y: 100,
        direction: 1,
      }
      shootingEnemies.push(shootingEnemy);
    }
  }

  //for-loop that creates the peaceful enemies
  for (let i = 0; i < 10; i++) {
    for (let j = 1; j < 5; j++) {
      let peacefulEnemy = {
        x: 100 + i * 100,
        y: 100 + j * 50,
        direction: 1,
      }
      peacefulEnemies.push(peacefulEnemy);
      }
    }

  //for-loop that spawns the shield units
  for (let i = 0; i < 4; i++) {
    let shieldUnit = {
      x: 150 + i * 300,
      y: 500,
      health: 5
    }
    shieldUnits.push(shieldUnit);
  }
}

//creates a bullet object when the spacebar is pressed
function keyPressed() {
  if (keyCode === 32) {
    let playerBullet = {
      x: playerShipX,
      y: playerShipY
    }
    playerBullets.push(playerBullet);
  }
}

//function that shows score in the top left
function showScore() {
  fill(255);
  textSize(25);
  text(score, 40, 50);
}

//function that shows player health in the top left
function showHealth() {
  fill(255);
  textSize(25);
  text(playerShipHealth, 40, 100)
}

/*function that checks if the ufoSpawn variable is assigned to a certain number 
(0 does nothing, 1 makes the ufo spawn at the left side, and 2 makes the ufo spawn at the right side).
Once the ufo spawns, it resets the ufoSpawn variable so the ufo can be respawned after it gets deleted. */
function checkUfoSpawn() {
  if (ufoSpawn == 0) {
    return;
  } else {
    if (ufoSpawn == 2) {
      let ufoEnemy = {
        x: 1200,
        y: 50,
        health: 1,
        direction: -1
      }
      ufoEnemies.push(ufoEnemy)
      ufoSpawn -= 2;
    }

    if (ufoSpawn == 1) {
      let ufoEnemy = {
        x: 0,
        y: 50,
        health: 1,
        direction: 1
      }
      ufoEnemies.push(ufoEnemy)
      ufoSpawn -= 1;
    }
  }
}

function draw () {
  clear();

  //this makes sure all images and text are loaded from the center
  imageMode(CENTER);
  textAlign(CENTER);
  image(spaceImg, 600, 300);
  image(playerShipImg, playerShipX, playerShipY);

  //makes variables that check if any enemy touches the sides and bottom of the screen
  let enemyTouchesGround = peacefulEnemies.some(peacefulEnemy => peacefulEnemy.y > height - distanceFromGround) || 
                            shootingEnemies.some(shootingEnemy => shootingEnemy.y > height - distanceFromGround)
  let enemyTouchesLeft = peacefulEnemies.some(peacefulEnemy => peacefulEnemy.x < distanceFromLeftSide) || 
                          shootingEnemies.some(shootingEnemy => shootingEnemy.x < distanceFromLeftSide)
  let enemyTouchesRight = peacefulEnemies.some(peacefulEnemy => peacefulEnemy.x > width - distanceFromRightSide) || 
                          shootingEnemies.some(shootingEnemy => shootingEnemy.x > width - distanceFromRightSide)

  if (enemyTouchesGround == true) {
    fill(255, 0, 0);
    textSize(100);
    text("YOU LOSE!", width / 2, height / 2);
    noLoop();
  }

  //for-loop that loads the image of the peaceful enemy and gives it movement
  for (let peacefulEnemy of peacefulEnemies){
    image(peacefulEnemyImg, peacefulEnemy.x, peacefulEnemy.y);
    if (enemyTouchesLeft == true || enemyTouchesRight == true) {
      peacefulEnemy.direction *= -1;
      peacefulEnemy.y += 50;
      }
    peacefulEnemy.x += moveSpeedEnemy * peacefulEnemy.direction;
  }

  //for-loop that loads the image of the shooting enemy and gives it movement, as well as making it spawn bullets at a random interval
  for (let shootingEnemy of shootingEnemies){
   image(shootingEnemyImg, shootingEnemy.x, shootingEnemy.y);
    if (enemyTouchesLeft == true || enemyTouchesRight == true) {
      shootingEnemy.y += 50;
      shootingEnemy.direction *= -1;
      }
    shootingEnemy.x += moveSpeedEnemy * shootingEnemy.direction;
    let randomBulletSpawn = Math.floor(random(0,100) * 1 + bulletPity);
    bulletPity += 1;
    if (randomBulletSpawn > 149) {
      let enemyBullet = {
        x: shootingEnemy.x,
        y: shootingEnemy.y
      }
      bulletPity = 0;
      enemyBullets.push(enemyBullet);
    }
  }

  //for-loop that loads the image of the shield units on the correct x and y coordinate
  for (let shieldUnit of shieldUnits) {
    image(shieldUnitWhiteImg, shieldUnit.x, shieldUnit.y, 100, 100);
  }
  //moves the player to the left if either the left-arrow is pressed or the a-button
  if (keyIsDown(LEFT_ARROW) && playerShipX > distanceFromLeftSide || 
    keyIsDown(AKeyCode) && playerShipX > distanceFromLeftSide){
    playerShipX -= moveSpeedPlayerShip;
  }
  //moves the player to the right if either the right-arrow is pressed or the d-button
  if (keyIsDown(RIGHT_ARROW) && playerShipX < width - distanceFromRightSide || 
    keyIsDown(DKeyCode) && playerShipX < width - distanceFromRightSide) {
    playerShipX += moveSpeedPlayerShip;
  }

  //for-loop that determines the spawn point of the enemy bullet and gives it movement
  for (let enemyBullet of enemyBullets) {
    enemyBullet.y += moveSpeedEnemyBullet;
    image(enemyBulletImg, enemyBullet.x, enemyBullet.y);
    if (enemyBullet.y > 1200) {
      enemyBullets.splice(0, 1);
    }
  }

  //for-loop that determines the spawn point of the player bullet and gives it movement
  for (let playerBullet of playerBullets){
    playerBullet.y -= moveSpeedPlayerBullet;
    image(playerBulletImg, playerBullet.x,playerBullet.y, 5, 25);
    if (playerBullet.y < 0) {
      playerBullets.splice(0, 1);
    }
  }

  for (let shieldUnit of shieldUnits) {
    if (shieldUnit.health == 4) {
      image(shieldUnitGreenImg, shieldUnit.x, shieldUnit.y, 100, 100)
    }
    if (shieldUnit.health == 3) {
      image(shieldUnitYellowImg, shieldUnit.x, shieldUnit.y, 100, 100)
    }
    if (shieldUnit.health == 2) {
      image(shieldUnitOrangeImg, shieldUnit.x, shieldUnit.y, 100, 100)
    }
    if (shieldUnit.health == 1) {
      image(shieldUnitRedImg, shieldUnit.x, shieldUnit.y, 100, 100)
    }
  }

  // calculation that spawns ufo enemies every 7-8 seconds
  ufoPity += 1;
  if (ufoPity + random(0, 60) > 540) {
    ufoSpawn = Math.round(random(1, 2));
    ufoPity = 0;
  }

  checkUfoSpawn();

  //for-loop that gives movement to the ufo
  for (let ufoEnemy of ufoEnemies) {
    ufoEnemy.x += moveSpeedUfo * ufoEnemy.direction;
    image(ufoEnemyImg, ufoEnemy.x, ufoEnemy.y)
    if (ufoEnemy.x < 0 || ufoEnemy.x > 1200) {
      ufoEnemies.splice(0, 1);
    }
  }

  //function that adds collision between player bullets and ufo enemies
  for (let ufoEnemy of ufoEnemies) {
    for (let i = playerBullets.length - 1; i >= 0; i--) {
      let playerBullet = playerBullets[i];
      if (dist(ufoEnemy.x, ufoEnemy.y, playerBullet.x, playerBullet.y) < 50) {
        ufoEnemies.splice(ufoEnemies.indexOf(ufoEnemy), 1);
        playerBullets.splice(i, 1);
        score += 100;
        playerShipHealth += 1;
        shieldUnits.forEach((shieldUnit) => {
          shieldUnit.health += 1;
        })
      }
    }
  }

  //for-loop that adds collision between player bullets and peaceful enemies
  for (let peacefulEnemy of peacefulEnemies)
   for (let i = playerBullets.length - 1; i >= 0; i--){
    let playerBullet = playerBullets[i];
    if (dist(peacefulEnemy.x, peacefulEnemy.y, playerBullet.x, playerBullet.y) < 30){
      peacefulEnemies.splice(peacefulEnemies.indexOf(peacefulEnemy), 1)
      playerBullets.splice(i, 1);
      score += 10;
    }
  }

  //for-loop that adds collision between the enemy bullets and the shield units
  for (let shieldUnit of shieldUnits) {
    for (let i = enemyBullets.length - 1; i >= 0; i--){
      let enemyBullet = enemyBullets[i];
      if (dist(shieldUnit.x, shieldUnit.y, enemyBullet.x, enemyBullet.y) < 40) {
      enemyBullets.splice(i, 1);
      shieldUnit.health -= 1;
      }
    }
    if (shieldUnit.health <= 0) {
      shieldUnits.splice(shieldUnits.indexOf(shieldUnit), 1);
    }
  }

  //for-loop that adds collision between player bullets and shooting enemies
  for (let shootingEnemy of shootingEnemies){
    for (let i = playerBullets.length - 1; i >= 0; i--){
      let playerBullet = playerBullets[i];
      if (dist(shootingEnemy.x, shootingEnemy.y, playerBullet.x, playerBullet.y) < 30){
        shootingEnemies.splice(shootingEnemies.indexOf(shootingEnemy),1)
        playerBullets.splice(i, 1);
        score += 30;
      }
    }
  }

  //for-loop that adds collision between enemy bullets and the player ship, as well 
  for (let i = enemyBullets.length - 1; i >= 0; i--){
    let enemyBullet = enemyBullets[i];
    if (dist(playerShipX, playerShipY, enemyBullet.x, enemyBullet.y) < 30) {
      enemyBullets.splice(i, 1);
      playerShipHealth -= 1;
      }
    if (playerShipHealth <= 0) { 
      fill(255, 0, 0);
      textSize(100);
      text("YOU LOSE!", width / 2, height / 2);
      noLoop();
    }
  }

  //functions that shows the score and health in the top-left.
  showScore();
  showHealth();

  //if-statement that checks if both types of enemies are dead. If they are, a win-message will pop up
  if (peacefulEnemies.length == 0 && shootingEnemies.length == 0){
    fill(0, 255, 0);
    textSize(100);
    text("YOU WIN!", width / 2, height / 2);
    noLoop();
    }
}