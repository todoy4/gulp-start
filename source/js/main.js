import { networking } from "./networking.js";
import renderProducts from "./renderProducts.js";


const catalogList = document.querySelector('.catalog__product-wrapper');
const catalogItemTemplate = document.querySelector('#product').content;

const dataProduct  = await networking('https://zsa-studio.ru/catalog.php');
renderProducts (dataProduct, catalogItemTemplate, catalogList, false, 'catalog__product');