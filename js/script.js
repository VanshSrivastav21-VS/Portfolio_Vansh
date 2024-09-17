let menuBtn = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menuBtn.onclick = () => {
    header.classList.toggle('active');
}


// Select theme toggler
let themeToggler = document.querySelector('#theme-toggler');

// Add event listener to the theme toggler
themeToggler.onclick = () => {
    document.body.classList.toggle('active');

    // Change the icon between sun and moon
    if (themeToggler.classList.contains('fa-moon')) {
        themeToggler.classList.replace('fa-moon', 'fa-sun');
    } else {
        themeToggler.classList.replace('fa-sun', 'fa-moon');
    }
};
    
