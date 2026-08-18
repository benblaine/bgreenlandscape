document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.faq-item').forEach((item) => {
    const button = item.querySelector('.faq-q');
    button.addEventListener('click', () => {
      const isOpen = item.classList.toggle('open');
      button.querySelector('.icon').textContent = isOpen ? '−' : '+';
      button.setAttribute('aria-expanded', String(isOpen));
    });
  });

  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }
});
