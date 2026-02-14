import './index.css'
import Header from './components/Header.js'
import Hero from './components/Hero.js'
import Services from './components/Services.js'
import Process from './components/Process.js'
import Benefits from './components/Benefits.js'
import Footer from './components/Footer.js'

document.querySelector('#app').innerHTML = `
  ${Header()}
  <main>
    ${Hero()}

    <!-- Services Section -->
    ${Services()}

    <!-- Process Section -->
    ${Process()}
    
    <!-- Benefits (Why Choose Us) -->
    ${Benefits()}
    
    <section class="py-20 text-center bg-black text-white relative overflow-hidden">
      <!-- Background pattern for CTA -->
      <div style="position: absolute; inset: 0; background: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 70%);"></div>

      <div class="container relative z-10 reveal reveal-scale">
        <h2 class="text-5xl font-bold mb-6 text-white leading-tight">Ready to Automate?</h2>
        <p class="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Schedule a free consultation to see how we can save you hours every week.
        </p>
        <a href="/booking.html" target="_blank" class="btn btn-primary bg-white text-black hover:bg-gray-200 text-lg px-8 py-4 rounded-full font-bold">
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

// Initialize after DOM is rendered
requestAnimationFrame(() => {
  initScrollReveal();
});
