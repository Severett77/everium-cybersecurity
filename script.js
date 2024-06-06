document.addEventListener("DOMContentLoaded", () => {
    // Falling binary animation
    const binaryContainer = document.querySelector('.falling-binary');
    const binaryCharacters = '01';
    const binaryArray = Array.from(binaryCharacters);
    const screenWidth = window.innerWidth;
    const numberOfCharacters = Math.floor(screenWidth / 20);

    for (let i = 0; i < numberOfCharacters; i++) {
        const binarySpan = document.createElement('span');
        binarySpan.textContent = binaryArray[Math.floor(Math.random() * binaryArray.length)];
        binarySpan.style.left = `${Math.random() * 100}%`;
        binarySpan.style.animationDuration = `${Math.random() * 10 + 5}s`;
        binaryContainer.appendChild(binarySpan);
    }

    // Background animations (circles, hexagons, zeros)
    const backgroundContainer = document.querySelector('.background-animations');
    const shapes = ['circle', 'hexagon', 'zero'];
    const numberOfShapes = 30;

    for (let i = 0; i < numberOfShapes; i++) {
        const shape = document.createElement('div');
        shape.classList.add(shapes[Math.floor(Math.random() * shapes.length)]);
        shape.style.left = `${Math.random() * 100}%`;
        shape.style.top = `${Math.random() * 100}%`;
        shape.style.animationDuration = `${Math.random() * 10 + 5}s`;
        backgroundContainer.appendChild(shape);
    }
});
