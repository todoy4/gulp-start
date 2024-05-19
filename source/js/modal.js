const overlay = document.querySelector('.overlay');

export const closeModal = (event) => {
    const modal = event.target.closest('.modal');
    
    if (modal || event.target === overlay) {
        modal.classList.add('modal--hidden');
        overlay.classList.add('overlay--hidden');
        modal.querySelector('.modal__close').removeEventListener('click', closeModal);
    }
};

export const openModal =  (modal, event) => {
    event.preventDefault();
    const modalCloseButton = modal.querySelector('.modal__close');
    overlay.classList.remove('overlay--hidden');
    modal.classList.remove('modal--hidden');
    
    modalCloseButton.addEventListener('click', closeModal);
};

document.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
