const backdropEl = document.querySelector('[data-modal]');
const modalEl = document.querySelector('.modal');
const modalOpenEl = document.querySelectorAll('[data-modal-open]');
const modalCloseEl = document.querySelector('[data-modal-close]');

modalOpenEl.forEach(el => {
  el.addEventListener('click', openModal);
});

backdropEl.addEventListener('click', e => {
  if (e.currentTarget === e.target) {
    closeModal();
  }
});

modalCloseEl.addEventListener('click', closeModal);

function openModal() {
  backdropEl.classList.remove('is-hidden');

  const forBtnEl = document.querySelector('[data-submit-btn]');
  const checkInputEl = document.querySelector('[data-input-agree]');

  checkInputEl.addEventListener('change', () => {
    forBtnEl.toggleAttribute('disabled');
  });

  window.addEventListener('keydown', onEscKeyPress);
}

function closeModal() {
  backdropEl.classList.add('is-hidden');
}

function onEscKeyPress(e) {
  if (e.code === 'Escape') {
    closeModal();
  }
}
