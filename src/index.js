import './style.scss';

const { body } = document;
const nav = document.querySelector('.nav');
const navList = document.querySelector('.nav__list');
const burgerBtn = document.querySelector('.burger');
const shadowWrapper = document.querySelector('.shadow');

let menuIsOpen = false;

function menuOpener() {
    navList.classList.toggle('active');
    burgerBtn.classList.toggle('active');
    shadowWrapper.classList.toggle('active');
    menuIsOpen = !menuIsOpen;
    body.style.overflowY = body.style.overflowY === 'hidden' ? 'visible' : 'hidden';
}

burgerBtn.addEventListener('click', menuOpener);

window.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && (!burgerBtn.contains(e.target)) && menuIsOpen) {
        menuOpener();
    }
    if (nav.classList.contains('nav') && (e.target.classList.contains('nav__link')) && menuIsOpen) {
        menuOpener();
    }
});

const slides = document.getElementsByClassName('slider__item');
const prev = document.querySelector('.slider__prev-btn');
const next = document.querySelector('.slider__next-btn');
let slideIndex = 1;

function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
}

showSlides(slideIndex);

prev.addEventListener('click', () => { showSlides(slideIndex -= 1); });

next.addEventListener('click', () => { showSlides(slideIndex += 1); });
