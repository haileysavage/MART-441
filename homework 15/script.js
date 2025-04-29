// Plant state variables
let plant = {
    health: 100,
    growthStage: 1, // Seedling (1), Sprout (2), Mature (3)
    lastCare: null,
    waterLevel: 100,
    sunlightLevel: 100,
    fertilizerLevel: 100,
  };
  
  // Load plant state from localStorage if available
  function loadPlantData() {
    const savedHealth = localStorage.getItem("plantHealth");
    const savedGrowthStage = localStorage.getItem("plantGrowthStage");
    const savedLastCare = localStorage.getItem("plantLastCare");
    const savedWaterLevel = localStorage.getItem("waterLevel");
    const savedSunlightLevel = localStorage.getItem("sunlightLevel");
    const savedFertilizerLevel = localStorage.getItem("fertilizerLevel");
  
    if (savedHealth) {
      plant.health = parseInt(savedHealth);
      plant.growthStage = parseInt(savedGrowthStage);
      plant.lastCare = savedLastCare;
      plant.waterLevel = parseFloat(savedWaterLevel);
      plant.sunlightLevel = parseFloat(savedSunlightLevel);
      plant.fertilizerLevel = parseFloat(savedFertilizerLevel);
    }
  
    document.getElementById("health").textContent = plant.health;
    document.getElementById("growthStage").textContent = getGrowthStageText(plant.growthStage);
    document.getElementById("lastCare").textContent = plant.lastCare || "N/A";
  
    updatePlantVisuals();
    updateProgressBars();
  }
  
  // Save plant state to localStorage
  function savePlantData() {
    localStorage.setItem("plantHealth", plant.health);
    localStorage.setItem("plantGrowthStage", plant.growthStage);
    localStorage.setItem("plantLastCare", plant.lastCare);
    localStorage.setItem("waterLevel", plant.waterLevel);
    localStorage.setItem("sunlightLevel", plant.sunlightLevel);
    localStorage.setItem("fertilizerLevel", plant.fertilizerLevel);
  }
  
  // Update plant visuals based on growth stage
  function updatePlantVisuals() {
    const plantElement = document.getElementById("plant");
  
    switch (plant.growthStage) {
      case 1:
        plantElement.style.height = "50px";
        plantElement.style.width = "50px";
        plantElement.style.backgroundColor = "#4caf50";
        break;
      case 2:
        plantElement.style.height = "80px";
        plantElement.style.width = "80px";
        plantElement.style.backgroundColor = "#81c784";
        break;
      case 3:
        plantElement.style.height = "120px";
        plantElement.style.width = "120px";
        plantElement.style.backgroundColor = "#388e3c";
        break;
    }
  }
  
  // Convert growth stage to text
  function getGrowthStageText(stage) {
    switch (stage) {
      case 1:
        return "Seedling";
      case 2:
        return "Sprout";
      case 3:
        return "Mature Plant";
      default:
        return "Unknown";
    }
  }
  
  // Update the progress bars
  function updateProgressBars() {
    document.getElementById("waterBar").style.width = plant.waterLevel + "%";
    document.getElementById("sunlightBar").style.width = plant.sunlightLevel + "%";
    document.getElementById("fertilizerBar").style.width = plant.fertilizerLevel + "%";
  
    document.getElementById("waterProgressLabel").textContent = Math.floor(plant.waterLevel);
    document.getElementById("sunlightProgressLabel").textContent = Math.floor(plant.sunlightLevel);
    document.getElementById("fertilizerProgressLabel").textContent = Math.floor(plant.fertilizerLevel);
  }
  
  // General care handler with animation
  function handleCare(type) {
    const plantElement = document.getElementById("plant");
  
    plantElement.classList.add("grow");
    setTimeout(() => plantElement.classList.remove("grow"), 500);
  
    if (type === "water" && plant.waterLevel < 100) {
      plant.waterLevel = 100;
    } else if (type === "sunlight" && plant.sunlightLevel < 100) {
      plant.sunlightLevel = 100;
    } else if (type === "fertilizer" && plant.fertilizerLevel < 100) {
      plant.fertilizerLevel = 100;
    }
  
    plant.lastCare = new Date().toLocaleString();
    growPlant();
    updateGameStats();
    updateProgressBars();
  }
  
  // Grow logic based on health
  function growPlant() {
    const avgCare = (plant.waterLevel + plant.sunlightLevel + plant.fertilizerLevel) / 3;
    plant.health = avgCare;
  
    if (plant.health >= 80 && plant.growthStage < 3) {
      plant.growthStage = 3;
    } else if (plant.health >= 50 && plant.growthStage < 2) {
      plant.growthStage = 2;
    } else if (plant.health < 50 && plant.growthStage > 1) {
      plant.growthStage = 1;
    }
  
    updatePlantVisuals();
  }
  
  // Update game stats on screen
  function updateGameStats() {
    document.getElementById("health").textContent = Math.floor(plant.health);
    document.getElementById("growthStage").textContent = getGrowthStageText(plant.growthStage);
    document.getElementById("lastCare").textContent = plant.lastCare;
    savePlantData();
  }
  
  // Gradually decrease bars
  function decreaseBars() {
    if (plant.waterLevel > 0) plant.waterLevel -= 0.1;
    if (plant.sunlightLevel > 0) plant.sunlightLevel -= 0.05;
    if (plant.fertilizerLevel > 0) plant.fertilizerLevel -= 0.08;
  
    growPlant();
    updateProgressBars();
    updateGameStats();
  }
  
  // Reset plant
  function resetPlant() {
    plant.health = 100;
    plant.growthStage = 1;
    plant.lastCare = null;
    plant.waterLevel = 100;
    plant.sunlightLevel = 100;
    plant.fertilizerLevel = 100;
  
    updateGameStats();
    updatePlantVisuals();
    updateProgressBars();
  }
  
  // Event listeners
  document.getElementById("waterBtn").addEventListener("click", () => handleCare("water"));
  document.getElementById("sunlightBtn").addEventListener("click", () => handleCare("sunlight"));
  document.getElementById("fertilizerBtn").addEventListener("click", () => handleCare("fertilizer"));
  document.getElementById("resetBtn").addEventListener("click", resetPlant);
  
  // Start game
  loadPlantData();
  setInterval(decreaseBars, 1000);
  