document.addEventListener('DOMContentLoaded', () => {
    // navbar
    var navbar = document.getElementById('navbar');
    var navbarToggler = document.getElementById('toggle-bar');

    // Assign a function to the onclick event
    navbarToggler.onclick = function () {
        // Check the current height and toggle it
        if (navbar.style.height === 'auto') {
            navbar.style.height = '0px';
        } else {
            navbar.style.height = 'auto';
        }
    };




    // Select all images with the .menu-image class
    const menuImages = document.querySelectorAll('.menu-image');

    // Select the display image element
    const displayMenuImg = document.getElementById('display-menu-img');

    // Add a click event listener to each .menu-image
    menuImages.forEach(image => {
        image.addEventListener('click', function () {
            // Get the src of the clicked image
            const imgSrc = this.src;

            // Set the src of #display-menu-img to the clicked image's src
            displayMenuImg.src = imgSrc;
        });
    });

});