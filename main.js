const headerMenu = document.querySelectorAll(".header-menu");

// Add class "active" to selected menu
headerMenu.forEach((selectedMenu) => {
  selectedMenu.addEventListener("click", () => {
    headerMenu.forEach((menu) => menu.classList.remove("active"));

    selectedMenu.classList.add("active");
  });
});
