import { addProductToCart } from './productCart.js';

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
    

    const { id, isBig: big, status, image: img, name, price, oldPrice } = product;
    
    buttonEl.addEventListener('click', () => {
        addProductToCart(
            {
                id: product.id,
                name: product.name,
                image: product.image,
                price: product.price,
            },
            true
        );
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

    