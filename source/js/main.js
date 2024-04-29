import products from "./products.js";
import renderProducts from "./renderProducts.js";


const catalogList = document.querySelector('.catalog__product-wrapper');
const catalogItemTemplate = document.querySelector('#product').content;

renderProducts(products, catalogItemTemplate, catalogList, false, 'catalog__product');