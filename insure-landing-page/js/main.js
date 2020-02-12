const navHamburgerIcon = document.querySelector(".header__hamburger");
const nav = document.querySelector(".header__nav");
const navItems = document.querySelector(".header__nav__items");

navHamburgerIcon.addEventListener("click", () => {
  if (nav.classList.contains("nav-open")) {
    closeNav();
  } else {
    openNav();
  }
});

const closeNav = () => {
  navHamburgerIcon.src = "./images/icon-hamburger.svg";
  nav.classList.remove("nav-open");
  nav.setAttribute("aria-modal", true);
  navHamburgerIcon.setAttribute("aria-expanded", false);
  navHamburgerIcon.focus();
  nav.style.display = "none";
};

const openNav = () => {
  navHamburgerIcon.src = "./images/icon-close.svg";
  nav.classList.add("nav-open");
  navHamburgerIcon.setAttribute("aria-expanded", true);
  navItems.firstElementChild.firstElementChild.focus();
  document.addEventListener("keyup", navKeyStrokeClose, event);
  nav.style.display = "block";
};

const navKeyStrokeClose = event => {
  if (event.keyCode === 27) {
    closeNav();
    document.removeEventListener("keyup", navKeyStrokeClose);
  }
};
