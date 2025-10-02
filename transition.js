// Fade in when page loads
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");
});

// Fade out when clicking a link
document.querySelectorAll("a").forEach(link => {
  if (link.hostname === window.location.hostname) { // only internal links
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const href = this.href;

      document.body.classList.remove("fade-in");
      document.body.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = href;
      }, 500); // match transition duration
    });
  }
});
