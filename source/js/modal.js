export const openModal = (modal) => {
    console.log('openModal');
    const modalCloseButton = modal.querySelector('.modal__close');
    modal.classList.remove('modal--hidden');

    modalCloseButton.addEventListener('click', () => {
        closeModal(modal);
    });
};

export const closeModal = (modal) => {
    console.log('closeModal');
    modal.classList.add('modal--hidden');
};