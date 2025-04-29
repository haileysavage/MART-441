
## Overview

This project is an interactive **Virtual Plant Care Simulation** designed as a browser-based experience where users can care for a digital plant. Users give the plant water, sunlight, and fertilizer to help it grow through multiple stages while maintaining its health. If neglected, the plant’s levels decay over time, requiring consistent interaction to thrive.

---

## Features

- Interactive buttons to **water**, **give sunlight**, and **fertilize** the plant
- Dynamic **progress bars** to show the plant’s current needs
- A **growth stage system** that changes the plant’s appearance based on care level
- **Automatic decay system** to simulate time passing
- **Data persistence** with `localStorage` so plant progress is saved
- Smooth **CSS transitions and animations** to enhance interactivity
- Visual feedback and UI updates with every user action

---

## Concepts Used

This project demonstrates several front-end development concepts learned this semester:

- HTML5 structure with semantic elements  
- CSS styling with transitions, animations, and responsive layout (Flexbox)  
- JavaScript for DOM manipulation and dynamic UI updates  
- Functions, conditionals, and loops to control game logic  
- Event listeners to handle user interactions  
- `setInterval()` and timers for real-time updates  
- `localStorage` for saving game state across sessions  
- Modular, reusable code and clean project structure

---

## Challenges & Solutions

### Growth Logic  
It was challenging to manage different growth stages while keeping logic clear and scalable. I solved this by structuring my plant state into objects and using clear conditional thresholds to trigger visual changes.

### Saving Data  
Using `localStorage` required careful handling of string/number data types. I added safeguards to parse stored data correctly and restore the game state on page load without bugs.

---

## Next Steps

- Add random events or environmental effects (e.g. seasons or weather)
- Improve mobile responsiveness and accessibility (e.g. alt text, tab navigation)
- Add background music or sound effects for immersion

---

## Reflection

This project has been a fun and meaningful way to apply everything I’ve learned about web development. It helped me build confidence in using JavaScript for real-world interactions and showed me how important structure and modularity are for scaling features. I’m proud of the final result and excited to keep refining it!

---

