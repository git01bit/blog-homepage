// Header
const headerMenu = document.querySelectorAll(".header-menu");

// Add class "active" to selected menu
headerMenu.forEach((selectedMenu) => {
  selectedMenu.addEventListener("click", () => {
    headerMenu.forEach((menu) => menu.classList.remove("active"));

    selectedMenu.classList.add("active");
  });
});

// Hamburger menu interactions
const hamburgerMenuIcon = document.getElementsByClassName(
  "hamburger-menu-icon"
);
const headerNavbar = document.getElementsByClassName("header-navbar");
const mobileHeaderCloseBtn = document.getElementsByClassName(
  "mobile-header-close-btn"
);

hamburgerMenuIcon[0].addEventListener("click", () => {
  headerNavbar[0].style.right = "0";

  headerNavbar[0].classList.add("header-navbar-animation");
  setTimeout(() => {
    headerNavbar[0].classList.remove("header-navbar-animation");
  }, 600);
});

mobileHeaderCloseBtn[0].addEventListener("click", () => {
  headerNavbar[0].style.right = "-320px";

  headerNavbar[0].classList.add("header-navbar-animation");
  setTimeout(() => {
    headerNavbar[0].classList.remove("header-navbar-animation");
  }, 600);
});

// Banner
const bannersContainer = document.querySelectorAll(".banner");

bannersContainer.forEach((bannerSelected) => {
  bannerSelected.addEventListener("click", () => {
    bannersContainer.forEach((banner) => {
      banner.classList.replace("active-banner", "deactive-banner");
      banner.classList.add("hide");

      setTimeout(banner.classList.add("banner-animation"), 300);
    });

    bannerSelected.classList.replace("deactive-banner", "active-banner");
    setTimeout(() => {
      bannerSelected.classList.remove("hide");
    }, 100);
  });
});
