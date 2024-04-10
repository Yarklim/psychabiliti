import {
  homePageTexts,
  teamPageTexts,
  partnershipPageTexts,
  newsPageTexts,
  projectsPageTexts,
  contactsPageTexts,
} from './languages-data';

const htmlEl = document.querySelector('[data-html]');
const languagesBtnEl = document.querySelector('[data-language-btn]');
const languageImgEl = document.querySelectorAll('[data-language-img]');
const currentPathName = window.location.pathname;
const baseName = getBaseName();

console.log(baseName);

const allLangs = ['uk', 'en'];

// =========== Get User choised language ===========
let currentLang =
  localStorage.getItem('user-lang') || checkBrowserLang() || 'uk';
let currentText = {};

// =========== Set active button lang and starting language ===========
document
  .querySelector(`[data-lang=${currentLang}]`)
  .classList.add('active-lang');

checkPagePathName();
changeLang();

// =========== User set new language ===========
languagesBtnEl.addEventListener('click', toggleLang);

function toggleLang() {
  if (currentLang === 'uk') {
    currentLang = 'en';

    htmlEl.setAttribute('lang', 'en');
  } else {
    currentLang = 'uk';
    htmlEl.setAttribute('lang', 'uk');
  }

  localStorage.setItem('user-lang', currentLang);
  languageImgEl.forEach(img => img.classList.toggle('active-lang'));
  changeLang();
}

function changeLang() {
  for (const key in currentText) {
    const elem = document.querySelectorAll(`[data-lang=${key}]`);
    if (elem) {
      elem.forEach(el => (el.textContent = currentText[key][currentLang]));
    }
  }
}

//   ============ Get current page path ============
function checkPagePathName() {
  switch (currentPathName) {
    case `${baseName}/team.html`:
      currentText = teamPageTexts;
      break;
    case `${baseName}/partnership.html`:
      currentText = partnershipPageTexts;
      break;
    case `${baseName}/news.html`:
      currentText = newsPageTexts;
      break;
    case `${baseName}/projects.html`:
      currentText = projectsPageTexts;
      break;
    case `${baseName}/contacts.html`:
      currentText = contactsPageTexts;
      break;
    default:
      currentText = homePageTexts;
  }
}

// =============== Check browser language ============
function checkBrowserLang() {
  const navLang = navigator.language.slice(0, 2).toLowerCase();
  const result = allLangs.some(el => el === navLang);

  return result ? navLang : null;
}

// =============== Get basename ===============
function getBaseName() {
  const idx = currentPathName.lastIndexOf('/');
  return currentPathName.slice(0, idx);
}
