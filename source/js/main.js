import { getData } from "./api.js";
import renderProducts from "./renderProducts.js";
import './slider.js';
import './productCart.js';
import './menu.js';


const catalogList = document.querySelector('.catalog__product-wrapper');
const catalogItemTemplate = document.querySelector('#product').content;

const dataProduct  = await getData('https://zsa-studio.ru/catalog.php');
renderProducts (dataProduct, catalogItemTemplate, catalogList, false, 'catalog__product');