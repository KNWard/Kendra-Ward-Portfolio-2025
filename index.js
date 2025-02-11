// OPEN BURGER MENU
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".navbar");

function mobileMenu() {
  hamburger.classList.toggle("active");
  navList.classList.toggle("active");
}

hamburger.addEventListener("click", mobileMenu);

// CLOSE BURGER MENU
const navLink = document.querySelectorAll(".nav_link");

function closeMenu() {
  hamburger.classList.remove("active");
  navList.classList.remove("active");
}

navLink.forEach((n) => n.addEventListener("click", closeMenu));