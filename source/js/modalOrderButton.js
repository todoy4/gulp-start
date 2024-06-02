import { openModal } from './modal.js';

const cart  = document.querySelector('.shopping-cart');
const orderButton = document.querySelector('.shopping-cart__order-button');
const modalCall = document.getElementById('modal-call');
const inputModal = document.querySelector('.modal__input');

inputModal.addEventListener('input', (event) => {
    const inputValue = event.target.value;
    const regex = /^\d+$/;
  
    if (!regex.test(inputValue)) {
      event.target.value = inputValue.replace(/\D/g, '');
    }
  });

orderButton.addEventListener('click', (event) => {
    cart.classList.add('modal--hidden');
    openModal(modalCall, event);
})

const modalSuccess = document.getElementById('modal_cart_success');
const buttonModalCall = document.querySelector('.button-style--blue');

buttonModalCall.addEventListener('click', (event) => {
    modalCall.classList.add('modal--hidden');
    openModal(modalSuccess, event);
})