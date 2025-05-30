let prevScrollpos = window.pageYOffset;
const navbar = document.getElementById("navbar");
const toggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});


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
let scrollSpeed = 1; 
let scrollInterval;


function showPopup() {
  document.getElementById("popupHistory").style.display = "flex";
  navbar.style.display = 'none'

}

function closePopup() {
  document.getElementById("popupHistory").style.display = "none";
}

const scrollWrapper = document.querySelector('.scroll-wrapper-alatMusik');

scrollWrapper.addEventListener('wheel', function(scroll) {
  if (scroll.deltaY !== 0) {
    scroll.preventDefault();
    this.scrollLeft += scroll.deltaY; 
  }
});

const navLocation = document.getElementById("navLocation")
navLocation.onclick = function() {
  window.open("https://maps.app.goo.gl/4jeqQgydLuVS1Mjk7?g_st=iw");
}


const navInstagram = document.getElementById("logoInstagram")
const navSpotify = document.getElementById("logoSpotify")
const navTiktok = document.getElementById("logoTiktok")
const navYoutube = document.getElementById("logoYoutube")
navInstagram.onclick = function() {
  window.open("https://www.instagram.com/krontjongtoegoe?igsh=MTM2Ym56NTY1MWxhdA==")

}
navSpotify.onclick = function() {
  window.open("https://open.spotify.com/artist/09vjUcI4LLaZg5HOxHlleZ?si=L5R5kl2eSnuLhpwqAX5q5A")
}
navTiktok.onclick = function() {
  window.open("https://www.tiktok.com/@krontjongtoegoe?_t=ZS-8wkdMPOIiVG&_r=1")
}
navYoutube.onclick = function() {
  window.open("https://youtube.com/@krontjongtoegoemusic?si=6SO0kSjJORqmzpcc")
}
