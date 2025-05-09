let stats = {
    water: 50,
    sunlight: 50,
    food: 50
  };
  
  const canvas = document.getElementById('plantCanvas');
  const ctx = canvas.getContext('2d');
  const messageEl = document.getElementById('message');
  
  function updateBars() {
    for (let stat in stats) {
      const bar = document.getElementById(`${stat}Bar`);
      bar.style.width = `${stats[stat]}%`;
      bar.style.backgroundColor = stats[stat] < 30 ? 'red' : stats[stat] < 70 ? 'orange' : 'green';
    }
  }
  
  function careForPlant(type) {
    stats[type] = Math.min(stats[type] + 15, 100);
    updateBars();
    updatePlantCanvas();
  }
  
  function decayStats() {
    for (let stat in stats) {
      stats[stat] = Math.max(stats[stat] - 0.2, 0); // Slow decay
    }
    updateBars();
    updatePlantCanvas();
  }
  
  function updatePlantCanvas() {
    const avg = (stats.water + stats.sunlight + stats.food) / 3;
  
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    // Pot
    ctx.fillStyle = "#8B4513";
    ctx.fillRect(70, 150, 60, 30);
  
    if (avg > 70) {
      drawPlant("thriving");
      messageEl.textContent = 'Your plant is thriving!';
    } else if (avg > 40) {
      drawPlant("okay");
      messageEl.textContent = 'Your plant needs some care.';
    } else {
      drawPlant("wilting");
      messageEl.textContent = 'Your plant is wilting!';
    }
  }
  
  function drawPlant(stage) {
    ctx.fillStyle = "green";
    ctx.strokeStyle = "green";
    ctx.lineWidth = 3;
  
    // stem
    ctx.beginPath();
    ctx.moveTo(100, 150);
    ctx.lineTo(100, 100);
    ctx.stroke();
  
    if (stage === "thriving") {
      drawLeaf(90, 110, -30);
      drawLeaf(110, 110, 30);
      drawLeaf(85, 90, -45);
      drawLeaf(115, 90, 45);
      drawFlower(100, 85);
    } else if (stage === "okay") {
      drawLeaf(90, 110, -30);
      drawLeaf(110, 110, 30);
    } else if (stage === "wilting") {
      ctx.strokeStyle = "brown";
      ctx.beginPath();
      ctx.moveTo(100, 150);
      ctx.lineTo(95, 125);
      ctx.stroke();
    }
  }
  
  function drawLeaf(x, y, angle) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate((angle * Math.PI) / 180);
    ctx.beginPath();
    ctx.ellipse(0, 0, 10, 4, 0, 0, 2 * Math.PI);
    ctx.fill();
    ctx.restore();
  }
  
  function drawFlower(x, y) {
    ctx.fillStyle = "pink";
    for (let i = 0; i < 5; i++) {
      drawLeaf(x, y, i * 72);
    }
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, 2 * Math.PI);
    ctx.fill();
  }
  
  // Init
  updateBars();
  updatePlantCanvas();
  setInterval(decayStats, 1000); // Decay every second
  