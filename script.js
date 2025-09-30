const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Hide mobile menu after clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });

// Highlight active nav link (desktop + mobile)
const currentPage = window.location.pathname.split("/").pop(); 

// Select both desktop and mobile nav links
const navLinks = document.querySelectorAll("nav a, #mobile-menu a");

navLinks.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("text-red-600", "font-bold");
  }
});


// Carousel
    const carousel = document.getElementById("carousel");
const slides = carousel.children.length;
let index = 0;

// Create dots dynamically
const dotsContainer = document.getElementById("dots");
const dots = [];

for (let i = 0; i < slides; i++) {
  const dot = document.createElement("button");
  dot.className =
    "w-3 h-3 rounded-full bg-gray-400 hover:bg-red-500 transition";
  if (i === 0) dot.classList.add("bg-red-600"); // highlight first dot
  dot.addEventListener("click", () => {
    index = i;
    showSlide(index);
    resetAutoSlide();
  });
  dotsContainer.appendChild(dot);
  dots.push(dot);
}

// Show slide function
function showSlide(i) {
  carousel.style.transform = `translateX(-${i * 100}%)`;
  updateDots();
}

// Update dot colors
function updateDots() {
  dots.forEach((dot, i) => {
    dot.classList.remove("bg-red-600");
    dot.classList.add("bg-gray-400");
    if (i === index) {
      dot.classList.remove("bg-gray-400");
      dot.classList.add("bg-red-600");
    }
  });
}

// Next & Prev
function nextSlide() {
  index = (index + 1) % slides;
  showSlide(index);
}
function prevSlide() {
  index = (index - 1 + slides) % slides;
  showSlide(index);
}

// Buttons
document.getElementById("next").addEventListener("click", () => {
  nextSlide();
  resetAutoSlide();
});
document.getElementById("prev").addEventListener("click", () => {
  prevSlide();
  resetAutoSlide();
});

// Auto-slide
let autoSlide = setInterval(nextSlide, 5000);
function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(nextSlide, 5000);
}

// Init
showSlide(index);



