export default function Header() {
  return `
    <nav class="absolute top-0 w-full z-50 p-6">
      <div class="container flex justify-between items-center bg-transparent">
        
        <!-- Logo -->
        <a href="/" style="font-size: 2rem; font-family: var(--font-family-heading); font-weight: 900; letter-spacing: -0.05em; color: white;">
          Artiim.
        </a>
        
        <!-- Desktop Nav -->
        <div class="hidden md:flex nav-pill-container">
          <a href="/" class="nav-pill-link">Home</a>
          <a href="#services" class="nav-pill-link">Services</a>
          <a href="#benefits" class="nav-pill-link">Benefits</a>
          <a href="#process" class="nav-pill-link">How it Works</a>
          <a href="/booking.html" target="_blank" class="nav-pill-btn" style="margin-left: 0.5rem;">
            Book a Call
          </a>
        </div>

        <!-- Mobile Menu Toggle -->
        <button id="mobile-menu-btn" class="md:hidden hamburger-btn" aria-label="Toggle menu" aria-expanded="false" aria-controls="mobile-menu-overlay">
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </nav>

    <!-- Mobile Menu Overlay -->
    <div id="mobile-menu-overlay" class="mobile-menu-overlay">
      <div class="mobile-menu-header">
        <a href="/" style="font-size: 1.5rem; font-weight: 900; color: white;">Artiim.</a>
        <button id="mobile-menu-close" class="close-btn" aria-label="Close menu">&times;</button>
      </div>
      <div class="mobile-menu-links">
        <a href="/" class="mobile-nav-link">Home</a>
        <a href="#services" class="mobile-nav-link">Services</a>
        <a href="#benefits" class="mobile-nav-link">Benefits</a>
        <a href="#process" class="mobile-nav-link">How it Works</a>
        <a href="/booking.html" target="_blank" class="mobile-nav-cta">Book a Call</a>
      </div>
    </div>
  `;
}
