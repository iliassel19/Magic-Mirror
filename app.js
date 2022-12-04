const navBtn = document.querySelector(".hamburger");
const navList = document.querySelector(".navigation__list");
const navLinks = document.querySelectorAll(".navigation__item a");
const navOverlay = document.querySelector(".overlay");

// Function utilities
const toggleOpen = (el) => el.classList.toggle("open");

// Event Handler functions

const openNavMenu = () => {
  document.body.classList.toggle("overflow");
  toggleOpen(navBtn);
  toggleOpen(navList);
  toggleOpen(navOverlay);
};

const closeNavMenu = () => {
  if (document.body.classList.contains("overflow")) openNavMenu();
};
const smoothScroll = (e) => {
  e.preventDefault();
  const href = e.target.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth",
  });
};

// Listeners
navBtn.addEventListener("click", openNavMenu);
navLinks.forEach((link) => link.addEventListener("click", smoothScroll));
navLinks.forEach((link) => link.addEventListener("click", closeNavMenu));
