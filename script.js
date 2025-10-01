const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });

    // Hide mobile menu after clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
      });
    });

// Highlight active link (desktop + mobile)
const currentPage = window.location.pathname.split("/").pop();
const allLinks = document.querySelectorAll(".desktop-nav a, .mobile-menu-link-custom");

allLinks.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("nav-link-active");
  }
});

// Carousel functionality for projects.html
document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.getElementById('carousel');
  const slides = document.querySelectorAll('.carousel-slide');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  const dotsContainer = document.getElementById('dots');
  if (!carousel || !slides.length || !prevBtn || !nextBtn || !dotsContainer) return;

  let currentIndex = 0;
  let autoSlideInterval;

  function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    Array.from(dotsContainer.children).forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentIndex);
    });
  }

  function goToSlide(idx) {
    currentIndex = idx;
    updateCarousel();
    resetAutoSlide();
  }

  slides.forEach((_, idx) => {
    const dot = document.createElement('button');
    dot.addEventListener('click', () => goToSlide(idx));
    if (idx === 0) dot.classList.add('active');
    dotsContainer.appendChild(dot);
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
    resetAutoSlide();
  });
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
    resetAutoSlide();
  });

  function autoSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  }

  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(autoSlide, 4000);
  }

    updateCarousel();
    autoSlideInterval = setInterval(autoSlide, 4000);
});



