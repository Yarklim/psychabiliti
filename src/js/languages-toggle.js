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

const allLangs = ['ua', 'en'];

// =========== Get User choised language ===========
let currentLang =
  localStorage.getItem('user-lang') || checkBrowserLang() || 'ua';
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
  if (currentLang === 'ua') {
    currentLang = 'en';

    htmlEl.setAttribute('lang', 'en');
  } else {
    currentLang = 'ua';
    htmlEl.setAttribute('lang', 'ua');
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
  console.log(currentPathName);
  switch (currentPathName) {
    case '/team.html':
      currentText = teamPageTexts;
      break;
    case '/partnership.html':
      currentText = partnershipPageTexts;
      break;
    case '/news.html':
      currentText = newsPageTexts;
      break;
    case '/projects.html':
      currentText = projectsPageTexts;
      break;
    case '/contacts.html':
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
