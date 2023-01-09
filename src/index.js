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
