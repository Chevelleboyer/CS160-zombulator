// Zombulator by Chevelle Boyer

var zombieX = 50;
var zombie2X = 100;
var zombie3x = 50;
var zombie4x = 300;
var zombieColor;
var z2Color;
var z3Color;
var z4color;

function setup() {
	createCanvas(800, 800);
	zombieColor = color(0, 29, 255);
	z2Color = color(150, 150, 200);
	z3Color = color(110, 254, 0);
	z4color = color(0, 12, 91);
	
}

function draw() {
	background(255, 255, 255);
	fill(zombieColor);
	strokeWeight(5);
	stroke(150, 150, 200);	
	ellipse(50, zombieX, 80, 80);
	fill(z2Color);
	strokeWeight(3);
	stroke(255, 0, 208);
	ellipse(zombie2X, 100, 80, 80);
	fill(z3Color);
	strokeWeight(10);
	stroke(0, 255, 4);
	ellipse(zombie3x, 80, 50, 80);
	fill(z4color);
	strokeWeight(8);
	stroke(2, 237, 29);
	ellipse(300, zombie4x, 100, 100);
zombieX = zombieX + 6;
zombie2X = zombie2X + 4;
zombie3x = zombie3x + 9;
zombie4x = zombie4x + 7;

if (zombieX >= 800) {
	zombieX = 0;
	zombieColor = color(random(255), random(255), random(255));
}
if (zombie2X >= 800) {
	zombie2X = 0;
	z2Color = color(random(255), random(255), random(255));
}
if (zombie3x >= 800) {
	zombie3x = 0;
	z3Color = color(random(255), random(255), random(255));
}
if (zombie4x >= 800) {
	zombie4x = 0;
	z4color = color(random(255), random(255), random(255));
}

}