import {getStorage, removeFromStorage} from './storageLocal'

const editPructCount = (clone, product, operation = 'plus') => {
    const input = clone.querySelector('.shopping-cart__count').value;
    const totalEl = document.querySelector('.shopping-cart__total span');
    const totalPriceEl = document.querySelector('.shopping-cart__total-price span');

    const totalPrice = Number(totalPriceEl.textContent.replace(/\D/g, '')) - Number(product.price);

    if(operation === 'plus') {
        totalPriceEl.textContent = totalPrice + Number(product.price);
        clone.querySelector('.shopping-cart__count').value = Number(input) + 1;
        totalEl.textContent = Number(totalEl.textContent) + 1;
    }else{
        totalPriceEl.textContent = totalPrice - Number(product.price);
        clone.querySelector('.shopping-cart__count').value = Number(input) - 1;
        totalEl.textContent = Number(totalEl.textContent) - 1;
    }
}

export const renderCart = () => {
    const data = getStorage('cart');

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
        clone.querySelector('.shopping-сart__price').textContent = product.price;

        clone.querySelector('.shopping-cart__minus').addEventListener('click', () => {
            removeFromStorage('cart', product.id);
                      
            editPructCount(clone, product, 'minus');
        })

        clone.querySelector('.shopping-cart__plus').addEventListener('click', () => {
            addToStorage('cart', product);

            editPructCount(clone, product, 'plus');
        })

        fragment.append(clone);
    })

    targetEl.append(fragment);

    const totalEl = document.querySelector('.shopping-cart__total span');
    totalEl.textContent = data.length

    const totalPriceEl = document.querySelector('.shopping-cart__total-price span');
    totalPriceEl.textContent = data.reduce((acc, curr) => acc + Number(curr.price), 0)
}

renderCart();




























































// import { removeFromStorage, getStorage } from './storageLocal.js';
// import { openModal } from './modal.js';

// const modalCart = document.querySelector('#catalog-modal');
// const blockMenu = document.querySelector('.header__button-shop');
// const cart = document.querySelector('.shopping-cart');
// const cartList = cart.querySelector('.shopping-cart__list');
// const cartOpenedButton = blockMenu.querySelector('.header__button-link');
// const cartCount = blockMenu.querySelector('.header__item-counter');
// const costOfProduct = cart.querySelector('.shopping-cart__cost');
// const countOfProduct = cart.querySelector('.shopping-cart__amount');
// const cartProductTemplate = document.querySelector('#shopping-cart-product').content;


// const removeProductFromCart = (productId) => {
//     const node = cartList.querySelector(`[data-product-id="${productId}"]`);
//     node.remove();
//     cartCount.textContent = cartList.childElementCount;

//     if(!cartList.childElementCount) {
//         cart.classList.remove('user-menu__cart_active');
//     }
//     removeFromStorage(productId, 'cart');
// };

// const addProductToCart = (product) => {

//     const node = cartProductTemplate.querySelector('.shopping-cart__item').cloneNode(true);

//     node.dataset.productId = product.id;
//     node.querySelector('.shopping-cart__image').src = product.image;
//     node.querySelector('.shopping-cart__name').textContent = product.name;
//     node.querySelector('.shopping-cart__price').textContent = `${product.price} ₽`;

//     cartList.append(node);
//     cartCount.textContent = cartList.childElementCount;
//     countOfProduct.textContent = `${cartList.childElementCount} шт.`
//     costOfProduct.textContent = costOfCart();
// };

// const costOfCart = () => {
//     return getStorage('cart')
//         ?.map(el => Number(el.price))
//         .reduce((a,b) => {return a+b}
//         ,0
//     );
// };


// cartOpenedButton.addEventListener('click', (event) => {
//     openModal(cart, event);
// })


// if(getStorage('cart')?.length) {
//     getStorage('cart').forEach(product => {
//         addProductToCart(product);
//     });
//     cartCount.textContent = cartList.childElementCount;
// }

// export { removeProductFromCart, addProductToCart };
