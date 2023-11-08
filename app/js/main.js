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

// Navigation Menu's links
(function () {
  const headerListLink = document.querySelectorAll('.header__list-link');
  headerListLink.forEach((link) =>
    link.addEventListener('click', () => {
      headerListLink.forEach((otherLinks) => {
        otherLinks.classList.remove('active');
      });
      link.classList.add('active');
    })
  );
})();

// POP-UP MENU
(function () {
  const popUpMenu = document.querySelector('.pop-up');
  const popUpClose = document.querySelector('.pop-up__form-close');
  const popUpOpen = document.querySelector('.e-commerce__button');
  const popUpContainer = document.querySelector('.pop-up__container');

  popUpOpen.addEventListener('click', () => {
    popUpMenu.classList.remove('hiden');
    popUpClose.classList.remove('rotate');
  });

  popUpClose.addEventListener('click', () => {
    const hide = () => popUpMenu.classList.add('hiden');
    popUpClose.classList.add('rotate');
    setTimeout(() => hide(), 250);
  });
})();

// SWIPER FOR TEAM'S SECTION
const teamSwiper = new Swiper('.team__swiper', {
  direction: 'horizontal',
  loop: true,
  grabCursor: 'true',
  spaceBetween: 30,
  speed: 800,
  autoplay: {
    delay: 3000,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: 'true',
    dynamicBullets: 'true',
    dynamicMainBullets: 1,
  },
});
