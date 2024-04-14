const headerMenu = document.querySelector('[data-header]');
const heroSection = document.querySelector('[data-hero]');
const selectListEl = document.querySelector('[data-select-list]');
const selectItemEl = document.querySelectorAll('[data-select-item]');

// ================ Hero Section Position =================
let bodyTopPadding = headerMenu.offsetHeight;

const resizeBody = new ResizeObserver(entries => {
  for (const entry of entries) {
    const newHeight = entry.contentRect.height;

    bodyTopPadding = newHeight;

    heroSection.style.paddingTop = `${bodyTopPadding}px`;
  }
});

resizeBody.observe(headerMenu);

// ================ Sticky Menu ===================
let prevScrollPos = window.scrollY;

window.onscroll = () => {
  let currentScrollPos = window.scrollY;

  prevScrollPos > currentScrollPos
    ? (headerMenu.style.top = '0')
    : (headerMenu.style.top = '-100%');

  prevScrollPos = currentScrollPos;
};

// ================ Active Link & Select Menu =================
// const headerNavLink = document.querySelectorAll('.header__nav-link');

// headerNavLink.forEach(link => {
//   link.addEventListener('click', () => onChangeLinkColor(link));
// });

// selectItemEl.forEach(link => {
//   link.addEventListener('click', () => {
//     onChangeLinkColor(link);
//     selectListEl.textContent = link.textContent;
//     selectListEl.classList.add('active__select-list');
//   });
// });

function onChangeLinkColor(link) {
  const currentActiveLink = document.querySelector('.active__nav-link');

  if (currentActiveLink) {
    currentActiveLink.classList.remove('active__nav-link');
  }
  link.classList.add('active__nav-link');
}
