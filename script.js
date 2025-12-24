// 🔼 Scroll-to-top button
const scrollTopBtn = document.getElementById('scrollTopBtn');
const navbar = document.getElementById('mainNavbar');

let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  /* ============================
     Scroll-to-top button
  ============================ */
  if (scrollTopBtn) {
    scrollTopBtn.style.display = scrollY > 300 ? 'block' : 'none';
  }

  /* ============================
     Hide navbar on scroll down
     Show navbar on scroll up
  ============================ */
  if (scrollY > lastScrollTop && scrollY > 100) {
    // scrolling DOWN
    navbar.classList.add('navbar-hidden');
  } else {
    // scrolling UP
    navbar.classList.remove('navbar-hidden');
  }

  lastScrollTop = scrollY;
});

/* ============================
   Scroll to top (button click)
============================ */
scrollTopBtn?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ============================
   Mobile nav toggle (unchanged)
============================ */
document.getElementById('mobile-menu-toggle')?.addEventListener('click', () => {
  document.getElementById('navbarNav')?.classList.toggle('show');
});
