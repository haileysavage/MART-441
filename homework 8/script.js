$(document).ready(function () {
    let images = ['images/taylor01.jpg', 'images/taylor02.jpg', 'images/taylor03.jpg'];
    let texts = ['Never be so clever, you forget to be kind. Never be so kind, you forget to be clever.', 'Bend when you can, snap when you have to.', 'Long story short, I survived.'];
    let shapes = ['red', 'blue', 'green'];

    let currentImageIndex = 0;
    let currentTextIndex = 0;
    let currentShapeIndex = 0;

    // Show initial image, text, and shape
    $('#image-container img').attr('src', images[currentImageIndex]).fadeIn(1000);
    $('#text-container p').text(texts[currentTextIndex]).fadeIn(1000);
    $('#shapes-container .shape').css('background-color', shapes[currentShapeIndex]).fadeIn(1000);

    function changeImage() {
        $('#image-container img').fadeOut(1000, function () {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            $(this).attr('src', images[currentImageIndex]).fadeIn(1000);
        });
    }

    function changeText() {
        $('#text-container p').fadeOut(1000, function () {
            currentTextIndex = (currentTextIndex + 1) % texts.length;
            $(this).text(texts[currentTextIndex]).fadeIn(1000);
        });
    }

    function changeShape() {
        let newColor = shapes[currentShapeIndex];
        $('#shapes-container .shape').fadeOut(1000, function () {
            currentShapeIndex = (currentShapeIndex + 1) % shapes.length;
            $(this).css('background-color', shapes[currentShapeIndex]).fadeIn(1000);
        });
    }

    function moveElement(element, x, y) {
        element.css({
            position: 'absolute', // Ensure the element is absolutely positioned
        }).animate({
            left: x,
            top: y
        }, 1000);
    }

    setInterval(changeImage, 3000); // Change image every 3 seconds
    setInterval(changeText, 4000);  // Change text every 4 seconds
    setInterval(changeShape, 5000); // Change shape color every 5 seconds

    setInterval(function () {
        let x = Math.random() * $(window).width();
        let y = Math.random() * $(window).height();
        moveElement($('#image-container img'), x, y);
        moveElement($('#text-container p'), x, y); // Add text movement here
        moveElement($('#shapes-container .shape'), x, y);
    }, 4000); // Move elements every 4 seconds
});
