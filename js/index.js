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

function startAutoScroll() {
  scrollInterval = setInterval(() => {
    container.scrollLeft += scrollSpeed;

    // Jika sudah sampai akhir, kembali ke awal
    if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
      container.scrollLeft = 0;
    }
  }, 20); // ubah angka ini buat kecepatan smooth
}

function stopAutoScroll() {
  clearInterval(scrollInterval);
}

// Mulai auto scroll saat halaman siap
window.addEventListener("load", startAutoScroll);

// Berhenti sementara kalau mouse hover ke menu
container.addEventListener("mouseenter", stopAutoScroll);
container.addEventListener("mouseleave", startAutoScroll);

const containerimg = document.getElementById('auto-scroll-container');
let scrollAmount = 0;
const speed = 1; // kecepatan scroll, sesuaikan angka ini

function autoScroll() {
  scrollAmount += speed;
  if(scrollAmount >= containerimg.scrollWidth - containerimg.clientWidth) {
    scrollAmount = 0; // balik ke awal
  }
  containerimg.scrollLeft = scrollAmount;
  requestAnimationFrame(autoScroll);
}
autoScroll();