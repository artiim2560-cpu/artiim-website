export default function Header() {
  return `
    <nav class="fixed top-0 w-full z-50 p-6 pointer-events-none">
      <div class="container flex justify-between items-center bg-transparent">
        
        <!-- Logo - Left aligned within container -->
        <a href="#" class="pointer-events-auto" style="font-size: 2.5rem; font-family: var(--font-family-heading); font-weight: 900; letter-spacing: -0.05em;">
          Artiim.
        </a>
        
        <!-- Navigation Pill containing links AND button - Right aligned within container -->
        <div class="pointer-events-auto nav-pill-container">
          <a href="#" class="nav-pill-link">Home</a>
          <a href="#services" class="nav-pill-link">Services</a>
          <a href="#benefits" class="nav-pill-link">Benefits</a>
          <a href="#process" class="nav-pill-link">How it Works</a>
          

          <!-- Book a Call Button is connected here inside the pill -->
          <a href="/booking.html" target="_blank" class="nav-pill-btn" style="margin-left: 0.5rem;">
            Book a Call
          </a>
        </div>

      </div>
    </nav>
  `;
}
