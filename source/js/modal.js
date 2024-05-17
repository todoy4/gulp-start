const overlay = document.querySelector('.overlay');

const closeModal = (event) => {
    const modals = document.querySelectorAll('.modal');

    modals.forEach(modal => {
        if(modal.classList.contains('modal--hidden')) {
            const modalCloseButton = modal.querySelector('.modal__close');

            if(event.target === overlay || event.target === modalCloseButton) {
                modal.classList.add('modal--hidden');
                modalCloseButton.removeEventListener('click', closeModal);
            }
        }
    })
};

export const openModal =  (modal, event) => {
    event.preventDefault();
    const modalCloseButton = modal.querySelector('.modal__close');
    modal.classList.remove('modal--hidden');

    modalCloseButton.addEventListener('click', closeModal);
};

document.addEventListener('click', closeModal)