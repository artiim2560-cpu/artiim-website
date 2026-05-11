export default function Hero() {
  return `
    <section class="flex flex-col items-center justify-center relative overflow-hidden" style="min-height: 100vh; padding-top: 5rem;">
      <!-- Background Grid -->
      <div class="bg-grid" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; z-index: -1;"></div>
      
      <!-- Enterprise Decor: Large Faint Circles -->
      <div class="decor-circle" style="width: 800px; height: 800px; top: 50%; left: 50%; transform: translate(-50%, -50%); opacity: 0.3; z-index: -1;"></div>
      <div class="decor-circle" style="width: 1200px; height: 1200px; top: 50%; left: 50%; transform: translate(-50%, -50%); opacity: 0.15; border-style: solid; z-index: -1;"></div>

      <div class="container text-center relative z-10 max-w-5xl">

        <!-- Main Heading -->
        <h1 class="font-bold mb-6 leading-tight tracking-tight relative reveal reveal-left" style="font-size: var(--font-size-hero);">
          Real systems. Real results. <span style="color: var(--color-text-main)">Not promises that look good on paper.</span>
        </h1>
        
        <!-- Subtext -->
        <p class="text-muted mb-12 max-w-4xl mx-auto text-xl reveal reveal-right reveal-delay-1" style="line-height: 1.8;">
          We build custom AI automation systems for growing businesses ready to stop doing everything manually.
          No big agency overhead. No templates. No generic tools. 
          Every system is built specifically for your business and delivered in 7 to 10 days.
          We build fast. We build clean. And we stay around 
          long after delivery.
        </p>
        
        <!-- CTA Button -->
        <div class="flex justify-center gap-4 reveal reveal-bottom reveal-delay-2">
          <a href="/booking.html" target="_blank" class="btn btn-primary text-lg shadow-lg shadow-black/20 px-10">
            <span>Book a Free Consultation</span>
            <svg class="ml-2" style="margin-left:8px;" width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 1L11 6M11 6L6 11M11 6H1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  `;
}
