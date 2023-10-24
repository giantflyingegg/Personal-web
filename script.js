window.onload = function() {
    // Target canvas element and ctx
    const canvas = document.getElementById('bannerCanvas');
    const ctx = canvas.getContext('2d');
    
    //Set width and height
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create image object
    const img = new Image();
    img.src = 'Images/Banner.png'; 

    // Await image load and then draw
    img.onload = function() {

        // Calculate the aspect ratio 
        const aspectRatio = img.width / img.height;

        // Set the canvas height based on the calculated aspect ratio
        canvas.height = canvas.width / aspectRatio;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            
        // Set heading font, size, and style
        ctx.font = 'bold 150px Arial'; 
    
        // Text colour
        ctx.fillStyle = 'black';

        // Text coordinates
        const headX = 70;  
        const headY = 500;  

        // Display heading text
        ctx.fillText('About me', headX, headY);
        ctx.strokeStyle = 'beige';  // Outline color
        ctx.lineWidth = 2;  // Outline thickness
        ctx.strokeText('About me', headX, headY); ///Draw ouutline
        
        // Set font, size, and style
        ctx.font = 'bold 60px Arial'; 
    
        // Text colour
        ctx.fillStyle = 'black';
        
        // Text coordinates
        let textX = 70;  
        let textY = 600;

            // Gap between lines
        const lineGap = 80; 

        // Array containing the lines of text
        const lines = [
        "Dr Kieran Sweetman",
        "Noob Software Developer",
        "Web3 Enthusiast",
        "DeSci and Global Health Advocate"
        ];

        // Loop for lines of text
        for (let i = 0; i < lines.length; i++) {
        ctx.fillText(lines[i], textX, textY);
        ctx.strokeText(lines[i], textX, textY); ///Draw outline
        ctx.strokeStyle = 'beige';  // Outline color
        ctx.lineWidth = 2;  // Outline thickness
        textY += lineGap;  
    }
}; 

}
        

//Adapt to window resize
window.addEventListener('resize', function() {
    // Update the canvas width
    canvas.width = window.innerWidth;

    // Redraw the image
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
});

