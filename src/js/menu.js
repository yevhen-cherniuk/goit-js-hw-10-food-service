import menuTemplate from '../templates/menu-template.hbs';
import menuData from '../data/menu.json';

const menuRef = document.querySelector('.js-menu');

const markupMenu = menuTemplate(menuData);
menuRef.insertAdjacentHTML('beforeend', markupMenu);