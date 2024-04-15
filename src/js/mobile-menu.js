const burger = document.querySelector('[data-mob-menu]');
const mobMenu = document.querySelector('[data-nav]');

burger.addEventListener('click', () => {
  burger.classList.toggle('is-open');
  mobMenu.classList.toggle('menu-open');
});

document.querySelectorAll('[data-mob-link]').forEach(el =>
  el.addEventListener('click', e => {
    burger.classList.remove('is-open');
    mobMenu.classList.remove('menu-open');
  })
);

window.matchMedia('(min-width: 992px)').addEventListener('change', e => {
  if (!e.matches) return;
  burger.classList.remove('is-open');
  mobMenu.classList.remove('menu-open');
});
