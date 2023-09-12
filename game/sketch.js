const spawnpointPlayerX = width/2-30
const spawnpointPlayerY = height-30
const widthPlayerShip = 60
const heightPlayerShip = 20

function setup () {
  createCanvas(1200,600);
}

function draw () {
  background(0);
  fill(0,255,0);
  noStroke();
  rect(spawnpointPlayerX, spawnpointPlayerY, widthPlayerShip, heightPlayerShip)
}