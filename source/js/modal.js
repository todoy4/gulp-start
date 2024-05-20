const overlay = document.querySelector('.overlay');

const closeModal = (event) => {
    const modals = document.querySelectorAll('.modal');
    
    modals.forEach(modal => {
        if(!modal.classList.contains('modal--hidden')) {
            const modalCloseButton = modal.querySelector('.modal__close');
   
            if (event.target === modalCloseButton || event.target === overlay) {
                modal.classList.add('modal--hidden');
                modalCloseButton.querySelector('.modal__close').removeEventListener('click', closeModal);
            }
        } 
    })
};

export const openModal =  (event, modal) => {
    event.preventDefault();
    const modalCloseButton = modal.querySelector('.modal__close');
    modal.classList.remove('modal--hidden');
    
    modalCloseButton.addEventListener('click', closeModal);
};

document.addEventListener('click', closeModal)
