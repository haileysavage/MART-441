const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let platforms = [];
let collectibles = [];
let spikes = [];
let score = 0;
let level = 1;

const gravity = 0.5;
const jumpStrength = 13;

let player = {
  x: 100,
  y: 500,
  width: 30,
  height: 30,
  dx: 0,
  dy: 0,
  onGround: false
};

fetch(`levels/level${level}.json`)
  .then(res => res.json())
  .then(data => {
    loadLevel(data);
    requestAnimationFrame(gameLoop);
  });

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') player.dx = -5;
  if (e.key === 'ArrowRight') player.dx = 5;
  if (e.key === ' ' && player.onGround) {
    player.dy = -jumpStrength;
    player.onGround = false;
  }
});

document.addEventListener('keyup', (e) => {
  if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') player.dx = 0;
});

function loadLevel(data) {
  platforms = data.platforms;
  collectibles = data.collectibles.map(c => ({ ...c, collected: false }));
  spikes = data.spikes;
  player.x = 100;
  player.y = 500;
  player.dx = 0;
  player.dy = 0;
  player.onGround = false;
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#e0f7fa";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  
    // Update player physics
    player.x += player.dx;
    player.y += player.dy;
    player.dy += gravity;
    player.onGround = false;
  
    // Collision with platforms
    platforms.forEach(p => {
      if (player.y + player.height <= p.y &&
          player.y + player.height + player.dy >= p.y &&
          player.x + player.width > p.x &&
          player.x < p.x + p.width) {
        player.dy = 0;
        player.y = p.y - player.height;
        player.onGround = true;
      }
    });
  
    // Collectibles
    collectibles.forEach(c => {
      if (!c.collected &&
          player.x < c.x + c.width &&
          player.x + player.width > c.x &&
          player.y < c.y + c.height &&
          player.y + player.height > c.y) {
        c.collected = true;
        score += c.value;
      }
    });
  
    // Spikes
    spikes.forEach(s => {
      if (player.x < s.x + s.width &&
          player.x + player.width > s.x &&
          player.y < s.y + s.height &&
          player.y + player.height > s.y) {
        alert("You hit a spike! Game over.");
        window.location.reload();
      }
    });
  
    // Check for win condition
    if (collectibles.every(c => c.collected)) {
        level++;
        console.log(`All collected! Moving to level ${level}`);
      
        fetch(`levels/level${level}.json`)
          .then(res => {
            if (!res.ok) throw new Error(`Level ${level} not found`);
            return res.json();
          })
          .then(data => {
            console.log(`Loaded level ${level}`, data);
            loadLevel(data);
            requestAnimationFrame(gameLoop); // restart the loop!
          })
          .catch(() => {
            console.error(`Level ${level} not found. You won!`);
            ctx.fillStyle = 'black';
            ctx.font = '30px Arial';
            ctx.fillText('You won the game!', 300, 100);
          });
      
        return; // skip drawing the current frame
      }
      
  
    // Draw everything
    platforms.forEach(p => {
      ctx.fillStyle = 'red';
      ctx.fillRect(p.x, p.y, p.width, p.height);
    });
  
    collectibles.forEach(c => {
      if (!c.collected) {
        ctx.fillStyle = 'gold';
        ctx.fillRect(c.x, c.y, c.width, c.height);
      }
    });
  
    spikes.forEach(s => {
      ctx.fillStyle = 'black';
      ctx.fillRect(s.x, s.y, s.width, s.height);
    });
  
    ctx.fillStyle = 'blue';
    ctx.fillRect(player.x, player.y, player.width, player.height);
  
    ctx.fillStyle = 'black';
    ctx.fillText(`Score: ${score}`, 10, 20);
    ctx.fillText(`Level: ${level}`, 10, 40);
  
    requestAnimationFrame(gameLoop);
  }
  
