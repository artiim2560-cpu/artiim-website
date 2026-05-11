export default function Benefits() {
  const benefits = [
    {
      title: "Reclaim Time",
      desc: "Shift focus from mundane administrative tasks to high-value strategic growth.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`
    },
    {
      title: "Reduce Overhead",
      desc: "Lower operational costs by automating roles that don't require human creativity.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/></svg>`
    },
    {
      title: "Effortless Scaling",
      desc: "Handle 10x the workload without needing to hire 10x the staff.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>`
    },
    {
      title: "Eliminate Errors",
      desc: "Remove human mistakes from repetitive processes with precision-driven AI systems.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>`
    },
    {
      title: "24/7 Operations",
      desc: "Your automated systems work around the clock — no breaks, no downtime.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12"/><path d="M16 14l-4-2"/></svg>`
    }
  ];

  const directions = ['reveal-left', 'reveal-bottom', 'reveal-bottom', 'reveal-bottom', 'reveal-right'];

  return `
    <section id="benefits" class="py-16">
      <div class="container text-center">
        <h2 class="text-4xl font-bold mb-6 max-w-2xl mx-auto">What changes when you stop doing it manually</h2>
        <p class="text-muted text-lg mb-12">
          The same team. The same hours. Completely different output.
        </p>
        <div class="benefits-grid">
          ${benefits.map((b, i) => `
            <div class="reveal ${directions[i]} reveal-delay-${i + 1}" style="
              background: #111111;
              border: 1px solid #222222;
              border-radius: 1rem;
              padding: 1.75rem 1.25rem;
              text-align: center;
              transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
              cursor: default;
            " onmouseover="this.style.transform='translateY(-4px)';this.style.boxShadow='0 16px 40px -8px rgba(0,0,0,0.5)';this.style.borderColor='#444444';this.querySelector('.benefit-icon').style.background='#ffffff';this.querySelector('.benefit-icon').style.borderColor='#ffffff';this.querySelector('.benefit-icon svg').style.stroke='black';" onmouseout="this.style.transform='';this.style.boxShadow='';this.style.borderColor='#222222';this.querySelector('.benefit-icon').style.background='#222222';this.querySelector('.benefit-icon').style.borderColor='#333333';this.querySelector('.benefit-icon svg').style.stroke='currentColor';">
              
              <div class="benefit-icon" style="width: 48px; height: 48px; border-radius: 12px; background: #222222; border: 1px solid #333333; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; transition: all 0.3s ease;">
                ${b.icon}
              </div>
              <h3 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem; font-family: var(--font-family-heading);">${b.title}</h3>
              <p style="font-size: 0.875rem; color: #a3a3a3; line-height: 1.6;">${b.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
