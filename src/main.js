import './index.css'
import Header from './components/Header.js'
import Hero from './components/Hero.js'
import Services from './components/Services.js'
import Process from './components/Process.js'
import Benefits from './components/Benefits.js'
import FAQ from './components/FAQ.js'
import Footer from './components/Footer.js'

document.querySelector('#app').innerHTML = `
  ${Header()}
  <main>
    ${Hero()}

    <!-- Services Section -->
    ${Services()}


    <!-- Process Section -->
    ${Process()}

    <!-- Benefits Section -->
    ${Benefits()}
    
    <!-- FAQ Section -->
    ${FAQ()}
    
    <section class="py-20 text-center relative overflow-hidden">
      <!-- Background pattern for CTA -->
      <div style="position: absolute; inset: 0; background: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 70%);"></div>

      <div class="container relative z-10 reveal reveal-scale">
        <h2 class="text-5xl font-bold mb-6 leading-tight" style="color: white;">Stop losing time to manual work.</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto" style="color: #a3a3a3;">
          Book a free 20-minute call. We will map out exactly what your team should never have to do manually again.
        </p>
        <a href="/booking.html" target="_blank" class="btn btn-primary text-lg px-8 py-4 rounded-full font-bold">
          Book Your Free Meeting
        </a>
      </div>
    </section>
  </main>
  ${Footer()}
`

// ========== SCROLL REVEAL: Intersection Observer ==========
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        // Remove active class when element leaves viewport so it re-animates
        entry.target.classList.remove('active');
      }
    });
  }, {
    threshold: 0.1,      // Trigger when 10% of element is visible
    rootMargin: '0px'  // Default rootMargin
  });

  revealElements.forEach(el => observer.observe(el));
}

// ========== MOBILE MENU TOGGLE ==========
function initMobileMenu() {
  const menuBtn = document.querySelector('#mobile-menu-btn');
  const closeBtn = document.querySelector('#mobile-menu-close');
  const overlay = document.querySelector('#mobile-menu-overlay');
  const navLinks = document.querySelectorAll('.mobile-nav-link, .mobile-nav-cta');

  if (menuBtn && overlay) {
    const openMenu = () => {
      overlay.classList.add('active');
      menuBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
      overlay.classList.remove('active');
      menuBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    };

    menuBtn.addEventListener('click', openMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);

    navLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }
}

// Initialize after DOM is rendered
requestAnimationFrame(() => {
  initScrollReveal();
  initMobileMenu();
});
