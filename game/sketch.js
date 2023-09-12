const widthPlayerShip = 60
const heightPlayerShip = 20

function setup () {
  createCanvas(1200,600);
}

function Player() {

}

function draw () {
  background(0);
  fill(0,255,0);
  noStroke();
  rect(width / 2 - 30, height - 30, widthPlayerShip, heightPlayerShip)
}