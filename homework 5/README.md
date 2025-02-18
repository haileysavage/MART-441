# Reflection on Homework 5

## Overview
This week, I developed a memory-matching game using JavaScript, arrays, and event listeners. My goal was to create a functional game board where users click on blank tiles to reveal images. CoPilot generated an alternative version, which I compared with my own implementation.

## Reflection of my code
Writing my own implementation helped me better understand how JavaScript interacts with the DOM. I structured my approach by first defining the image pairs, randomizing them, and then assigning them to the tiles. Debugging issues—like images not appearing—helped reinforce my knowledge of event listeners, CSS background updates, and troubleshooting JavaScript errors using console.log().

One issue I encountered was that my images were not displaying correctly when clicked. I initially assumed the array was populating properly, but after debugging, I realized the image paths were not correctly formatted when setting backgroundImage. This led me to refactor my initializeGameImages() function to ensure it properly assigned images.

## CoPilot's Approach
CoPilot’s version took a different approach, using img elements instead of div backgrounds. While this method simplifies the image display logic, it also means additional styling would be needed to make the images align correctly in a grid. Another key difference was how CoPilot ensured each image appeared twice before randomizing, while my method shuffled an array that already contained duplicate images.


