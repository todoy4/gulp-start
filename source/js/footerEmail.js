import { Modal } from './modal.js';

const modal = new Modal('footer-modal');
const footerButton = document.querySelector('.footer__button');

footerButton.addEventListener('click', (event) => {
    modal.openModal(event);
})