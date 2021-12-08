//Menu toggle
import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'

const menuIcon = document.querySelector('.menu-icon');
const menuOpen = document.querySelector('.menu-open')
const menuClose = document.querySelector('#menu-close');
const linkDiv = document.querySelector('.links');
const ulNav = document.querySelector('.nav-list');
const logoToggle = document.querySelector('.toggle-logo');
const logo = document.querySelector('.logo')



menuIcon.addEventListener('click', menuToggle);

/* Open Menu */
function menuToggle() {
    linkDiv.classList.toggle('change')
    menuOpen.classList.toggle('disappear')
    menuClose.classList.toggle('appear')
    logo.classList.toggle('disappearLogo')
    ulNav.classList.toggle('nav-list-opacity')

}

const swiper = new Swiper('.swiper-container', {
    cssMode: true,
    slidesPerView: "auto",
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }



});

const swiperOne = new Swiper('.mySwiper', {
    cssMode: true,
    loop: false,
    slidesPerView: "auto",
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})


ScrollReveal().reveal('.sphere-box', {
    duration: 1500,
    // reset: true,
    distance: '50px',
    interval: 20
    
})

ScrollReveal().reveal('.box-inner', {
    duration: 1500,
    reset: true,
    distance: '50px',
    // interval: 20,

    // origin: 'left'
})

ScrollReveal().reveal('.grid-three-box', {
    duration: 1500,
    reset: true,
    distance: '40px'
})

ScrollReveal().reveal('.post-box', {
    duration: 1500,
    // reset: true,
    interval: 10,
    distance: '10px'
})