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
  nav.style.visibility = "hidden";
};

const openNav = () => {
  navHamburgerIcon.src = "./images/icon-close.svg";
  nav.classList.add("nav-open");
  nav.style.visibility = "visible";
};
