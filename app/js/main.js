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

// SWIPER FOR TEAM'S SECTION

const teamSwiper = new Swiper('.team__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  grabCursor: 'true',
  spaceBetween: 30,
  speed: 800,
  // autoplay: {
  //   delay: 3000,
  // },

  // effect: 'flip',
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: 'true',
    dynamicBullets: 'true',
    dynamicMainBullets: 1,
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});
