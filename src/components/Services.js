export default function Services() {
  return `
    <section id="services" class="py-20 relative">
      <!-- Subtle background -->
      <div style="position: absolute; inset: 0; background-image: radial-gradient(rgba(0,0,0,0.03) 1px, transparent 1px); background-size: 20px 20px; z-index: 0;"></div>

      <div class="container relative z-10">
        <div class="text-center mb-16">
          <span style="display: inline-block; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #666; background: white; padding: 0.25rem 1rem; border: 1px solid #e5e5e5; border-radius: 9999px; margin-bottom: 1rem;">Our Expertise</span>
          <h2 class="text-4xl font-bold mb-4">Core Automation Solutions</h2>
          <p class="text-muted mx-auto" style="max-width: 560px; font-size: 1.1rem;">End-to-end systems that eliminate manual work across every department.</p>
        </div>
        
        <!-- BENTO GRID -->
        <div class="bento-grid">
          
          <!-- Card 1: CRM (slides from LEFT) -->
          <div class="bento-card bento-large group reveal reveal-left reveal-delay-1">
            <div class="bento-icon-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <h3 class="bento-title">CRM Ecosystems</h3>
            <p class="bento-desc">Centralize your customer data with intelligent CRM setups that track every interaction, deal stage, and touchpoint automatically — from first click to closed deal.</p>
            
            <!-- Decorative: Bar chart -->
            <div class="bento-visual">
              <div style="display: flex; gap: 0.5rem; align-items: flex-end; height: 60px;">
                <div style="width: 12%; height: 40%; background: #e5e5e5; border-radius: 4px;"></div>
                <div style="width: 12%; height: 65%; background: #d4d4d4; border-radius: 4px;"></div>
                <div style="width: 12%; height: 50%; background: #e5e5e5; border-radius: 4px;"></div>
                <div style="width: 12%; height: 85%; background: #000; border-radius: 4px;"></div>
                <div style="width: 12%; height: 70%; background: #a3a3a3; border-radius: 4px;"></div>
                <div style="width: 12%; height: 55%; background: #d4d4d4; border-radius: 4px;"></div>
                <div style="width: 12%; height: 90%; background: #000; border-radius: 4px;"></div>
                <div style="width: 12%; height: 60%; background: #e5e5e5; border-radius: 4px;"></div>
              </div>
            </div>
          </div>

          <!-- Card 2: Project Management (slides from RIGHT) -->
          <div class="bento-card bento-large group reveal reveal-right reveal-delay-2">
            <div class="bento-icon-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/><path d="M14 9h4"/><path d="M14 15h4"/></svg>
            </div>
            <h3 class="bento-title">Project Management</h3>
            <p class="bento-desc">Automate task assignments, deadline reminders, and progress tracking to keep your team aligned without manual check-ins or status meetings.</p>
            
            <!-- Decorative: Task list -->
            <div class="bento-visual">
              <div style="display: flex; flex-direction: column; gap: 6px;">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <div style="width: 14px; height: 14px; border-radius: 3px; background: #000;"></div>
                  <div style="height: 8px; width: 70%; background: #e5e5e5; border-radius: 4px;"></div>
                  <span style="font-size: 0.65rem; color: #a3a3a3; margin-left: auto;">Done</span>
                </div>
                <div style="display: flex; align-items: center; gap: 8px;">
                  <div style="width: 14px; height: 14px; border-radius: 3px; background: #000;"></div>
                  <div style="height: 8px; width: 50%; background: #e5e5e5; border-radius: 4px;"></div>
                  <span style="font-size: 0.65rem; color: #a3a3a3; margin-left: auto;">Done</span>
                </div>
                <div style="display: flex; align-items: center; gap: 8px;">
                  <div style="width: 14px; height: 14px; border-radius: 3px; border: 2px solid #d4d4d4;"></div>
                  <div style="height: 8px; width: 85%; background: #e5e5e5; border-radius: 4px;"></div>
                  <span style="font-size: 0.65rem; color: #f97316; margin-left: auto;">In Progress</span>
                </div>
                <div style="display: flex; align-items: center; gap: 8px;">
                  <div style="width: 14px; height: 14px; border-radius: 3px; border: 2px solid #e5e5e5;"></div>
                  <div style="height: 8px; width: 60%; background: #f5f5f5; border-radius: 4px;"></div>
                  <span style="font-size: 0.65rem; color: #d4d4d4; margin-left: auto;">To Do</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 3: AI Content Engine (slides from LEFT) -->
          <div class="bento-card bento-large group reveal reveal-left reveal-delay-1">
            <div class="bento-icon-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
            </div>
            <h3 class="bento-title">AI Content Engine</h3>
            <p class="bento-desc">Generate high-quality blogs, social posts, and ad copy at scale using custom-trained AI models tailored to your brand voice.</p>
            
            <!-- Decorative: Content blocks -->
            <div class="bento-visual">
              <div style="display: flex; flex-direction: column; gap: 8px;">
                <div style="display: flex; gap: 8px; align-items: center;">
                  <div style="width: 32px; height: 32px; background: #f5f5f5; border-radius: 6px; flex-shrink: 0;"></div>
                  <div style="flex: 1;">
                    <div style="height: 6px; width: 80%; background: #e5e5e5; border-radius: 4px; margin-bottom: 4px;"></div>
                    <div style="height: 6px; width: 55%; background: #f0f0f0; border-radius: 4px;"></div>
                  </div>
                </div>
                <div style="display: flex; gap: 8px; align-items: center;">
                  <div style="width: 32px; height: 32px; background: #000; border-radius: 6px; flex-shrink: 0;"></div>
                  <div style="flex: 1;">
                    <div style="height: 6px; width: 90%; background: #d4d4d4; border-radius: 4px; margin-bottom: 4px;"></div>
                    <div style="height: 6px; width: 40%; background: #e5e5e5; border-radius: 4px;"></div>
                  </div>
                </div>
                <div style="display: flex; gap: 8px; align-items: center;">
                  <div style="width: 32px; height: 32px; background: #f5f5f5; border-radius: 6px; flex-shrink: 0;"></div>
                  <div style="flex: 1;">
                    <div style="height: 6px; width: 65%; background: #e5e5e5; border-radius: 4px; margin-bottom: 4px;"></div>
                    <div style="height: 6px; width: 75%; background: #f0f0f0; border-radius: 4px;"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 4: Smart Email Systems (slides from BOTTOM) -->
          <div class="bento-card bento-large group reveal reveal-bottom reveal-delay-2">
            <div class="bento-icon-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <h3 class="bento-title">Smart Email Systems</h3>
            <p class="bento-desc">Automate outreach, follow-ups, and newsletter sequences with hyper-personalized triggers that convert leads on autopilot.</p>
            
            <!-- Decorative: Email inbox -->
            <div class="bento-visual">
              <div style="display: flex; flex-direction: column; gap: 6px;">
                <div style="display: flex; align-items: center; gap: 8px; padding: 6px 8px; background: #fafafa; border-radius: 6px;">
                  <div style="width: 8px; height: 8px; border-radius: 50%; background: #10b981;"></div>
                  <div style="height: 6px; width: 30%; background: #000; border-radius: 4px;"></div>
                  <div style="height: 6px; width: 45%; background: #e5e5e5; border-radius: 4px;"></div>
                  <span style="font-size: 0.6rem; color: #a3a3a3; margin-left: auto;">2m ago</span>
                </div>
                <div style="display: flex; align-items: center; gap: 8px; padding: 6px 8px; background: #fafafa; border-radius: 6px;">
                  <div style="width: 8px; height: 8px; border-radius: 50%; background: #3b82f6;"></div>
                  <div style="height: 6px; width: 25%; background: #000; border-radius: 4px;"></div>
                  <div style="height: 6px; width: 55%; background: #e5e5e5; border-radius: 4px;"></div>
                  <span style="font-size: 0.6rem; color: #a3a3a3; margin-left: auto;">1h ago</span>
                </div>
                <div style="display: flex; align-items: center; gap: 8px; padding: 6px 8px; background: #fafafa; border-radius: 6px;">
                  <div style="width: 8px; height: 8px; border-radius: 50%; background: #e5e5e5;"></div>
                  <div style="height: 6px; width: 35%; background: #d4d4d4; border-radius: 4px;"></div>
                  <div style="height: 6px; width: 40%; background: #f0f0f0; border-radius: 4px;"></div>
                  <span style="font-size: 0.6rem; color: #d4d4d4; margin-left: auto;">3h ago</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 5: Interview Pipeline (slides from RIGHT) -->
          <div class="bento-card bento-large group reveal reveal-right reveal-delay-3">
            <div class="bento-icon-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>
            </div>
            <h3 class="bento-title">Interview Pipeline</h3>
            <p class="bento-desc">Screen candidates, schedule interviews, and manage feedback loops without lifting a finger — all fully automated.</p>
            
            <!-- Decorative: Pipeline stages -->
            <div class="bento-visual">
              <div style="display: flex; gap: 4px; align-items: center;">
                <div style="flex: 1; text-align: center; padding: 6px; background: #000; border-radius: 6px;">
                  <span style="font-size: 0.6rem; color: white; font-weight: 600;">Applied</span>
                </div>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4 2l4 4-4 4" stroke="#ccc" stroke-width="1.5"/></svg>
                <div style="flex: 1; text-align: center; padding: 6px; background: #f5f5f5; border-radius: 6px;">
                  <span style="font-size: 0.6rem; color: #666; font-weight: 600;">Screened</span>
                </div>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4 2l4 4-4 4" stroke="#ccc" stroke-width="1.5"/></svg>
                <div style="flex: 1; text-align: center; padding: 6px; background: #f5f5f5; border-radius: 6px;">
                  <span style="font-size: 0.6rem; color: #666; font-weight: 600;">Interview</span>
                </div>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4 2l4 4-4 4" stroke="#ccc" stroke-width="1.5"/></svg>
                <div style="flex: 1; text-align: center; padding: 6px; background: #f5f5f5; border-radius: 6px;">
                  <span style="font-size: 0.6rem; color: #666; font-weight: 600;">Hired</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}
