let prevScrollpos = window.pageYOffset;
const navbar = document.getElementById("navbar");
const toggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navBtn = document.querySelectorAll(".nav-links a");


navBtn.forEach((btn) => {
  btn.addEventListener("click", function() {
    navLinks.classList.remove("active");
  })
})

window.onscroll = () => {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-100px";
    navLinks.classList.remove("active");
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

