// Zombulator by Chevelle Boyer

var zombieY = 50;
var humanY = 100;
var zombieColor;
var humanColor;
var backgroundColor;
var zombieV = 0;
var zombieA = 0.2;
var zombieSize = 80;
var zombieDamping = -0.7;


function setup() {
	createCanvas(windowWidth, windowHeight);
	zombieColor = color(0, 29, 255);
	humanColor = color(150, 150, 200);
	backgroundColor = (186, 186, 186);
}

function draw() {
	background(backgroundColor);
	fill(zombieColor);
	noStroke();
	ellipse(50, zombieY, zombieSize, zombieSize);
	zombieY += zombieV;
	zombieV += zombieA;
if (zombieY + (zombieSize / 2) >= windowHeight) {
	zombieY = windowHeight - (zombieSize / 2);
	zombieV *= zombieDamping;
	zombieColor = color(random(255), random(255), random(255));
}
	fill(humanColor);
	noStroke();
	ellipse(500, humanY, 80, 80);
	humanY += 4;
if (humanY >= windowWidth) {
	humanY = 0;
	humanColor = color(random(255), random(255), random(255));
}

}