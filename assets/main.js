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

  document.querySelectorAll('[style-hover]').forEach((el) => {
    const decls = el.getAttribute('style-hover').split(';')
      .map((s) => s.trim()).filter(Boolean)
      .map((decl) => {
        const idx = decl.indexOf(':');
        return [decl.slice(0, idx).trim(), decl.slice(idx + 1).trim()];
      });
    el.addEventListener('mouseenter', () => {
      decls.forEach(([prop, val]) => el.style.setProperty(prop, val));
    });
    el.addEventListener('mouseleave', () => {
      decls.forEach(([prop]) => el.style.removeProperty(prop));
    });
  });
});
