// DARK/LIGHT MODE
document.getElementById('lightMode').addEventListener('click', lightScreenMode);
document.getElementById('darkMode').addEventListener('click', darkScreenMode);

function lightScreenMode() {
  document.getElementById('header').style.background = '#f4e7f9';
}


function darkScreenMode() {
  document.getElementById('header').style.backgroundColor = '#17181d';
}


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


