const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
      });
    });

const currentPage = window.location.pathname.split("/").pop();
const allLinks = document.querySelectorAll(".desktop-nav a, .mobile-menu-link-custom");

allLinks.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("nav-link-active");
  }
});



