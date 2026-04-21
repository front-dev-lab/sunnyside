import './scss/style.scss';

const body = document.body;
const burger = body.querySelector('.burger');
const burgerLine = burger.querySelector('.burger__line');
const menu = document.querySelector('.menu');
const menuContent = menu.querySelector('.menu__content');

window.addEventListener('load', () => {
  menu.classList.remove('menu--no-transition-delay');
  menuContent.classList.remove('menu__content--no-transition-duration');
});

window.addEventListener('click', (e) => {
  if (e.target.closest('.menu') || e.target.closest('.burger')) {
    return;
  }

  burger.classList.remove('burger--active');
  burgerLine.classList.remove('burger__line--active');
  menu.classList.remove('menu--active');
  menuContent.classList.remove('menu__content--active');
});

burger.addEventListener('click', () => {
  burger.classList.toggle('burger--active');
  burgerLine.classList.toggle('burger__line--active');
  menu.classList.toggle('menu--active');
  menuContent.classList.toggle('menu__content--active');
});
