// Optional: scroll to top or future interactivity
console.log("Site loaded for M. A. Idaiye & Co.");

// Highlight active link based on current page
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll('.topnav-right a');
  const currentPage = window.location.pathname.split('/').pop() || "index.html";

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });
});