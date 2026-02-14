export default function Footer() {
  const year = new Date().getFullYear();

  // Black/Dark Footer theme
  const footerStyle = `
    background-color: #000000; 
    color: white;
    background: radial-gradient(circle at 80% -20%, #27272a 0%, #000000 100%);
  `;

  return `
    <footer style="${footerStyle}" class="py-20 mt-20 relative overflow-hidden">
      <!-- Decorative Element mimicking the "Sticky Note" logic or shape -->
      <div style="position: absolute; top: -20px; right: 10%; width: 100px; height: 100px; background: #ffffff; border: 2px solid #000000; transform: rotate(3deg); z-index: 10; box-shadow: 4px 4px 0px #000000; display: flex; align-items: center; justify-content: center; color: black; font-weight: bold; border-radius: 2px;">
         Let's Talk!
      </div>
      
      <!-- Subtle Grid for Footer -->
      <div style="position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px); background-size: 50px 50px; opacity: 0.3; pointer-events: none;"></div>

      <div class="container relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-16">
          <div>
            <h2 class="text-4xl font-bold mb-6 text-white" style="color: #ffffff !important;">Ready to scale your <br/> business with AI?</h2>
            <p class="text-muted max-w-md text-lg mb-8" style="opacity: 0.8; color: #d4d4d8;">
              Join forward-thinking companies saving thousands of hours annually through intelligent automation.
            </p>
            <div class="flex gap-4">
               <a href="/booking.html" target="_blank" class="btn" style="background: white; color: #000000; font-weight: 600;">
                Book a Consultation
              </a>
            </div>
          </div>
          
          <div class="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10 relative overflow-hidden" style="margin-top: 2rem;">
             <!-- Decor circle inside card -->
             <div style="position: absolute; top: -50px; right: -50px; width: 100px; height: 100px; background: radial-gradient(#ffffff 0%, transparent 70%); opacity: 0.1; border-radius: 50%;"></div>
             
            <h3 class="text-xl font-bold mb-4 text-white">Contact</h3>
            <p class="mb-2 opacity-80 text-gray-300">hello@advytize.com</p>
            <p class="opacity-80 text-gray-300">San Francisco, CA</p>
            
            <div class="mt-8 flex gap-4">
              <!-- Social placeholders -->
              <div class="w-8 h-8 bg-white/20 rounded-full hover:bg-white/40 cursor-pointer transition-all"></div>
              <div class="w-8 h-8 bg-white/20 rounded-full hover:bg-white/40 cursor-pointer transition-all"></div>
              <div class="w-8 h-8 bg-white/20 rounded-full hover:bg-white/40 cursor-pointer transition-all"></div>
            </div>
          </div>
        </div>
        
        <div class="pt-8 border-t border-white/10 text-center opacity-60 text-sm text-gray-400">
          <p>&copy; ${year} Advytize. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `;
}
