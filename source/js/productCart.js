import { Storage } from './storageLocal.js'
import { Modal } from './modal.js';
import formatPrice from './formatPrice.js';
import './modalOrderButton.js'

const blockMenu = document.querySelector('.header__button-shop');
const cartOpenedButton = blockMenu.querySelector('.header__button-link');
const cartCount = document.querySelector('.header__item-counter');
const modal = new Modal('shopping-cart');
const storage = new Storage();

cartOpenedButton.addEventListener('click', (event) => {
    modal.openModal(event);
})

const editPructCount = (clone, product, operation = 'plus') => {
    const input = clone.querySelector('.shopping-cart__count').value; 
    const totalEl = document.querySelector('.shopping-cart__amount span');
    const totalPriceEl = document.querySelector('.shopping-cart__cost');
    
    const totalPrice = Number(totalPriceEl.textContent.replace(/\D/g, ''));
    
    if(operation === 'plus') {
        totalPriceEl.textContent = formatPrice(totalPrice + Number(product.price));
        clone.querySelector('.shopping-cart__count').value = Number(input) + 1;
        cartCount.textContent = Number(cartCount.textContent) + 1;
        totalEl.textContent = Number(totalEl.textContent) + 1;
    }else{
        totalPriceEl.textContent = formatPrice(totalPrice - Number(product.price));
        clone.querySelector('.shopping-cart__count').value = Number(input) - 1;
        cartCount.textContent = Number(cartCount.textContent) - 1;
        totalEl.textContent = Number(totalEl.textContent) - 1;
    }
}

export const renderCart = () => {
    const data = storage.getStorage('cart'); ;

    if(!data?.length) {
        return;
    }

    const countsData = data.reduce((acc, curr) => {
        const id = curr.id;

        if(acc[id]) {
            acc[id] ++;
        } else {
            acc[id] = 1;
        }

        return acc;
    }, {})

    const uniqueData = [...new Set(data.map(JSON.stringify))].map(JSON.parse).sort((a, b) => a.id - b.id);

    const targetEl = document.querySelector('.shopping-cart__list');
    const template = document.querySelector('#shopping-cart-product').content.querySelector('.shopping-cart__item');

    const fragment = document.createDocumentFragment();

    targetEl.innerHTML = '';

    uniqueData.forEach(product => {
        const clone = template.cloneNode(true);

        clone.querySelector('.shopping-cart__count').value = countsData[product.id];
        clone.querySelector('.shopping-cart__image').src = product.image;
        clone.querySelector('.shopping-cart__name').textContent = product.name;
        clone.querySelector('.shopping-cart__price').textContent = product.price;

        clone.querySelector('.shopping-cart__minus').addEventListener('click', () => {
            if(clone.querySelector('.shopping-cart__count').value <= 0) {
                clone.querySelector('.shopping-cart__count').value = 0;
            }else{
                editPructCount(clone, product, 'minus');
                storage.removeFromStorage('cart', product.id);
            }
            
        })

        clone.querySelector('.shopping-cart__plus').addEventListener('click', () => {
            storage.addToStorage('cart', product);
            
            editPructCount(clone, product, 'plus');
        })

        fragment.append(clone);
    })

    targetEl.append(fragment);

    cartCount.textContent = data.length;
    
    const totalEl = document.querySelector('.shopping-cart__amount span');
    totalEl.textContent = data.length

    const totalPriceEl = document.querySelector('.shopping-cart__cost');
    totalPriceEl.textContent = formatPrice(data.reduce((acc, curr) => acc + Number(curr.price), 0));

}

renderCart();
