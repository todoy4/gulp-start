const headerOpenMenu = document.querySelector('.header__button-open');
const headerClosedMenu = document.querySelector('.header__button-closed');
const headerMenu = document.querySelector('.header__nav');

headerOpenMenu.addEventListener('click', () => {
    headerMenu.classList.add('header__nav--showed');
    headerClosedMenu.classList.remove('header__button-closed--hidden');
    headerOpenMenu.classList.add('header__button-open--hidden');
    headerClosedMenu.addEventListener('click', disappearanceMenu);
});

const disappearanceMenu = () => {
    headerMenu.classList.remove('header__nav--showed');
    headerClosedMenu.classList.add('header__button-closed--hidden');
    headerOpenMenu.classList.remove('header__button-open--hidden');
    headerClosedMenu.addEventListener('click', disappearanceMenu);
}

const footerButton = document.querySelector('.footer__button');
const mannerCloseButton = document.querySelector('.manner__close-button');
const manner = document.querySelector('.manner');

footerButton.addEventListener('click' , () => {
    manner.classList.remove('manner--hidden');
    overlay.classList.remove('overlay--hidden');
    mannerCloseButton.addEventListener('click', closed);
});

const closed = () => {
    manner.classList.add('manner--hidden');
    overlay.classList.add('overlay--hidden');
    mannerCloseButton.removeEventListener('click', closed);
}

footerButton.addEventListener( `click`, (event) => {
    event.preventDefault();
});