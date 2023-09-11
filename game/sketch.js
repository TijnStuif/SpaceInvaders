var moveLeft = false
var moveRight = false

function setup() {
  createCanvas(1200, 600);
}

function draw() {
  noStroke();
  background(0);
  rect(width / 2 - 30, height - 30, 60, 20)
}

function keyPressed() {
  if ( Keycode === LEFT_ARROW) {
    moveLeft = true;
  }
  if (Keycode === RIGHT_ARROW) {
    moveRight = true;
  }
}