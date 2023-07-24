// Get all elements with the class 'bulb'
const bulbs = document.querySelectorAll('.bulb');

// Array of different bulb colors
const bulbColors = ['bulbOrange', 'bulbPink'];

// Function to change the bulb color
function changeColor() {
    bulbs.forEach((bulb) => {
        const randomColor = bulbColors[Math.floor(Math.random() * bulbColors.length)];
        bulb.className = `bulb ${randomColor}`;
    });
}

// Call the function every 2 seconds (2000 milliseconds)
setInterval(changeColor, 2000);
