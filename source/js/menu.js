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

const productButton = document.querySelectorAll('.product__button');
const modal = document.querySelector('.modal');
const modalCloseButton = document.querySelector('.modal__close');
const modalResume = document.querySelector('.modal__resume');
const overlay = document.querySelector('.overlay');

productButton.forEach((button) => {
    button.addEventListener('click', () => {
        modal.classList.remove('modal--hidden');
        overlay.classList.remove('overlay--hidden');
        modalCloseButton.addEventListener('click', close);
        modalResume.addEventListener('click', close);
    });
});

const close = () => { 
    modal.classList.add('modal--hidden');
    overlay.classList.add('overlay--hidden');
    modalResume.removeEventListener('click', close);
    modalCloseButton.removeEventListener('click', close);  
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