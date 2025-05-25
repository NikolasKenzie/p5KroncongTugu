let prevScrollpos = window.pageYOffset;
const navbar = document.getElementById("navbar");
const toggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

window.onscroll = () => {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const container = document.querySelector(".home");
let scrollSpeed = 1; // semakin tinggi semakin cepat
let scrollInterval;


function showPopup() {
  document.getElementById("popupHistory").style.display = "flex";
}

function closePopup() {
  document.getElementById("popupHistory").style.display = "none";
}