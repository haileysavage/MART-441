// Define image paths
const images = ["fearless.png", "reputation.png", "ttpd.png", "folklore.png", "red.png", "1989.png"];
let gameImages = [];
let flippedTiles = [];
let matchedPairs = 0;
let attempts = 0;

// Retrieve player data
let playerData = JSON.parse(localStorage.getItem("playerData")) || { attempts: 0 };

// Fill gameImages array with pairs and shuffle
function initializeGameImages() {
    let tempArray = [...images, ...images]; // Duplicate images for matching pairs
    while (tempArray.length) {
        let randomIndex = Math.floor(Math.random() * tempArray.length);
        gameImages.push(tempArray.splice(randomIndex, 1)[0]);
    }
}

// Create blank tile placeholders
function createBoard() {
    const board = document.getElementById("game-board");
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

    // Prevent clicking on already matched tiles or flipping more than two at a time
    if (flippedTiles.length === 2 || tile.classList.contains("matched")) return;

    // Show the actual image
    tile.style.backgroundImage = `url('images/${gameImages[index]}')`;
    flippedTiles.push({ tile, index });

    if (flippedTiles.length === 2) {
        attempts++;
        document.getElementById("attempts").textContent = `Attempts: ${attempts}`;

        if (gameImages[flippedTiles[0].index] === gameImages[flippedTiles[1].index]) {
            // Matched
            flippedTiles.forEach(t => t.tile.classList.add("matched"));
            matchedPairs++;
            flippedTiles = [];

            if (matchedPairs === images.length) {
                playerData.attempts = attempts;
                localStorage.setItem("playerData", JSON.stringify(playerData));
                setTimeout(() => window.location.href = "results.html", 1000);
            }
        } else {
            // No match - flip back
            setTimeout(() => {
                flippedTiles.forEach(t => t.tile.style.backgroundImage = "url('images/blank.png')");
                flippedTiles = [];
            }, 1000);
        }
    }
}

// Initialize game
initializeGameImages();
createBoard();
