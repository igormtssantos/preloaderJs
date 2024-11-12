const overlay = document.createElement('div');
overlay.id = 'loader';
overlay.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 999;
`;

// Container for the SVG and shimmer effect
const container = document.createElement('div');
container.style.cssText = `
    position: relative;
    width: 200px; /* Set based on your SVG dimensions */
    height: 200px; /* Set based on your SVG dimensions */
`;

// Add the SVG image
const svgImage = document.createElement('img');
svgImage.id = 'svgImage';
svgImage.src = 'https://igormtssantos.github.io/preloaderJs/image.svg';
svgImage.style.cssText = `
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
`;

// Add the shimmer effect overlay
const shimmerOverlay = document.createElement('div');
shimmerOverlay.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.2) 25%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0.2) 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
    pointer-events: none;
`;

// Append the elements
container.appendChild(svgImage);
container.appendChild(shimmerOverlay);
overlay.appendChild(container);
document.body.appendChild(overlay);

// Function to hide the loader when everything is loaded
function hideOverlay() {
    overlay.style.display = 'none';
}

// Add an event listener to hide the overlay when the page is loaded
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(hideOverlay, 100); // Simulate loading time
});

// Add the shimmer animation to CSS
const style = document.createElement('style');
style.innerHTML = `
    @keyframes shimmer {
        0% {
            background-position: -200% 0;
        }
        100% {
            background-position: 200% 0;
        }
    }
`;
document.head.appendChild(style);
