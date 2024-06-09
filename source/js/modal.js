const overlay = document.querySelector('.overlay');

const closeModal = (event) => {
    const modals = document.querySelectorAll('.modal');

    modals.forEach(modal => {
        if(!modal.classList.contains('modal--hidden')) {
            const modalCloseButton = modal.querySelector('.modal__close');
            const modalClosedBtn = modal.querySelector('.modal__resume');

            if (event.target === modalCloseButton || event.target === overlay) {
                overlay.classList.add('overlay--hidden');
                modal.classList.add('modal--hidden');
                modalCloseButton.removeEventListener('click', closeModal);

                if(modalClosedBtn) {
                    modalClosedBtn.removeEventListener('click', closeModal);
                }
            }
        }
    });
};

export const openModal =  (modal, event) => {
    event.preventDefault();
    const modalCloseButton = modal.querySelector('.modal__close');
    const modalClosedBtn = modal.querySelector('.modal__resume');

    if(modalClosedBtn) {
        modalClosedBtn.addEventListener('click', closeModal);
    }

    overlay.classList.remove('overlay--hidden');
    modal.classList.remove('modal--hidden');

    modalCloseButton.addEventListener('click', closeModal);
};

document.addEventListener('click', closeModal);
