export function Footer() {
  return (
    <footer className="relative mt-auto w-full pt-20">
      {/* Torn Paper Edge Divider facing upwards */}
      <div className="absolute top-0 left-0 w-full h-[60px] z-20 pointer-events-none translate-y-[-2px] rotate-180">
        <svg width="0" height="0" className="absolute">
          <defs>
            <filter id="footer-torn-paper-edge" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="fractalNoise" baseFrequency="0.015 0.08" numOctaves="4" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="35" xChannelSelector="R" yChannelSelector="G" />
            </filter>
            <filter id="footer-torn-paper-edge-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="fractalNoise" baseFrequency="0.015 0.08" numOctaves="4" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="45" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </defs>
        </svg>
        
        {/* Back layer for 3D depth/shadow effect of the tear */}
        <div 
          className="absolute top-[20px] left-[-2%] w-[104%] h-[60px] bg-black/20 dark:bg-white/10"
          style={{ filter: "url(#footer-torn-paper-edge-shadow)" }}
        />
        
        {/* Main paper color layer */}
        <div 
          className="absolute top-[25px] left-[-2%] w-[104%] h-[60px] bg-slate-50 dark:bg-slate-950"
          style={{ filter: "url(#footer-torn-paper-edge)" }}
        />
      </div>
      
      <div className="bg-primary/5 dark:bg-primary/10 py-8 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-bold text-primary mb-2">منصة مهارات الإعلام الرقمي</h3>
          <p className="text-muted-foreground mb-4">مسار تعليمي متكامل لمعلمي المرحلة الثانوية</p>
          <div className="text-sm text-muted-foreground/60">
            © {new Date().getFullYear()} جميع الحقوق محفوظة.
          </div>
        </div>
      </div>
    </footer>
  );
}
