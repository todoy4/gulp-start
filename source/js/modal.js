export class Modal {
    static overlay = document.querySelector('.overlay');
    static modals = document.querySelectorAll('.modal');

    constructor(modal) {
        this.modal = document.getElementById(modal);
        this.#modalCloseButton = this.modal.querySelector('.modal__close');
        this.#modalClosedBtn = this.modal.querySelector('.modal__resume');
    }

    static closeModalAll() {
        this.modals.forEach(modal => {
            if(modal.classList.contains('modal--hidden')) {
                Modal.overlay.classList.add('overlay--hidden');
                Modal.classList.add('modal--hidden');
                Modal.modalCloseButton.removeEventListener('click', this.closeModal.bind(this));

                if(Modal.modalClosedBtn) {
                    Modal.modalClosedBtn.removeEventListener('click', this.closeModal.bind(this));
                }
            }
        });
    }

    closeModal() {
        Modal.overlay.classList.add('overlay--hidden');
        this.modal.classList.add('modal--hidden');
    }

    openModal (event) {
        event.preventDefault();
        this.#modalCloseButton.addEventListener('click', this.closeModal.bind(this));
        Modal.overlay.addEventListener('click', this.closeModal.bind(this));

        if(this.#modalClosedBtn) {
            this.#modalClosedBtn.addEventListener('click', this.closeModal.bind(this));
        }

        Modal.overlay.classList.remove('overlay--hidden');
        this.modal.classList.remove('modal--hidden');
    }

    #modalCloseButton;
    #modalClosedBtn;
}