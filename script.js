// Target canvas element and ctx
const canvas = document.getElementById('bannerCanvas');
const ctx = canvas.getContext('2d');

// Create image object
const img = new Image();
img.src = 'Images/Banner.png'; 

//fade text 
let alpha = 0;

//Outline animation variables
let outlineStartX = -400;

///calculate font size
function calcFontSize(canvasWidth) {
    return Math.round(canvasWidth / 15);
}

// Function to draw on the canvas
function draw() {

    // Calculate the aspect ratio
    const aspectRatio = img.width / img.height;

    // Set the canvas height based on the calculated aspect ratio
    canvas.height = canvas.width / aspectRatio;

    //clear canvas
    ctx.clearRect(-10, -10, canvas.width +20, canvas.height +20);

    // Draw the image
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    // Calculate and set heading font, size, and style
    const fontSizeHeading = calcFontSize(canvas.width);
        // console.log('Font Size Heading', fontSizeHeading);
    ctx.font = `bold ${fontSizeHeading}px Pacifico`; 

    // fade effect
    ctx.fillStyle = `rgba(0, 0, 0,${alpha})`;

    // Text coordinates
    const headX = canvas.width * 0.05;  
    const headY = canvas.height * 0.5;  

    // Display heading text
    ctx.fillText('About me', headX, headY);
    
    //outline animation
    const outlineFinalX = headX;
    if (outlineStartX < outlineFinalX) {
        outlineStartX += 2;
    }

    //adjust outline position
    const outlineAdjust = 1;

    // Display outline
    ctx.strokeStyle = 'beige';  // Outline color
    ctx.lineWidth = 2;  // Outline thickness
    ctx.strokeText('About me', outlineStartX -outlineAdjust, headY); ///Draw ouutline

    //fade effect
    if (alpha < 1) {
        alpha += 0.002;
    }
        
    // Set font, size, and style
    const fontSizeText = fontSizeHeading / 2;
        // console.log('Font Size Text', fontSizeText);
    ctx.font = `bold ${fontSizeText}px Roboto`; 
            
    // Text coordinates
    let textX = canvas.width * 0.05;  
    let textY = headY + fontSizeHeading;

    // Gap between lines
    const lineGap = fontSizeText * 1.5; 

    // Array containing the lines of text
    const lines = [
        "Kieran Sweetman",
        "Noob Software Developer",
        "Web3 Enthusiast",
        "DeSci and Global Health Advocate"
        ];

    // Loop for lines of text
    for (let i = 0; i < lines.length; i++) {
            ctx.fillStyle = `rgba(0, 0, 0, ${alpha})`;
            ctx.fillText(lines[i], textX, textY);
            ctx.strokeText(lines[i], outlineStartX, textY); ///Draw outline
            ctx.strokeStyle = 'beige';  // Outline color
            ctx.lineWidth = 2;  // Outline thickness
            textY += lineGap;  
        }

    requestAnimationFrame(draw);    
}; 

// Event listener for image load
img.onload = draw;

// Set up the canvas when the window has loaded
window.onload = function() {

    // Set canvas width
    canvas.width = window.innerWidth;

    draw();
};

// Event listener for window resize
window.addEventListener('resize', function() {

    // Update the canvas width
    canvas.width = window.innerWidth;

    ///Reset outline start position
    outlineStartX = -400;
        // console.log('Canvas Width: ' + canvas.width);

    draw();
});

//toggle burger menu when clicked
function toggleMenu() {
    const navLinks = document.querySelector('.navbar ul');
    navLinks.classList.toggle('show');
}

document.addEventListener('DOMContentLoaded', function () {
    const fadeInElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    fadeInElements.forEach(element => {
        observer.observe(element);
    });
});
