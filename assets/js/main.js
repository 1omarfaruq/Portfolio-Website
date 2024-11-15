/**
 * Navbar & Button Toggle
 */
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const navCloser = document.getElementById('nav-close');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.add('hidden')
    });
});

navCloser.addEventListener('click', () => {
    navMenu.classList.add('hidden')
});

hamburger.addEventListener('click', () => {
    navMenu.classList.remove('hidden')
});



/**
 * Begin Dark & Light Theme functionality
 */
const html = document.querySelector("html");
const themeBtn = document.getElementById("theme-toggle");

// This condition will run by default and set mode as light
if (localStorage.getItem("mode") == "dark") {
    darkMode();
} else {
    lightMode();
}

themeBtn.addEventListener("click", (event) => {
    if (localStorage.getItem("mode") == "light") {
        darkMode();
    } else {
        lightMode();
    }
});

function darkMode() {
    html.classList.add("dark");
    themeBtn.classList.replace("ri-moon-line", "ri-sun-line");
    localStorage.setItem("mode", "dark");
}

function lightMode() {
    html.classList.remove("dark");
    themeBtn.classList.replace("ri-sun-line", "ri-moon-line");
    localStorage.setItem("mode", "light");
}
//End Dark & Light Theme functionality



// Tabs

// Change Background Header

// Show scroll up

// Scroll sections active link

// Scroll reveal animation