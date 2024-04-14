import { baseName, currentPathName } from './languages-toggle';

const headerMenu = document.querySelector('[data-header]');
const heroSection = document.querySelector('[data-hero]');
const linkHome = document.querySelectorAll('[data-page-home]');
const linkTeam = document.querySelectorAll('[data-page-team]');
const linkPartnership = document.querySelectorAll('[data-page-partnership]');
const linkNews = document.querySelectorAll('[data-page-news]');
const linkProjects = document.querySelectorAll('[data-page-projects]');
const linkFaq = document.querySelectorAll('[data-page-faq]');

// ================ Hero Section Position =================
// let bodyTopPadding = headerMenu.offsetHeight;

// const resizeBody = new ResizeObserver(entries => {
//   for (const entry of entries) {
//     const newHeight = entry.contentRect.height;

//     bodyTopPadding = newHeight;

//     heroSection.style.paddingTop = `${bodyTopPadding}px`;
//   }
// });

// resizeBody.observe(headerMenu);

// ================ Sticky Menu ===================
let prevScrollPos = window.scrollY;

window.onscroll = () => {
  let currentScrollPos = window.scrollY;

  prevScrollPos > currentScrollPos
    ? (headerMenu.style.top = '0')
    : (headerMenu.style.top = '-100%');

  prevScrollPos = currentScrollPos;
};

// ================ Active Link =================
function onChangeLinkColor() {
  const currentActiveLink = document.querySelectorAll('.active-page');

  if (currentActiveLink) {
    currentActiveLink.forEach(el => el.classList.remove('active-page'));
  }
  switch (currentPathName) {
    case `${baseName}/team.html`:
      linkTeam.forEach(el => el.classList.add('active-page'));
      break;
    case `${baseName}/partnership.html`:
      linkPartnership.forEach(el => el.classList.add('active-page'));
      break;
    case `${baseName}/news.html`:
      linkNews.forEach(el => el.classList.add('active-page'));
      break;
    case `${baseName}/projects.html`:
      linkProjects.forEach(el => el.classList.add('active-page'));
      break;
    case `${baseName}/faq.html`:
      linkFaq.forEach(el => el.classList.add('active-page'));
      break;
    default:
      linkHome.forEach(el => el.classList.add('active-page'));
  }
}
onChangeLinkColor();
