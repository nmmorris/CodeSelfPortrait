/*************************************************************************
    Self Portrait
          by Natalie Morris

    Draws a portrait using organic p5 shapes with changing colors when the
    mouse is pressed.
 
    ---------------------------------------------------------------------
    Notes: This portrait is intended to simulate a desktop or computer 
    screen editing photos based on a screenshot I took of my own sketch.

**************************************************************************/
 
// Variables
let varRed;
let varBlue;
let varGreen;
let varWhite;
let varBlack;
let varBeige;
let varPurple;

// Setup code goes here
function setup() {
	createCanvas(windowWidth, windowHeight);
 }


// Draw code goes here
function draw() {
	varBlue = color(35, 70, 245);
	varRed = color(238, 77, 52);
	varGreen = color(195, 242, 81);
	varWhite = color(255, 255, 255);
	varBlack = color(0, 0, 0);
	varBeige = color(219, 213, 201);
	varPurple = color(212, 192, 245);

 	if (mouseIsPressed) {
 		varBlue = varRed;
 		varRed = varBlack;
 		varWhite = varGreen;
 		varBeige = varPurple;
 	}
 	
 	background(varBeige);
 	drawEye1();
 	drawEyeBox();
 	drawBangs();
 	drawEye2();
 	drawMouthBox();
 	drawMouth();
 	drawHair();
 	drawTools();
 	drawHand();
}

// Draws the right eye
function drawEye1() {
	stroke(varBlue);
	circle(584, 401, 4, 4);
	noFill();
	strokeWeight(7);
	bezier(585, 385, 588, 348, 632, 322, 663, 343);
	fill(varBlue);
	circle(624, 369, 55, 55);
	line(586, 375, 573, 369);
	line(646, 334, 645, 320);
	line(658, 338, 666, 325);
	noFill();
	bezier(601, 401, 628, 418, 662, 406, 665, 371);
	bezier(590, 341, 592, 328, 604, 321, 616, 326);
	line(654, 403, 660, 413);
	line(665, 392, 675, 399);
	line(595, 422, 611, 430);
}

// Draws the bangs
function drawBangs() {
	noFill();
	strokeWeight(7);
	stroke(varBlue);
	bezier(626, 263, 659, 324, 721, 341, 776, 306);
	bezier(499, 226, 523, 265, 584, 278, 607, 259);
	bezier(464, 199, 458, 244, 495, 288, 543, 288);
	bezier(528, 132, 545, 190, 624, 227, 719, 222);
	bezier(474, 63, 529, 22, 603, 35, 674, 88);
	bezier(278, 100, 297, 56, 363, 39, 413, 64);
	bezier(274, 259, 337, 252, 387, 196, 379, 132);
	bezier(218, 380, 318, 369, 402, 307, 416, 199);
}

// Draws the left eye window
function drawEyeBox() {
	noFill();
	stroke(varRed);
	strokeWeight(7);
	fill(varWhite);
	rect(258, 292, 237, 168);
	line(258, 313, 495, 313);
	line(465, 302, 483, 302);
}

// Draws the left eye
function drawEye2() {
	stroke(varRed);
	fill(varRed);
	circle(392, 395, 60, 60);
	noFill();
	strokeWeight(7);
	bezier(347, 382, 376, 351, 427, 364, 435, 393);
	bezier(355, 417, 369, 441, 406, 443, 425, 424);
	circle(441, 409, 4, 4);
	line(443, 432, 431, 445);
	line(431, 384, 441, 373);
	line(337, 366, 349, 375);
	line(355, 355, 359, 369);
	bezier(385, 349, 393, 339, 411, 342, 414, 354);
	line(363, 429, 356, 438);
	line(376, 435, 375, 447);
}

// Draws mouth and chin window
function drawMouthBox() {
	strokeWeight(7);
	fill(varWhite);
	rect(391, 480, 357, 259);
	line(391, 502, 748, 502);
	line(719, 490, 736, 490);
}

// Draws the mouth and chin
function drawMouth() {
	noFill();
	strokeWeight(7);
	line(513, 537, 498, 532);
	line(538, 534, 551, 525);
	noFill();
	beginShape();
	vertex(502, 576);
	vertex(515, 568);
	vertex(528, 573);
	vertex(543, 567);
	vertex(558, 574);
	endShape();
	beginShape();
	vertex(485, 587);
	vertex(513, 586);
	vertex(530, 591);
	vertex(547, 584);
	vertex(572, 582);
	endShape();
	bezier(498, 600, 503, 608, 515, 611, 525, 606);
	bezier(536, 605, 545, 610, 558, 605, 562, 596);
	bezier(441, 640, 498, 684, 587, 680, 667, 582);
}

// Draws hair
function drawHair() {
	stroke(varBlue);
	bezier(286, 506, 288, 537, 319, 561, 352, 555);
	bezier(230, 496, 202, 534, 235, 610, 316, 626);
	bezier(316, 626, 399, 648, 390, 760, 263, 813);
	bezier(263, 813, 161, 861, 245, 984, 363, 945);
	bezier(154, 574, 151, 603, 171, 621, 196, 619);
	bezier(196, 619, 222, 617, 240, 660, 210, 700);
	bezier(210, 700, 180, 742, 206, 778, 259, 755);
}

// Draw toolbox
function drawTools() {
	stroke(varRed);
	fill(varWhite);
	rect(46, 105, 107, 303);
	line(46, 126, 153, 126);
	line(123, 115, 141, 115);
	beginShape();
	vertex(84, 196);
	vertex(84, 153);
	vertex(117, 178);
	circle(100, 260, 55, 55);
	rect(76, 328, 51, 51);
	endShape();
}

// Draw hand window that will follow the mouse
function drawHand() {
	stroke(varRed);
	// Draw window
	fill(varWhite);
	rect(mouseX - 146, mouseY - 180, 293, 360);
	line(mouseX - 146, mouseY - 158, mouseX + 146, mouseY - 158);
	line(mouseX + 116, mouseY - 170, mouseX + 134, mouseY - 170);
	// Draw hand
	beginShape();
	vertex(mouseX - 29, mouseY + 147);
	vertex(mouseX - 71, mouseY + 120);
	vertex(mouseX - 96, mouseY + 58);
	vertex(mouseX - 97, mouseY - 19);
	endShape();
	bezier(mouseX - 97, mouseY - 19, mouseX - 89, mouseY - 25,
		mouseX - 65, mouseY - 10, mouseX - 62, mouseY + 15);
	beginShape();
	vertex(mouseX - 62, mouseY + 15);
	vertex(mouseX - 52, mouseY + 45);
	vertex(mouseX - 32, mouseY + 57);
	vertex(mouseX - 28, mouseY - 41);
	vertex(mouseX - 44, mouseY - 90);
	endShape();
	bezier(mouseX - 44, mouseY - 90, mouseX - 59, mouseY - 102,
		mouseX - 55, mouseY - 123, mouseX - 46, mouseY - 126);
	beginShape();
	vertex(mouseX - 46, mouseY - 126);
	vertex(mouseX - 20, mouseY - 100);
	vertex(mouseX + 5, mouseY - 57);
	vertex(mouseX + 11, mouseY + 2);
	endShape();
	beginShape();
	vertex(mouseX + 5, mouseY - 57);
	vertex(mouseX + 3, mouseY - 72);
	vertex(mouseX - 12, mouseY - 121);
	endShape();
	bezier(mouseX - 12, mouseY - 121, mouseX - 23, mouseY - 130,
		mouseX - 23, mouseY - 151, mouseX - 12, mouseY - 157);
	beginShape();
	vertex(mouseX - 12, mouseY - 157);
	vertex(mouseX + 12, mouseY - 129);
	vertex(mouseX + 35, mouseY - 84);
	vertex(mouseX + 44, mouseY - 1);
	endShape();
	bezier(mouseX + 5, mouseY - 140, mouseX + 4, mouseY - 150,
		mouseX + 9, mouseY - 156, mouseX + 15, mouseY - 156);
	beginShape();
	vertex(mouseX + 15, mouseY - 156);
	vertex(mouseX + 40, mouseY - 129);
	vertex(mouseX + 63, mouseY - 84);
	vertex(mouseX + 71, mouseY - 4);
	endShape();
	bezier(mouseX + 42, mouseY - 128, mouseX + 41, mouseY - 138,
		mouseX + 44, mouseY - 142, mouseX + 49, mouseY - 142);
	beginShape();
	vertex(mouseX + 49, mouseY - 142);
	vertex(mouseX + 69, mouseY - 118);
	vertex(mouseX + 89, mouseY - 79);
	vertex(mouseX + 98, mouseY - 9);
	endShape();
}