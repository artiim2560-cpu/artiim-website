export default function TrustedBy() {
    // Simple geometric placeholders for logos
    const logos = [
        "Nexus", "Galactic", "Orbit", "Vertex", "Pulse", "Echo", "Flux", "Quantum"
    ];

    return `
    <div class="marquee-container">
      <div class="marquee-content flex items-center gap-16">
        ${logos.map(logo => `<span class="text-xl font-bold opacity-30 uppercase tracking-widest">${logo}</span>`).join('')}
        ${logos.map(logo => `<span class="text-xl font-bold opacity-30 uppercase tracking-widest">${logo}</span>`).join('')}
        ${logos.map(logo => `<span class="text-xl font-bold opacity-30 uppercase tracking-widest">${logo}</span>`).join('')}
        ${logos.map(logo => `<span class="text-xl font-bold opacity-30 uppercase tracking-widest">${logo}</span>`).join('')}
      </div>
      
      <style>
      .marquee-content {
         animation: marquee 40s linear infinite;
         display: flex; /* Ensure flexbox for gap */
      }
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); } 
      }
      </style>
    </div>
  `;
}
