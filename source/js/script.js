const openMenu = document.querySelector('.header__button-open');
const closedMenu = document.querySelector('.header__button-closed');
console.log(closedMenu);
const menu = document.querySelector('.header__nav');

openMenu.addEventListener('click', () => {
   menu.classList.add('header__nav--showed');
   closedMenu.classList.remove('header__button-closed--hidden');
   openMenu.classList.add('header__button-open--hidden');
   closedMenu.addEventListener('click', close);
});

const close = () => {
   menu.classList.remove('header__nav--showed');
   openMenu.classList.remove('header__button-open--hidden');
   closedMenu.removeEventListener('click', close);
};
