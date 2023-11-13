// TABS
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

// NAVIGATION
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
  const popUpMenuClose = document.querySelector('.pop-up__form-close');
  const consultationButton = document.querySelector('.e-commerce__button');
  const popUpContainer = document.querySelector('.pop-up__container');

  function openPopUp() {
    popUpMenu.classList.remove('hiden');
    popUpMenuClose.classList.remove('rotate');
    document.addEventListener('click', closePopUpOutside);
  }

  function closePopUp() {
    const hide = () => {
      popUpMenu.classList.add('hiden');
      document.removeEventListener('click', closePopUpOutside);
    };
    popUpMenuClose.classList.add('rotate');
    setTimeout(() => hide(), 250);
  }

  function closePopUpOutside(event) {
    if (
      event.target !== popUpContainer &&
      event.target !== consultationButton &&
      !popUpContainer.contains(event.target)
    ) {
      closePopUp();
    }
  }

  if (consultationButton) {
    consultationButton.addEventListener('click', () => {
      openPopUp();
    });
  }

  if (popUpMenuClose) {
    popUpMenuClose.addEventListener('click', () => {
      closePopUp();
    });
  }
})();

// SWITCHER
(function () {
  const switcherBtn = document.querySelector('.publications__button-switcher');
  if (switcherBtn) {
    switcherBtn.addEventListener('click', () => {
      switcherBtn.classList.toggle('publications__button-switcher--active');
    });
  }
})();

// SWIPER FOR TEAM'S SECTION
const teamSwiper = document.querySelector('.team__swiper');

if (teamSwiper) {
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
}
