(function () {
  const tabsItems = document.querySelectorAll('.tabs__links-items');
  const tabsContents = document.querySelectorAll('.tabs__contents-item');

  tabsItems.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      tabsItems.forEach((tab) => {
        tab.classList.remove('active');
      });

      tabsContents.forEach((content) => {
        content.classList.remove('visible');
      });

      tabsItems[index].classList.add('active');
      tabsContents[index].classList.add('visible');
    });
  });
})();

(function () {
  const navOpen = document.querySelector('.header__box-burger');
  const navClose = document.querySelector('.header__nav-close');
  const headerNavigation = document.querySelector('.header__nav');

  navOpen.addEventListener('click', () => {
    headerNavigation.classList.add('opened');
    navClose.classList.remove('rotate');
  });

  navClose.addEventListener('click', () => {
    navClose.classList.add('rotate');
    headerNavigation.classList.remove('opened');
  });
})();
