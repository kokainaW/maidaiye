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


// For Services

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('service-modal');
  const closeBtn = modal.querySelector('.modal-close');
  const titleEl = document.getElementById('modal-title');
  const serviceType = document.getElementById('service-type');
  const form = document.getElementById('service-form');

  document.querySelectorAll('.service-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.service-card');
      const svc = card.getAttribute('data-service') + ' Request';
      titleEl.textContent = svc;
      serviceType.value = card.getAttribute('data-service');
      modal.style.display = 'flex';
    });
  });

  closeBtn.addEventListener('click', () => modal.style.display = 'none');

  window.addEventListener('click', e => {
    if (e.target === modal) modal.style.display = 'none';
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    // Replace with your preferred form handling (e.g. mailto or backend)
    alert(`Service requested: ${serviceType.value}`);
    modal.style.display = 'none';
    form.reset();
  });
});
