let storyState = "start";

function choosePath(choice) {
    let storyText = document.getElementById("story-text");
    let sceneImage = document.getElementById("scene-image");
    let choicesDiv = document.getElementById("choices");

    choicesDiv.innerHTML = ""; // Clear previous choices

    if (storyState === "start") {
        if (choice === "left") {
            storyText.innerText = "You walk down a shadowy path and discover an abandoned cabin. Do you enter?";
            sceneImage.src = "images/cabin.jpg";
            document.body.style.backgroundColor = "#2d1b1b";

            choicesDiv.innerHTML = `
                <button onclick="choosePath('enter')">Enter the Cabin</button>
                <button onclick="choosePath('stayOutside')">Stay Outside</button>
            `;
            storyState = "cabin";
        } else if (choice === "right") {
            storyText.innerText = "A river blocks your path. You see a boat and a bridge. Which do you take?";
            sceneImage.src = "images/river.jpg";
            document.body.style.backgroundColor = "#013220";

            choicesDiv.innerHTML = `
                <button onclick="choosePath('boat')">Take the Boat</button>
                <button onclick="choosePath('bridge')">Cross the Bridge</button>
            `;
            storyState = "river";
        } else if (choice === "forward") {
            storyText.innerText = "You find a clearing with a glowing portal. Will you step inside?";
            sceneImage.src = "images/portal.jpg";
            document.body.style.backgroundColor = "#1a3d5c";

            choicesDiv.innerHTML = `
                <button onclick="choosePath('portalYes')">Step Inside</button>
                <button onclick="choosePath('portalNo')">Ignore the Portal</button>
            `;
            storyState = "portal";
        }
    } else if (storyState === "cabin") {
        if (choice === "enter") {
            let outcome = Math.random() > 0.5 ? "win" : "lose";
            storyText.innerText = outcome === "win"
                ? "You find treasure hidden inside the cabin. You win!"
                : "A ghostly figure appears! You lose.";
            sceneImage.src = outcome === "win" ? "images/treasure.jpg" : "images/ghost.jpg";
        } else {
            storyText.innerText = "You decide not to enter and return to where you started.";
            sceneImage.src = "images/forest.jpg";
        }
    } else if (storyState === "river") {
        if (choice === "boat") {
            let outcome = Math.random() > 0.5 ? "win" : "lose";
            storyText.innerText = outcome === "win"
                ? "The boat safely carries you across. You win!"
                : "The boat capsizes! You lose.";
            sceneImage.src = outcome === "win" ? "images/safe-boat.jpg" : "images/capsized.jpg";
        } else {
            let outcome = Math.random() > 0.5 ? "win" : "lose";
            storyText.innerText = outcome === "win"
                ? "You safely cross the bridge. You win!"
                : "The bridge collapses! You lose.";
            sceneImage.src = outcome === "win" ? "images/safe-bridge.jpg" : "images/bridge-collapse.jpg";
        }
    } else if (storyState === "portal") {
        if (choice === "portalYes") {
            let outcome = Math.random() > 0.5 ? "win" : "lose";
            storyText.innerText = outcome === "win"
                ? "You enter a new magical realm. You win!"
                : "The portal was a trap! You lose.";
            sceneImage.src = outcome === "win" ? "images/magic-realm.jpg" : "images/dark-trap.jpg";
        } else {
            storyText.innerText = "You ignore the portal and walk away. Nothing happens.";
            sceneImage.src = "images/forest.jpg";
        }
    }

    // Show restart button when the game ends
    if (storyText.innerText.includes("win") || storyText.innerText.includes("lose")) {
        document.getElementById("restart-btn").style.display = "block";
    }
}

function restartGame() {
    location.reload(); // Reload the page to restart
}
