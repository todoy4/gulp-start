export class Modal {
    constructor(modal) {
        this.modal = document.getElementById(modal);
        this.overlay = document.querySelector('.overlay');
        this.modalCloseButton = this.modal.querySelector('.modal__close');
        this.modalClosedBtn = this.modal.querySelector('.modal__resume');
    }


    closeModal() {
        this.overlay.classList.add('overlay--hidden');
        this.modal.classList.add('modal--hidden');
        this.modalCloseButton.removeEventListener('click', this.closeModal.bind(this));

        if(this.modalClosedBtn) {
            this.modalClosedBtn.removeEventListener('click', this.closeModal.bind(this));
        }
    }

    openModal (event) {
        event.preventDefault();
        this.modalCloseButton.addEventListener('click', this.closeModal.bind(this));
        this.overlay.addEventListener('click', this.closeModal.bind(this));

        if(this.modalClosedBtn) {
            this.modalClosedBtn.addEventListener('click', this.closeModal.bind(this));
        }

        this.overlay.classList.remove('overlay--hidden');
        this.modal.classList.remove('modal--hidden');
    }

}

