const titleHamburger = document.querySelector(".title-hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");

  titleHamburger.addEventListener("click", () => {
    titleHamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });