let storyStep = 1;  // Track the current part of the story

function makeChoice() {
    let choice = document.getElementById("choiceInput").value.toLowerCase();
    let resultDiv = document.getElementById("result");
    let storyImage = document.getElementById("storyImage");

    switch (storyStep) {
        case 1:
            if (choice === "investigate") {
                resultDiv.innerHTML = "You pilot the **SS Starfire** closer. Suddenly, a wormhole forms, pulling your ship into an unknown galaxy!";
                storyImage.src = "images/anomaly.jpg"; // Image of a wormhole/anomaly
                document.body.style.backgroundColor = "#4B0082"; // Indigo for mystery
                storyStep = 2;  // Move to next step
                document.getElementById("story").innerHTML = "You are now in an unknown galaxy. You can 'explore' the area or 'wait' for help.";
            } else if (choice === "change course") {
                resultDiv.innerHTML = "You alter your course, narrowly avoiding the anomaly. However, you now detect an unidentified vessel approaching...";
                storyImage.src = "images/danger.jpg"; // Image of an unknown spaceship
                document.body.style.backgroundColor = "#8B0000"; // Red for danger
                storyStep = 3;  // Move to next step
                document.getElementById("story").innerHTML = "The vessel hails you. Do you 'respond' or 'ignore'?";
            } else {
                resultDiv.innerHTML = "NOVA blinks: 'That is not a valid command, Commander. Please choose 'investigate' or 'change course'.'";
                return;
            }
            break;

        case 2:
            if (choice === "explore") {
                resultDiv.innerHTML = "You explore the unknown galaxy and find an alien structure!";
                storyImage.src = "images/alien_structure.jpg"; // Image of an alien ruin
                document.body.style.backgroundColor = "#00FA9A"; // Green for discovery
                storyStep = 4;  // Move to next step
                document.getElementById("story").innerHTML = "The structure seems ancient. Do you want to 'study' the structure or 'leave'?";
            } else if (choice === "wait") {
                resultDiv.innerHTML = "You wait for help, but time passes and no one arrives. You're stranded.";
                storyImage.src = "images/stranded.jpg"; // Image of being stranded
                document.body.style.backgroundColor = "#A9A9A9"; // Gray for stranded
                storyStep = 5;  // Move to next step
                document.getElementById("story").innerHTML = "You are still stranded. Do you 'signal' for help or 'explore' the ship?";
            } else {
                resultDiv.innerHTML = "NOVA blinks: 'That is not a valid command. Please choose 'explore' or 'wait'.'";
                return;
            }
            break;

        case 3:
            if (choice === "respond") {
                resultDiv.innerHTML = "The unidentified vessel sends a cryptic message: 'We are the last survivors.'";
                storyImage.src = "images/alien_vessel.jpg"; // Image of alien vessel
                document.body.style.backgroundColor = "#6A5ACD"; // Purple for mystery
                storyStep = 6;  // Move to next step
                document.getElementById("story").innerHTML = "They ask if you 'trust' them or 'question' them.";
            } else if (choice === "ignore") {
                resultDiv.innerHTML = "You ignore the vessel, but soon after, your systems begin malfunctioning.";
                storyImage.src = "images/malfunction.jpg"; // Image of malfunctioning ship
                document.body.style.backgroundColor = "#FF6347"; // Tomato red for danger
                storyStep = 7;  // Move to next step
                document.getElementById("story").innerHTML = "Your ship is malfunctioning. Do you 'repair' it or 'evacuate'?";
            } else {
                resultDiv.innerHTML = "NOVA blinks: 'That is not a valid command. Please choose 'respond' or 'ignore'.'";
                return;
            }
            break;

        case 4:
            if (choice === "study") {
                resultDiv.innerHTML = "You study the structure and discover alien technology, but it activates an ancient defense system!";
                storyImage.src = "images/alien_technology.jpg"; // Image of alien tech
                document.body.style.backgroundColor = "#FFD700"; // Gold for discovery
                storyStep = 8;  // Move to next step
                document.getElementById("story").innerHTML = "The defense system begins to activate. Do you 'disable' the system or 'run'?";
            } else if (choice === "leave") {
                resultDiv.innerHTML = "You leave the structure, but now you're lost in a strange galaxy with no clear way back.";
                storyImage.src = "images/lost.jpg"; // Image of a lost galaxy
                document.body.style.backgroundColor = "#000000"; // Black for confusion
                storyStep = 9;  // End or next part
                document.getElementById("story").innerHTML = "You are completely lost in space. Do you 'explore' further or 'wait' for a rescue?";
            } else {
                resultDiv.innerHTML = "NOVA blinks: 'That is not a valid command. Please choose 'study' or 'leave'.'";
                return;
            }
            break;

        case 5:
            if (choice === "signal") {
                resultDiv.innerHTML = "You signal for help, but your distress signal is intercepted by an unknown force!";
                storyImage.src = "images/distress_signal.jpg"; // Image of a distress signal
                document.body.style.backgroundColor = "#FF4500"; // Orange for distress
                storyStep = 10;  // Move to next step
                document.getElementById("story").innerHTML = "The unknown force responds. Do you 'negotiate' or 'defend'?";
            } else if (choice === "explore") {
                resultDiv.innerHTML = "You explore the ship and discover a hidden message from the original crew!";
                storyImage.src = "images/hidden_message.jpg"; // Image of a hidden message
                document.body.style.backgroundColor = "#9ACD32"; // Green for discovery
                storyStep = 11;  // Move to next step
                document.getElementById("story").innerHTML = "The message reveals a secret about the mission. Do you 'investigate' further or 'leave'?";
            } else {
                resultDiv.innerHTML = "NOVA blinks: 'That is not a valid command. Please choose 'signal' or 'explore'.'";
                return;
            }
            break;

        case 6:
            if (choice === "trust") {
                resultDiv.innerHTML = "You trust them, and they reveal the truth about their mission to save humanity!";
                storyImage.src = "images/trust.jpg"; // Image of trust
                document.body.style.backgroundColor = "#32CD32"; // Green for trust
                storyStep = 12;  // End or next part
                document.getElementById("story").innerHTML = "You’ve learned the truth! Would you like to 'continue' or 'return'?";
            } else if (choice === "question") {
                resultDiv.innerHTML = "You question them, but they become hostile and fire upon your ship!";
                storyImage.src = "images/hostile_vessel.jpg"; // Image of hostile ship
                document.body.style.backgroundColor = "#FF0000"; // Red for danger
                storyStep = 13;  // End or next part
                document.getElementById("story").innerHTML = "Your ship is under attack. Do you 'defend' or 'evacuate'?";
            } else {
                resultDiv.innerHTML = "NOVA blinks: 'That is not a valid command. Please choose 'trust' or 'question'.'";
                return;
            }
            break;

        case 7:
            resultDiv.innerHTML += "<br>Mission complete. Would you like to restart?";
            document.getElementById("restartButton").style.display = "block"; // Show restart button
            break;

        default:
            resultDiv.innerHTML = "Mission complete. Would you like to restart?";
            document.getElementById("restartButton").style.display = "block"; // Show restart button
            return;
    }
}

function restartGame() {
    document.getElementById("story").innerHTML = "You are the commander of the **SS Starfire**, traveling through deep space when your ship’s AI, NOVA, alerts you of an anomaly ahead. What do you do? Type 'investigate' to investigate or 'change course' to avoid it.";
    document.getElementById("result").innerHTML = "";
    document.getElementById("choiceInput").value = "";
    document.body.style.backgroundColor = "#000020"; // Reset to space background
    document.getElementById("storyImage").src = "images/default_space.jpg"; // Reset image
    document.getElementById("restartButton").style.display = "none"; // Hide restart button
    storyStep = 1;  // Reset story step
}
