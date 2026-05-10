export default function Services() {
  return `
    <section id="services" class="py-20 relative">
      <!-- Subtle background -->
      <div style="position: absolute; inset: 0; background-image: radial-gradient(rgba(0,0,0,0.03) 1px, transparent 1px); background-size: 20px 20px; z-index: 0;"></div>

      <div class="container relative z-10">
        <div class="text-center" style="margin-bottom: 5rem;">
          <span style="display: inline-block; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #a3a3a3; background: black; padding: 0.25rem 1rem; border: 1px solid #333333; border-radius: 9999px; margin-bottom: 1rem;">Our Expertise</span>
          <h2 class="text-4xl font-bold mb-4">If your team does it manually every day, we can automate it.</h2>
          <p class="text-muted mx-auto" style="max-width: 560px; font-size: 1.1rem;">We build custom automations that handle repetitive tasks, connect your software, and free up your team to focus on high-impact work.</p>
        </div>
        
        <!-- BENTO GRID -->
        <div class="bento-grid">
          
          <!-- Card 1: CRM (slides from LEFT) -->
          <div class="bento-card bento-large group reveal reveal-left reveal-delay-1" style="--bg-img: url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800');">
            <div class="bento-icon-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <h3 class="bento-title">CRM Ecosystems</h3>
            <p class="bento-desc">Centralize your customer data with intelligent CRM setups that track every interaction, deal stage, and touchpoint automatically — from first click to closed deal.</p>
            
            <!-- Decorative: Bar chart -->
            <div class="bento-visual">
              <div style="display: flex; gap: 0.5rem; align-items: flex-end; height: 60px;">
                <div style="width: 12%; height: 40%; background: #333333; border-radius: 4px;"></div>
                <div style="width: 12%; height: 65%; background: #555555; border-radius: 4px;"></div>
                <div style="width: 12%; height: 50%; background: #333333; border-radius: 4px;"></div>
                <div style="width: 12%; height: 85%; background: #ffffff; border-radius: 4px;"></div>
                <div style="width: 12%; height: 70%; background: #888888; border-radius: 4px;"></div>
                <div style="width: 12%; height: 55%; background: #555555; border-radius: 4px;"></div>
                <div style="width: 12%; height: 90%; background: #ffffff; border-radius: 4px;"></div>
                <div style="width: 12%; height: 60%; background: #333333; border-radius: 4px;"></div>
              </div>
            </div>
          </div>

          <!-- Card 2: Project Management (slides from RIGHT) -->
          <div class="bento-card bento-large group reveal reveal-right reveal-delay-2" style="--bg-img: url('https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800');">
            <div class="bento-icon-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/><path d="M14 9h4"/><path d="M14 15h4"/></svg>
            </div>
            <h3 class="bento-title">Project Management</h3>
            <p class="bento-desc">Automate task assignments, deadline reminders, and progress tracking to keep your team aligned without manual check-ins or status meetings.</p>
            
            <!-- Decorative: Task list -->
            <div class="bento-visual">
              <div style="display: flex; flex-direction: column; gap: 6px;">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <div style="width: 14px; height: 14px; border-radius: 3px; background: #ffffff;"></div>
                  <div style="height: 8px; width: 70%; background: #333333; border-radius: 4px;"></div>
                  <span style="font-size: 0.65rem; color: #888888; margin-left: auto;">Done</span>
                </div>
                <div style="display: flex; align-items: center; gap: 8px;">
                  <div style="width: 14px; height: 14px; border-radius: 3px; background: #ffffff;"></div>
                  <div style="height: 8px; width: 50%; background: #333333; border-radius: 4px;"></div>
                  <span style="font-size: 0.65rem; color: #888888; margin-left: auto;">Done</span>
                </div>
                <div style="display: flex; align-items: center; gap: 8px;">
                  <div style="width: 14px; height: 14px; border-radius: 3px; border: 2px solid #555555;"></div>
                  <div style="height: 8px; width: 85%; background: #333333; border-radius: 4px;"></div>
                  <span style="font-size: 0.65rem; color: #f97316; margin-left: auto;">In Progress</span>
                </div>
                <div style="display: flex; align-items: center; gap: 8px;">
                  <div style="width: 14px; height: 14px; border-radius: 3px; border: 2px solid #333333;"></div>
                  <div style="height: 8px; width: 60%; background: #222222; border-radius: 4px;"></div>
                  <span style="font-size: 0.65rem; color: #555555; margin-left: auto;">To Do</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 3: AI Lead Qualification (slides from LEFT) -->
          <div class="bento-card bento-large group reveal reveal-left reveal-delay-1" style="--bg-img: url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800');">
            <div class="bento-icon-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>
            </div>
            <h3 class="bento-title">AI Lead Qualification</h3>
            <p class="bento-desc">Analyze and score prospects in real-time. Automatically identify high-intent leads and route them to your team based on custom qualifying criteria.</p>
            
            <!-- Decorative: Qualification list -->
            <div class="bento-visual">
              <div style="display: flex; flex-direction: column; gap: 8px;">
                <div style="display: flex; gap: 12px; align-items: center; padding: 6px; background: #222222; border-radius: 8px; border: 1px solid #333333;">
                  <div style="width: 24px; height: 24px; background: #ffffff; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <div style="flex: 1;">
                    <div style="height: 6px; width: 60%; background: #ffffff; border-radius: 4px; margin-bottom: 4px;"></div>
                    <div style="height: 4px; width: 30%; background: #333333; border-radius: 4px;"></div>
                  </div>
                  <span style="font-size: 0.65rem; font-weight: 700; color: #10b981;">98 SCORE</span>
                </div>
                <div style="display: flex; gap: 12px; align-items: center; padding: 6px; opacity: 0.5;">
                  <div style="width: 24px; height: 24px; background: #333333; border-radius: 50%;"></div>
                  <div style="flex: 1;">
                    <div style="height: 6px; width: 45%; background: #555555; border-radius: 4px; margin-bottom: 4px;"></div>
                    <div style="height: 4px; width: 25%; background: #222222; border-radius: 4px;"></div>
                  </div>
                  <span style="font-size: 0.65rem; font-weight: 700; color: #a3a3a3;">24 SCORE</span>
                </div>
              </div>
            </div>
          </div>


          <!-- Card 4: Smart Email Systems (slides from BOTTOM) -->
          <div class="bento-card bento-large group reveal reveal-bottom reveal-delay-2" style="--bg-img: url('https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&q=80&w=800');">
            <div class="bento-icon-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <h3 class="bento-title">Smart Email Systems</h3>
            <p class="bento-desc">Automate outreach, follow-ups, and newsletter sequences with hyper-personalized triggers that convert leads on autopilot.</p>
            
            <!-- Decorative: Email inbox -->
            <div class="bento-visual">
              <div style="display: flex; flex-direction: column; gap: 6px;">
                <div style="display: flex; align-items: center; gap: 8px; padding: 6px 8px; background: #222222; border-radius: 6px;">
                  <div style="width: 8px; height: 8px; border-radius: 50%; background: #10b981;"></div>
                  <div style="height: 6px; width: 30%; background: #ffffff; border-radius: 4px;"></div>
                  <div style="height: 6px; width: 45%; background: #444444; border-radius: 4px;"></div>
                  <span style="font-size: 0.6rem; color: #888888; margin-left: auto;">2m ago</span>
                </div>
                <div style="display: flex; align-items: center; gap: 8px; padding: 6px 8px; background: #222222; border-radius: 6px;">
                  <div style="width: 8px; height: 8px; border-radius: 50%; background: #3b82f6;"></div>
                  <div style="height: 6px; width: 25%; background: #ffffff; border-radius: 4px;"></div>
                  <div style="height: 6px; width: 55%; background: #444444; border-radius: 4px;"></div>
                  <span style="font-size: 0.6rem; color: #888888; margin-left: auto;">1h ago</span>
                </div>
                <div style="display: flex; align-items: center; gap: 8px; padding: 6px 8px; background: #222222; border-radius: 6px;">
                  <div style="width: 8px; height: 8px; border-radius: 50%; background: #333333;"></div>
                  <div style="height: 6px; width: 35%; background: #555555; border-radius: 4px;"></div>
                  <div style="height: 6px; width: 40%; background: #333333; border-radius: 4px;"></div>
                  <span style="font-size: 0.6rem; color: #555555; margin-left: auto;">3h ago</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 5: Interview Pipeline (slides from RIGHT) -->
          <div class="bento-card bento-large group reveal reveal-right reveal-delay-3" style="--bg-img: url('https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800');">
            <div class="bento-icon-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>
            </div>
            <h3 class="bento-title">Interview Pipeline</h3>
            <p class="bento-desc">Screen candidates, schedule interviews, and manage feedback loops without lifting a finger — all fully automated.</p>
            
            <!-- Decorative: Pipeline stages -->
            <div class="bento-visual">
              <div style="display: flex; gap: 4px; align-items: center;">
                <div style="flex: 1; text-align: center; padding: 6px; background: #ffffff; border-radius: 6px;">
                  <span style="font-size: 0.6rem; color: black; font-weight: 600;">Applied</span>
                </div>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4 2l4 4-4 4" stroke="#444" stroke-width="1.5"/></svg>
                <div style="flex: 1; text-align: center; padding: 6px; background: #222222; border-radius: 6px;">
                  <span style="font-size: 0.6rem; color: #a3a3a3; font-weight: 600;">Screened</span>
                </div>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4 2l4 4-4 4" stroke="#444" stroke-width="1.5"/></svg>
                <div style="flex: 1; text-align: center; padding: 6px; background: #222222; border-radius: 6px;">
                  <span style="font-size: 0.6rem; color: #a3a3a3; font-weight: 600;">Interview</span>
                </div>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4 2l4 4-4 4" stroke="#444" stroke-width="1.5"/></svg>
                <div style="flex: 1; text-align: center; padding: 6px; background: #222222; border-radius: 6px;">
                  <span style="font-size: 0.6rem; color: #a3a3a3; font-weight: 600;">Hired</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 6: Custom Dashboard (slides from LEFT) -->
          <div class="bento-card bento-large group reveal reveal-left reveal-delay-1" style="--bg-img: url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800');">
            <div class="bento-icon-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
            </div>
            <h3 class="bento-title">Custom Dashboard</h3>
            <p class="bento-desc">Centralize key metrics and analytics into a real-time, custom dashboard for a complete birds-eye view of your business.</p>
            
            <!-- Decorative: Dashboard blocks -->
            <div class="bento-visual">
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                <div style="background: #222222; border: 1px solid #333333; border-radius: 8px; padding: 8px;">
                  <div style="height: 4px; width: 40%; background: #ffffff; border-radius: 4px; margin-bottom: 6px;"></div>
                  <div style="height: 12px; width: 60%; background: #10b981; border-radius: 4px;"></div>
                </div>
                <div style="background: #222222; border: 1px solid #333333; border-radius: 8px; padding: 8px;">
                  <div style="height: 4px; width: 50%; background: #ffffff; border-radius: 4px; margin-bottom: 6px;"></div>
                  <div style="height: 12px; width: 80%; background: #3b82f6; border-radius: 4px;"></div>
                </div>
                <div style="grid-column: 1 / -1; background: #222222; border: 1px solid #333333; border-radius: 8px; padding: 8px; display: flex; align-items: flex-end; gap: 4px; height: 40px;">
                  <div style="width: 15%; height: 30%; background: #333333; border-radius: 2px;"></div>
                  <div style="width: 15%; height: 50%; background: #555555; border-radius: 2px;"></div>
                  <div style="width: 15%; height: 80%; background: #ffffff; border-radius: 2px;"></div>
                  <div style="width: 15%; height: 60%; background: #888888; border-radius: 2px;"></div>
                  <div style="width: 15%; height: 100%; background: #ffffff; border-radius: 2px;"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 7: Customer AI Support (slides from BOTTOM) -->
          <div class="bento-card bento-large group reveal reveal-bottom reveal-delay-2" style="--bg-img: url('https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80&w=800');">
            <div class="bento-icon-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </div>
            <h3 class="bento-title">Customer AI Support</h3>
            <p class="bento-desc">Deploy intelligent AI chatbots to provide instant 24/7 support, quickly resolve common issues, and answer user queries automatically.</p>
            
            <!-- Decorative: Chat bubbles -->
            <div class="bento-visual">
              <div style="display: flex; flex-direction: column; gap: 8px;">
                <div style="align-self: flex-start; background: #222222; padding: 6px 10px; border-radius: 12px 12px 12px 2px; max-width: 80%;">
                  <div style="height: 4px; width: 40px; background: #888888; border-radius: 4px;"></div>
                </div>
                <div style="align-self: flex-end; background: #ffffff; padding: 6px 10px; border-radius: 12px 12px 2px 12px; max-width: 80%;">
                  <div style="height: 4px; width: 60px; background: #000; border-radius: 4px;"></div>
                </div>
                <div style="align-self: flex-start; background: #222222; padding: 6px 10px; border-radius: 12px 12px 12px 2px; max-width: 80%;">
                  <div style="height: 4px; width: 50px; background: #888888; border-radius: 4px; margin-bottom: 4px;"></div>
                  <div style="height: 4px; width: 30px; background: #555555; border-radius: 4px;"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 8: Appointment and Followup (slides from RIGHT) -->
          <div class="bento-card bento-large group reveal reveal-right reveal-delay-3" style="--bg-img: url('https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800');">
            <div class="bento-icon-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            </div>
            <h3 class="bento-title">Appointment & Followup</h3>
            <p class="bento-desc">Seamlessly integrate scheduling and let AI handle booking appointments, sending reminders, and automatically following up.</p>
            
            <!-- Decorative: Calendar events -->
            <div class="bento-visual">
              <div style="display: flex; flex-direction: column; gap: 6px; border-left: 2px solid #333333; padding-left: 12px; margin-left: 6px;">
                <div style="position: relative;">
                  <div style="position: absolute; left: -17px; top: 4px; width: 8px; height: 8px; border-radius: 50%; background: #ffffff;"></div>
                  <div style="font-size: 0.6rem; font-weight: 700; color: #ffffff; margin-bottom: 2px;">10:00 AM</div>
                  <div style="height: 6px; width: 70%; background: #333333; border-radius: 4px;"></div>
                </div>
                <div style="position: relative; margin-top: 4px;">
                  <div style="position: absolute; left: -17px; top: 4px; width: 8px; height: 8px; border-radius: 50%; background: #555555;"></div>
                  <div style="font-size: 0.6rem; font-weight: 700; color: #888888; margin-bottom: 2px;">1:30 PM</div>
                  <div style="height: 6px; width: 50%; background: #222222; border-radius: 4px;"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}
