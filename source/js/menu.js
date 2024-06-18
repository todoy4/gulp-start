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
