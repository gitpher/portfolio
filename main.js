'use strict'

// Make navbar stick on top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--scroll');
    } else {
        navbar.classList.remove('navbar--scroll');
    }
})

