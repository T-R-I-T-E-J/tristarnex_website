export function Footer() {
  return (
    <footer className="bg-brand-bg relative z-10 pt-24 pb-8 px-12">
      <div className="max-w-[1240px] mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-10 flex-wrap lg:flex-nowrap border-b border-brand-border mb-8">
          
          <div className="lg:col-span-1">
            <div className="font-display font-extrabold text-[20px] tracking-[0.1em] uppercase mb-4 text-brand-text">
              Tristar<span className="text-brand-cyan">nex</span>
            </div>
            <p className="text-[13px] font-light leading-[1.7] text-brand-text-muted max-w-[280px]">
              Deploying advanced cybersecurity measures tailored for modern enterprises facing unprecedented digital threats.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-[10px] tracking-[0.15em] uppercase text-brand-text-muted">Services</h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: 'Threat Detection & Response', href: '/threat-detection' },
                { label: 'Penetration Testing', href: '/penetration-testing' },
                { label: 'Security Assessment', href: '/security-assessment' },
                { label: 'Vulnerability Management', href: '/vulnerability-management' },
                { label: 'Security Awareness Training', href: '/security-awareness-training' },
                { label: 'Incident Response', href: '/incident-response' },
              ].map((item) => (
                <li key={item.label}><a href={item.href} className="text-[13px] text-brand-text-muted hover:text-brand-cyan transition-colors">{item.label}</a></li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-[10px] tracking-[0.15em] uppercase text-brand-text-muted">Company</h4>
            <ul className="flex flex-col gap-2.5">
              {['About Us', 'Contact'].map((item) => (
                <li key={item}><a href="#" className="text-[13px] text-brand-text-muted hover:text-brand-cyan transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-[10px] tracking-[0.15em] uppercase text-brand-text-muted">Legal</h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms of Service', href: '/terms' },
              ].map((item) => (
                <li key={item.label}><a href={item.href} className="text-[13px] text-brand-text-muted hover:text-brand-cyan transition-colors">{item.label}</a></li>
              ))}
            </ul>
          </div>
          
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between opacity-80 gap-4">
          <div className="font-mono text-[11px] text-brand-text-muted">
            &copy; {new Date().getFullYear()} Tristarnex Ltd. Registered in England &amp; Wales. All Rights Reserved.
          </div>
          <div className="flex items-center gap-5">
            <a href="mailto:info@tristarnex.com" className="font-mono text-[11px] text-brand-text-muted hover:text-brand-cyan transition-colors">info@tristarnex.com</a>
            <a href="https://linkedin.com/company/tristarnex" target="_blank" rel="noopener noreferrer" className="font-mono text-[11px] text-brand-text-muted hover:text-brand-cyan transition-colors">LinkedIn</a>
            <a href="https://twitter.com/tristarnex" target="_blank" rel="noopener noreferrer" className="font-mono text-[11px] text-brand-text-muted hover:text-brand-cyan transition-colors">X / Twitter</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
