// Define image paths
const images = ["fearless.png", "reputation.png", "ttpd.png", "folklore.png", "red.png", "1989.png"];
let gameImages = [];

// Fill gameImages array with pairs
function initializeGameImages() {
    let tempArray = [...images, ...images]; // Duplicate images for matching pairs
    gameImages = []; // Reset array
    while (tempArray.length) {
        let randomIndex = Math.floor(Math.random() * tempArray.length);
        gameImages.push(tempArray.splice(randomIndex, 1)[0]);
    }
}

// Create blank tile placeholders
function createBoard() {
    const board = document.getElementById("game-board");
    board.innerHTML = ""; // Clear previous tiles if needed

    for (let i = 0; i < 12; i++) {
        let tile = document.createElement("div");
        tile.classList.add("tile");
        tile.dataset.index = i;
        tile.style.backgroundImage = "url('images/blank.png')";
        tile.addEventListener("click", revealTile);
        board.appendChild(tile);
    }
}

// Reveal image when clicked
function revealTile(event) {
    let tile = event.target;
    let index = tile.dataset.index;

    if (gameImages.length === 0) {
        console.error("Game images not loaded.");
        return;
    }

    // Debugging log
    console.log(`Tile clicked: ${index}, Image: ${gameImages[index]}`);

    // Show the actual image
    tile.style.backgroundImage = `url('images/${gameImages[index]}')`;
}

// Initialize game
initializeGameImages();
createBoard();

