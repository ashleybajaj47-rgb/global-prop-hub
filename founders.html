// Global Prop Hub — shared site behaviour

document.addEventListener('DOMContentLoaded', () => {

  // Mobile nav toggle
  const toggle = document.querySelector('.menu-toggle');
  const panel = document.querySelector('.mobile-panel');
  if (toggle && panel) {
    toggle.addEventListener('click', () => {
      panel.classList.toggle('open');
      toggle.setAttribute('aria-expanded', panel.classList.contains('open') ? 'true' : 'false');
    });
    panel.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => panel.classList.remove('open'));
    });
  }

  // Header shadow on scroll
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => {
      if (window.scrollY > 8) header.style.boxShadow = '0 6px 24px rgba(36,19,19,0.08)';
      else header.style.boxShadow = 'none';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  // Contact form -> structured WhatsApp message (no backend on static hosting)
  const form = document.getElementById('enquiry-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = (data.get('name') || '').toString().trim();
      const company = (data.get('company') || '').toString().trim();
      const phone = (data.get('phone') || '').toString().trim();
      const date = (data.get('date') || '').toString().trim();
      const type = (data.get('type') || '').toString().trim();
      const details = (data.get('details') || '').toString().trim();

      const lines = [
        `Enquiry from globalprophub.com website`,
        `Name: ${name}`,
        company ? `Company / Planner: ${company}` : null,
        `Phone: ${phone}`,
        date ? `Event Date: ${date}` : null,
        type ? `Project Type: ${type}` : null,
        details ? `Details: ${details}` : null,
      ].filter(Boolean).join('\n');

      const waNumber = '919999797963';
      const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(lines)}`;
      window.open(url, '_blank');
    });
  }

});
