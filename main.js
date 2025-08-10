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
    }, 50);
  });
});

// Blog post filters section
const filterTitles = document.querySelectorAll(".filter-titles div");
const filtersContent = document.querySelectorAll(".filters-content > div");
const desktopReadAllBtn = document.querySelector(".desktop-read-all-btn span");
const mobileReadAllBtn = document.querySelector(".mobile-read-all-btn span");

filterTitles.forEach((selectedFilter) => {
  selectedFilter.addEventListener("click", () => {
    filterTitles.forEach((filter) => {
      filter.classList.remove("active-filter");
    });

    filtersContent.forEach((content) => {
      content.classList.add("not-visible");
    });

    if (selectedFilter.textContent === "جدیدترین‌ها") {
      document
        .getElementById("articles-latest")
        .classList.remove("not-visible");

      desktopReadAllBtn.textContent = "مشاهده همه جدیدترین‌ها";
      mobileReadAllBtn.textContent = "مشاهده همه جدیدترین‌ها";
    } else if (selectedFilter.textContent === "محبوب‌ترین‌ها") {
      document
        .getElementById("articles-popular")
        .classList.remove("not-visible");

      desktopReadAllBtn.textContent = "مشاهده همه محبوب‌ترین‌ها";
      mobileReadAllBtn.textContent = "مشاهده همه محبوب‌ترین‌ها";
    } else if (selectedFilter.textContent === "بحث‌برانگیزترین‌ها") {
      document
        .getElementById("articles-controversial")
        .classList.remove("not-visible");

      desktopReadAllBtn.textContent = "مشاهده همه بحث‌برانگیزترین‌ها";
      mobileReadAllBtn.textContent = "مشاهده همه بحث‌برانگیزترین‌ها";
    } else if (selectedFilter.textContent === "پیشنهادی‌ها") {
      document
        .getElementById("articles-recommendation")
        .classList.remove("not-visible");

      desktopReadAllBtn.textContent = "مشاهده همه پیشنهادی‌ها";
      mobileReadAllBtn.textContent = "مشاهده همه پیشنهادی‌ها";
    }

    selectedFilter.classList.add("active-filter");
  });
});
