const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let gameObjects = [];
let collectibles = [];
let score = 0;

// Player class
class Player {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  move(dx, dy) {
    this.x += dx;
    this.y += dy;
  }

  draw() {
    ctx.fillStyle = 'blue';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

// GameObject class for obstacles
class GameObject {
  constructor(id, type, x, y, width, height) {
    this.id = id;
    this.type = type;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw() {
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

// Collectible class
class Collectible {
  constructor(id, type, x, y, width, height) {
    this.id = id;
    this.type = type;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.collected = false;
  }

  collect() {
    this.collected = true;
    score += 10; // Increase score when collected
  }

  draw() {
    if (!this.collected) {
      ctx.fillStyle = 'green';
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }
}

// Create player (AFTER the class is defined!)
let player = new Player(50, 50, 50, 50);

// Load the JSON data for obstacles
fetch('objects.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
      const obj = new GameObject(item.id, item.type, item.x, item.y, item.width, item.height);
      gameObjects.push(obj);
    });
  });

// Load the JSON data for collectibles
fetch('collectibles.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
      const obj = new Collectible(item.id, item.type, item.x, item.y, item.width, item.height);
      collectibles.push(obj);
    });
  });

// Keyboard event listener for player movement
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp') {
    player.move(0, -10);
  } else if (e.key === 'ArrowDown') {
    player.move(0, 10);
  } else if (e.key === 'ArrowLeft') {
    player.move(-10, 0);
  } else if (e.key === 'ArrowRight') {
    player.move(10, 0);
  }
});

// Collision detection
function checkCollision(player, obj) {
  return player.x < obj.x + obj.width &&
         player.x + player.width > obj.x &&
         player.y < obj.y + obj.height &&
         player.y + player.height > obj.y;
}

// Check for player and collectible collisions
function handleCollectibles() {
  collectibles.forEach(collectible => {
    if (checkCollision(player, collectible) && !collectible.collected) {
      collectible.collect();
    }
  });
}

// Main game loop
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

  // Draw game objects and player
  gameObjects.forEach(obj => obj.draw());
  collectibles.forEach(obj => obj.draw());
  player.draw();

  handleCollectibles();

  // Display score
  ctx.fillStyle = 'black';
  ctx.font = '16px Arial';
  ctx.fillText(`Score: ${score}`, 10, 20);

  requestAnimationFrame(gameLoop); // Keep the loop running
}

// Start the game loop
gameLoop();
