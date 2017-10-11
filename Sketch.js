// Zombulator by Chevelle Boyer

var zombieY = 50;
var zombieColor;
var backgroundColor;
var zombieV = 0;
var zombieA = 0.2;
var zombieSize = 80;
var zombieDamping = -0.5;
var humanY = 100;
var humanColor;
var humanV = 0;
var humanA = 0.7;
var humanSize = 100;
var humanDamping = -0.8;

function setup() {
	createCanvas(windowWidth, windowHeight);
	zombieColor = color(192, 255, 160);
	humanColor = color(255, 245, 186);
	backgroundColor = (186, 186, 186);
}

function draw() {
	background(backgroundColor);
	fill(zombieColor);
	stroke(186, 0, 0);
	strokeWeight(8);
	ellipse(50, zombieY, zombieSize, zombieSize);
	zombieY += zombieV;
	zombieV += zombieA;
if (zombieY + (zombieSize / 2) >= windowHeight) {
	zombieY = windowHeight - (zombieSize / 2);
	zombieV *= zombieDamping;
	zombieColor = color(random(147, 70), random(247,119), 27);
}
	fill(humanColor);
	noStroke();
	ellipse(500, humanY, humanSize, humanSize);
	humanY += humanV;
	humanV += humanA;
if (humanY + (humanSize / 2) >= windowHeight) {
	humanY = windowHeight - (zombieSize / 2);
	humanV *= humanDamping;
	humanColor = color(255, random(245, 225), random(186, 0));
}

}