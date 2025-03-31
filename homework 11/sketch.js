let userObject;
let autoObject;
let bgMusic;

function preload() {
  // Preload your background music
  bgMusic = loadSound('background.mp3');
}

function setup() {
  createCanvas(600, 400);
  userObject = new MovableObject(100, 200, 50, color(255, 0, 0)); // Red object
  autoObject = new AutoMovingObject(400, 200, 50, color(0, 0, 255)); // Blue object
  bgMusic.loop(); // Play music in a loop
}

function draw() {
  background(220);
  
  // Draw the border
  stroke(0); // Set border color (black)
  strokeWeight(10); // Set border thickness
  noFill(); // Don't fill the rectangle
  rect(5, 5, width - 10, height - 10); // Draw the border with a 5px margin

  
  // Check collision
  if (userObject.collidesWith(autoObject)) {
    background(random(255), random(255), random(255)); // Change background color
    userObject.size += 5;
    autoObject.size += 5;
  }

  // Draw objects
  userObject.display();
  autoObject.display();
  
  // Update objects
  userObject.update();
  autoObject.update();
}

class MovableObject {
  constructor(x, y, size, c) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.c = c;
  }
  
  display() {
    fill(this.c);
    noStroke();
    ellipse(this.x, this.y, this.size);
  }
  
  update() {
    if (keyIsDown(LEFT_ARROW)) this.x -= 5;
    if (keyIsDown(RIGHT_ARROW)) this.x += 5;
    if (keyIsDown(UP_ARROW)) this.y -= 5;
    if (keyIsDown(DOWN_ARROW)) this.y += 5;
    
    // Keep object inside canvas
    this.x = constrain(this.x, 0 + this.size / 2, width - this.size / 2);
    this.y = constrain(this.y, 0 + this.size / 2, height - this.size / 2);
  }

  collidesWith(other) {
    let d = dist(this.x, this.y, other.x, other.y);
    return d < (this.size / 2 + other.size / 2);
  }
}

class AutoMovingObject {
  constructor(x, y, size, c) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.c = c;
    this.speedX = random(2, 5);
    this.speedY = random(2, 5);
  }

  display() {
    fill(this.c);
    noStroke();
    ellipse(this.x, this.y, this.size);
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    // Change direction when hitting edges
    if (this.x > width - this.size / 2 || this.x < this.size / 2) this.speedX *= -1;
    if (this.y > height - this.size / 2 || this.y < this.size / 2) this.speedY *= -1;
  }
}
