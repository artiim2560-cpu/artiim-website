export default function Hero() {
  return `
    <section class="py-32 flex flex-col items-center justify-center min-h-[90vh] relative overflow-hidden">
      <!-- Background Grid -->
      <div class="bg-grid" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; z-index: -1;"></div>
      
      <!-- Enterprise Decor: Large Faint Circles -->
      <div class="decor-circle" style="width: 800px; height: 800px; top: 50%; left: 50%; transform: translate(-50%, -50%); opacity: 0.3; z-index: -1;"></div>
      <div class="decor-circle" style="width: 1200px; height: 1200px; top: 50%; left: 50%; transform: translate(-50%, -50%); opacity: 0.15; border-style: solid; z-index: -1;"></div>

      <!-- Floating User Interface Mockups (Simulated "Mock Data" Cards) -->
      
      <!-- Card 1: New Lead Notification (Top Right) -->
      <div class="hero-card animate-float-slow" style="top: 15%; right: 10%; animation-delay: 0s;">
        <div class="status-dot bg-green"></div>
        <div class="flex flex-col">
          <span style="font-size: 0.7rem; color: #666; text-transform: uppercase; letter-spacing: 0.5px;">New Opportunity</span>
          <span>Lead Captured: Acme Corp</span>
        </div>
      </div>

      <!-- Card 2: Workflow Active (Left Center) -->
      <div class="hero-card animate-float-medium" style="top: 40%; left: 5%; animation-delay: 1s;">
        <div class="status-dot bg-blue"></div>
        <div class="flex flex-col">
          <span style="font-size: 0.7rem; color: #666; text-transform: uppercase; letter-spacing: 0.5px;">Workflow Status</span>
          <span>Outreach Sequence Active</span>
        </div>
      </div>

       <!-- Card 3: Revenue Metric (Bottom Right) -->
      <div class="hero-card animate-float-fast" style="bottom: 20%; right: 15%; animation-delay: 2s;">
        <div class="status-dot bg-orange"></div>
        <div class="flex flex-col">
          <span style="font-size: 0.7rem; color: #666; text-transform: uppercase; letter-spacing: 0.5px;">Monthly Impact</span>
          <span>$12,450 Cost Savings</span>
        </div>
      </div>


      <div class="container text-center relative z-10 max-w-4xl">
        



        <!-- Main Heading -->
        <h1 class="font-bold mb-6 leading-tight tracking-tight relative reveal reveal-left" style="font-size: var(--font-size-hero);">
          This is something <br/>
          <span style="color: var(--color-text-main)">beautifully automated.</span>
        </h1>
        
        <!-- Subtext -->
        <p class="text-muted mb-12 max-w-2xl mx-auto text-xl reveal reveal-right reveal-delay-1" style="line-height: 1.8;">
          Managing a business today is already tough. Avoid further complications by ditching outdated, tedious manual tasks. Our AI handles the busywork so you can focus on growth.
        </p>
        
        <!-- CTA Buttons -->
        <div class="flex justify-center gap-4 flex-col-mobile items-center reveal reveal-bottom reveal-delay-2">
          <a href="/booking.html" target="_blank" class="btn btn-outline text-lg bg-white/80 backdrop-blur-sm">
            <span>Jump on a call</span>
            <svg class="ml-2" style="margin-left:8px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </a>
          
          <a href="#services" class="btn btn-primary text-lg shadow-lg shadow-black/20">
            <span>Start Automating</span>
            <svg class="ml-2" style="margin-left:8px;" width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 1L11 6M11 6L6 11M11 6H1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  `;
}
