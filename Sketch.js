// Zombulator by Chevelle Boyer

var zombieX = 50;
var zombie2X = 100;
var zombie3x = 50;
var zombie4x = 300;

function setup() {
	createCanvas(800, 800);
}

function draw() {
	background(255, 255, 255);
	var zxcolor = color(9, 247, 223);
	fill(zxcolor);
	strokeWeight(5);
	stroke(150, 150, 200);	
	ellipse(50, zombieX, 80, 80);
	fill(150, 150, 200);
	strokeWeight(3);
	stroke(255, 0, 208);
	ellipse(zombie2X, 100, 80, 80);
	fill(110, 255, 0);
	strokeWeight(10);
	stroke(0, 255, 4);
	ellipse(zombie3x, 80, 50, 80);
	fill(0, 12, 91);
	strokeWeight(8);
	stroke(2, 237, 29);
	ellipse(300, zombie4x, 50, 50);
zombieX = zombieX + 2;
zombie2X = zombie2X + 3;
zombie3x = zombie3x + 4;
zombie4x = zombie4x + 1;

if (zombieX >= 800) {
	zombieX = 100;
	zombieX = zombieX - 2;
	zxcolor = color(255, 0, 208);
}
if (zombie2X >= 800) {
	zombie2X = 0;
}
if (zombie3x >= 800) {
	zombie3x = 0;
}

}