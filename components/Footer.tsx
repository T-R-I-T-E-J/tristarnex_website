import Link from "next/link";
import { Brand } from "./Brand";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Link href="/" aria-label="Tristarnex home">
            <div className="footer-logo">
              <Brand />
            </div>
          </Link>
          <p>
            Security automation.
            <br />
            With control at its core.
          </p>
          <a href="mailto:info@tristarnex.com">info@tristarnex.com</a>
        </div>
        <div>
          <h3>ShieldMSP</h3>
          <Link href="/platform">The platform</Link>
          <Link href="/safety">Safety model</Link>
          <Link href="/integrations">Integrations</Link>
          <Link href="/#product-tour">Interactive tour</Link>
        </div>
        <div>
          <h3>Tristarnex</h3>
          <Link href="/company">Our company</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="footer-principle">
          <span className="eyebrow">OUR GUIDING PRINCIPLE</span>
          <p>
            Automated execution
            <br />
            is earned.
            <br />
            <span>Never assumed.</span>
          </p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Tristarnex Private Limited</span>
        <span>ShieldMSP is in MVP development.</span>
        <div>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
