const overlay = document.querySelector('.overlay');

export const closeModal = (event) => {
    const modal = document.querySelector('.modal');
    const modalCloseButton = modal.querySelector('.modal__close');
    const modalResume = modal.querySelector('.modal__resume');
    
    if (event.target === modalCloseButton || event.target === modalResume || event.target === overlay) {
        modal.classList.add('modal--hidden');
        overlay.classList.add('overlay--hidden');
        modal.querySelector('.modal__close').removeEventListener('click', closeModal);
    }
};

export const openModal =  (event) => {
    const modal = document.querySelector('.modal');
    const modalCloseButton = modal.querySelector('.modal__close');
    const modalResume = modal.querySelector('.modal__resume');
    overlay.classList.remove('overlay--hidden');
    modal.classList.remove('modal--hidden');
    
    modalCloseButton.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
    if (modalResume) {
    modalResume.addEventListener('click', closeModal);
    }
    overlay.addEventListener('click', closeModal);
};

