/* =============================================
   Simandhar Print N Pack — Main JS
   ============================================= */

// Mobile Nav Toggle
const navToggle = document.getElementById('navToggle');
const mobileNav = document.getElementById('mobileNav');

if (navToggle && mobileNav) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    mobileNav.classList.toggle('open');
  });

  // Close on link click
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('open');
      mobileNav.classList.remove('open');
    });
  });
}

// Highlight active nav link
const currentPath = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPath || (currentPath === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// Scroll-reveal animation
const observerOptions = {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.product-card, .why-card, .testimonial-card, .about-grid, .contact-detail-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(28px)';
  el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
  revealObserver.observe(el);
});

document.addEventListener('DOMContentLoaded', () => {
  // Short delay so initial page paint completes
  setTimeout(() => {
    document.querySelectorAll('.product-card, .why-card, .testimonial-card, .about-grid, .contact-detail-item').forEach((el, i) => {
      el.style.transitionDelay = `${i * 0.07}s`;
    });
  }, 100);
});

// Add .revealed styles inline
const style = document.createElement('style');
style.textContent = '.revealed { opacity: 1 !important; transform: translateY(0) !important; }';
document.head.appendChild(style);

// Contact form submission (Formspree/Web3Forms handled via HTML)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('[type="submit"]');
    const originalText = btn.innerHTML;
    btn.innerHTML = 'Sending…';
    btn.disabled = true;

    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        contactForm.innerHTML = `
          <div style="text-align:center;padding:3rem 2rem;">
            <div style="font-size:3rem;margin-bottom:1rem;">✅</div>
            <h3 style="color:var(--navy);margin-bottom:0.5rem;">Message Sent!</h3>
            <p>We'll get back to you within 24 hours.<br>Or reach us directly on WhatsApp.</p>
          </div>`;
      } else {
        throw new Error('Failed');
      }
    } catch {
      btn.innerHTML = originalText;
      btn.disabled = false;
      alert('Something went wrong. Please WhatsApp or call us directly.');
    }
  });
}
