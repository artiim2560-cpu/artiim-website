export default function FAQ() {
  const faqs = [
    {
      q: "How long does it take to build?",
      a: "Most systems are fully built, tested, and delivered within 7 to 10 working days. We start with a focused discovery session to map out exactly what you need, then architect, build, and rigorously test everything before handoff. Complex multi-system builds may take slightly longer, but you'll always get a clear timeline upfront."
    },
    {
      q: "Do I need any technical knowledge?",
      a: "Not at all — that's the whole point. We handle everything from strategy and architecture to build, testing, and deployment. You simply tell us what processes you want automated, and we take it from there. Once delivered, we provide clear documentation and a walkthrough so your team feels confident from day one."
    },
    {
      q: "What tools do you use?",
      a: "We work with industry-leading platforms like Make.com, OpenAI, Zapier, and n8n to build reliable automation workflows. We also integrate seamlessly with tools your business already uses — HubSpot, Salesforce, Gmail, Slack, Calendly, Shopify, Notion, and dozens more. Every stack is chosen specifically for your use case."
    },
    {
      q: "What happens after delivery?",
      a: "We don't disappear after handoff. Every project includes a support window to make sure everything runs smoothly. Beyond that, we offer monthly support plans where we monitor your automations, fix issues proactively, and optimize your systems as your business evolves. Think of us as a long-term partner, not a one-time vendor."
    },
    {
      q: "How much does it cost?",
      a: "Pricing depends on the complexity of the system, the number of integrations, and the level of AI sophistication required. That said, most clients see a return on investment within the first 30 days through time saved and efficiency gained. Book a free consultation and we'll provide a transparent, no-obligation quote tailored to your needs."
    },
    {
      q: "Do we own the automation systems after delivery?",
      a: "Absolutely — 100% ownership is yours. Every system, workflow, and integration we build belongs entirely to your business once delivered. You get full access to all accounts, platforms, and documentation. We never lock you into proprietary tools or hold your systems hostage — everything stays with you, always."
    },
    {
      q: "Can you integrate with our existing software stack?",
      a: "Yes, and that's one of our core strengths. We design every automation to work seamlessly with your existing tools — whether that's your CRM, project management platform, email, or accounting software. From HubSpot and Salesforce to Slack, Shopify, and QuickBooks, we connect your entire ecosystem into one intelligent workflow."
    },
    {
      q: "What does the process look like?",
      a: "It starts with a free discovery call where we learn about your business and goals. We then audit your workflows, identify the highest-impact opportunities, and design a custom architecture. From there, we build, test, and deploy everything seamlessly — then hand it over with full documentation and ongoing support."
    }
  ];

  return `
    <section id="faq" class="py-20 relative">
      <div class="container relative z-10 mx-auto" style="max-width: 800px;">
        <div class="text-center" style="margin-bottom: 4rem;">
          <span style="display: inline-block; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #a3a3a3; background: black; padding: 0.25rem 1rem; border: 1px solid #333333; border-radius: 9999px; margin-bottom: 1rem;">FAQ</span>
          <h2 class="text-4xl font-bold mb-4">Things people ask before booking a call</h2>
        </div>
        
        <div class="faq-list flex flex-col gap-4">
          ${faqs.map((faq, i) => `
            <details class="faq-item group">
              <summary class="faq-summary">
                <span>${faq.q}</span>
                <span class="faq-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </span>
              </summary>
              <div class="faq-content">
                <p>${faq.a}</p>
              </div>
            </details>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
