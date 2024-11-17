/**
 * Begin Navbar & Button Toggle
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
//End Navbar & Button Toggle


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



/**
 * Begin Recent work tab feltering
 */
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
//End Recent work tab feltering



// Change Background Header
const scrollHeader = () => {
    const navbar = document.getElementById('navbar');
    const aTags = document.querySelectorAll("nav ul li a");
    const themeToggle = document.getElementById("theme-toggle");
    const hamburger = document.getElementById("hamburger");


    if (this.scrollY >= 250) {
        navbar.classList.add("bg-primaryColor");
        aTags.forEach((item) => {
            item.classList.add("text-whiteColor");
        });
        themeToggle.classList.add("text-whiteColor");
        hamburger.classList.add("text-whiteColor");
    } else {
        navbar.classList.remove("bg-primaryColor");
        aTags.forEach((item) => {
            item.classList.remove("text-whiteColor");
        });
        themeToggle.classList.remove("text-whiteColor");
        hamburger.classList.remove("text-whiteColor");
    }
};

window.addEventListener("scroll", scrollHeader);



// Show scroll up
const scrollUp = () => {
    const scrollUpBtn = document.getElementById('scroll-up');

    if (this.scrollY >= 250) {
        scrollUpBtn.classList.remove("-bottom-1/2");
        scrollUpBtn.classList.add("bottom-4");
    } else {
        scrollUpBtn.classList.add("-bottom-1/2");
        scrollUpBtn.classList.remove("bottom-4");
    }
};

window.addEventListener("scroll", scrollUp);

// Scroll sections active link
const activeLink = () => {
    const sections = documneet.querySelectorAll('section');
    const navLink = document.querySelector(".nav-link");

    let current = "hero";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;

        if (this.scrollY >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLink.forEach(item => {
        item.classList.remove("active");
        if (item.href.includes(current)) {
            item.classList.add("active");
        }
    });
};

window.addEventListener("scroll", activeLink);

// Scroll reveal animation