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
let tabs = document.querySelectorAll('.tab');
let indicator = document.querySelector('.indicator');
const all = document.querySelectorAll('.work_card');
const uiux = document.querySelectorAll('.uiux');
const branding = document.querySelectorAll('.branding');
const apps = document.querySelectorAll('.app');

indicator.style.width = tabs[0].getBoundingClientRect().width + 'px'
indicator.style.left = (tabs[0].getBoundingClientRect().left - tabs[0].parentElement.getBoundingClientRect().left) + 'px'

tabs.forEach( (tab) => {
    tab.addEventListener('click', () => {
        indicator.style.width = tab.getBoundingClientRect().width + 'px'
        indicator.style.left = (tab.getBoundingClientRect().left - tab.parentElement.getBoundingClientRect().left) + 'px'
        
        //managing hover text color
        tabs.forEach(t => t.classList.remove('text-whiteColor'));
        tab.classList.add("text-whiteColor"); 

        const tabVal = tab.getAttribute("data-tabs");
        
        all.forEach(item => {
            item.style.display = "none";
        });

        if (tabVal == 'uiux') {
            uiux.forEach(e => {
                e.style.display = 'block';
            });
        } else if (tabVal == 'branding') {
            branding.forEach(e => {
                e.style.display = 'block';
            });
        } else if (tabVal == 'app') {
            apps.forEach(e => {
                e.style.display = 'block';
            });
        } else {
            all.forEach(e => {
                e.style.display = 'block';
            });
        }
    });
});






// Change Background Header

// Show scroll up

// Scroll sections active link

// Scroll reveal animation