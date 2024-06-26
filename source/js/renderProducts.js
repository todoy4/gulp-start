import { renderCart } from './productCart.js';
import { Storage } from './storageLocal.js';
import { Modal } from './modal.js';



export default (products, template, target, isTargetList = false, templateClass = '') => {

    const fragment = document.createDocumentFragment();

    let productEl = template.querySelector('.catalog__product');

    if(isTargetList) {
        const node = document.createElement('li');
        node.innerHTML = productEl.innerHTML;

        Array.prototype.forEach.call(productEl.attributes, function( attr ) {
            node.setAttribute( attr.name, attr.value );
        });
        node.classList.add(templateClass);

        productEl = node;
    }

products.forEach(product => {
    const itemEl = productEl.cloneNode(true);
    const productItem = itemEl.querySelector('.product');
    const nameEl = itemEl.querySelector('.product__name');
    const imageEl = itemEl.querySelector('.product__image');
    const priceEl = itemEl.querySelector('.product__price-new');
    const oldPriceEl = itemEl.querySelector('.product__price-old');
    const buttonEl = itemEl.querySelector('.product__button');
    const modal = new Modal('catalog-modal');
    const storage = new Storage();


    const { id, isBig: big, status, image: img, name, price, oldPrice } = product;

    buttonEl.addEventListener('click', (event) => {
        storage.addToStorage('cart', product);
        modal.openModal(event);
        renderCart();
    });




    itemEl.dataset.productId = id;
    imageEl.src = img;
    nameEl.textContent = name;
    priceEl.textContent = `${price} ₽`;
    oldPriceEl.textContent = `${oldPrice} ₽`;

    if(big) {
        productItem.classList.add('product--big');
        itemEl.classList.add('catalog__product--g-1-3');
        buttonEl.classList.add('product__button--big');
    } else {
        itemEl.classList.add('catalog__product--small');
    }
    if(status?.length) {
        productItem.classList.add('product--${status}');
    }
    fragment.appendChild(itemEl);
    });

    target.innerHTML = '';
    target.appendChild(fragment);
}


