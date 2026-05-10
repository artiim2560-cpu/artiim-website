export default function Process() {
  const steps = [
    {
      title: "Discovery & Audit",
      description: "We analyze your current workflows to identify high-impact automation opportunities."
    },
    {
      title: "Custom Architecture",
      description: "Our team designs a bespoke AI framework tailored to your specific business needs."
    },
    {
      title: "Seamless Integration",
      description: "We deploy the solution without disrupting your daily operations, ensuring a smooth transition."
    },
    {
      title: "Handover & Support",
      description: "We deliver your complete system with full documentation and training, ensuring your team can manage it independently from day one."
    }
  ];

  return `
    <section id="process" class="py-20 relative" style="background: var(--color-surface);">
       <div class="container">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div class="reveal reveal-left">
               <h2 class="text-4xl font-bold mb-6">How we transform <br/> your business.</h2>
               <p class="text-muted text-lg mb-8">
                 Four steps. No fluff. From first call to going live in under two weeks.
               </p>
            </div>

            <div class="relative pl-8 md:pl-0" style="margin-top: 1.5rem;">
               ${steps.map((step, index) => `
                 <div class="process-step reveal reveal-right reveal-delay-${index + 1}">
                    <div class="process-dot"></div>
                    <span class="text-sm font-bold text-muted uppercase tracking-wider mb-2 block">Step 0${index + 1}</span>
                    <h3 class="text-xl font-bold mb-2">${step.title}</h3>
                    <p class="text-muted">${step.description}</p>
                 </div>
               `).join('')}
            </div>
          </div>
       </div>
    </section>
  `;
}
