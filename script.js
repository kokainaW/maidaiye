// Site Loaded Message
console.log("Site loaded for M. A. Idaiye & Co.");

// === Highlight Active Link in Navbar ===
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll('.topnav-right a');
  const currentPage = window.location.pathname.split('/').pop() || "index.html";

  navLinks.forEach(link => {
    const href = link.getAttribute('href');

    // Highlight the link if it matches current page or is "services.html" and page ends with "-form.html"
    if (
      href === currentPage ||
      (href === "services.html" && currentPage.endsWith("-form.html"))
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

// === Modal Service Request Handler ===
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('service-modal');
  if (!modal) return; // If modal doesn't exist, skip this block

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

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', e => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    // Simulate submission - replace with real backend or email integration
    alert(`Service requested: ${serviceType.value}`);
    modal.style.display = 'none';
    form.reset();
  });
});
