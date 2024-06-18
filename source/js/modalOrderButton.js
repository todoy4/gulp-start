import { Modal } from './modal.js';

const cart  = document.querySelector('.shopping-cart');
const orderButton = document.querySelector('.shopping-cart__order-button');
const inputModal = document.querySelector('.modal__input');
const modalCall = new Modal('modal-call');

inputModal.addEventListener('input', (event) => {
    const inputValue = event.target.value;
    const regex = /^\d+$/;
  
    if (!regex.test(inputValue)) {
      event.target.value = inputValue.replace(/\D/g, '');
    }
  });

orderButton.addEventListener('click', (event) => {
    cart.classList.add('modal--hidden');
    modalCall.openModal(event);
})

const buttonModalCall = document.querySelector('.button--blue');
const modalSuccess = new Modal('modal_cart_success');


buttonModalCall.addEventListener('click', (event) => {
    modalCall.closeModal('modal--hidden');
    modalSuccess.openModal(event);
})