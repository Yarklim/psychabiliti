export const createNavigation = () => {
  const adminMenu = document.createElement('div');
  adminMenu.classList.add('admin__menu');

  const navigation = document.createElement('nav');
  navigation.classList.add('admin__nav');

  const linkTeam = document.createElement('a');
  linkTeam.href = '#';
  linkTeam.classList.add('nav__link');
  linkTeam.setAttribute('aria-label', 'на сторінку Команда');
  linkTeam.textContent = 'Команда';

  const linkPartners = document.createElement('a');
  linkPartners.href = '#';
  linkPartners.classList.add('nav__link');
  linkPartners.setAttribute('aria-label', 'на сторінку Партнери');
  linkPartners.textContent = 'Партнери';

  const linkNews = document.createElement('a');
  linkNews.href = '#';
  linkNews.classList.add('nav__link');
  linkNews.setAttribute('aria-label', 'на сторінку Новини');
  linkNews.textContent = 'Новини';

  const linkProjects = document.createElement('a');
  linkProjects.href = '#';
  linkProjects.classList.add('nav__link');
  linkProjects.setAttribute('aria-label', 'на сторінку Проєкти');
  linkProjects.textContent = 'Проєкти';

  navigation.append(linkTeam, linkPartners, linkNews, linkProjects);
  adminMenu.append(navigation);

  return adminMenu;
};
