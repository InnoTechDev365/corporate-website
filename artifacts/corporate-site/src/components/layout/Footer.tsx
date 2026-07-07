import { Link } from "wouter";
import { SiX, SiGithub } from "react-icons/si";
import { Linkedin, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 pt-12 pb-8 md:pt-16 md:pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">

          {/* Brand column — spans 2 cols on lg */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-5">
            <span className="text-2xl font-bold tracking-tight text-primary">NEXUS</span>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Precision enterprise consulting. We partner with Fortune 500 leaders to architect
              scalable, resilient, and intelligent systems.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="tel:+12125550100" className="flex items-center gap-2 hover:text-primary transition-colors" data-testid="link-footer-phone">
                <Phone className="w-4 h-4 shrink-0" /> +1 (212) 555-0100
              </a>
              <a href="mailto:partners@nexusconsulting.io" className="flex items-center gap-2 hover:text-primary transition-colors" data-testid="link-footer-email">
                <Mail className="w-4 h-4 shrink-0" /> partners@nexusconsulting.io
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>1 Vanderbilt Ave, Suite 6500<br />New York, NY 10017</span>
              </div>
            </div>
            <div className="flex gap-4 pt-1">
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="X (Twitter)"
                data-testid="link-social-x"
              >
                <SiX className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
                data-testid="link-social-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
                data-testid="link-social-github"
              >
                <SiGithub className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-2.5">
              {[
                { href: "/about", label: "About Us" },
                { href: "/about#leadership", label: "Leadership" },
                { href: "/about#careers", label: "Careers" },
                { href: "/contact", label: "Contact" },
              ].map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-2.5">
              {[
                "Strategy",
                "Digital Transformation",
                "Cloud & Infrastructure",
                "AI & Automation",
                "Cybersecurity",
                "M&A Advisory",
              ].map(label => (
                <li key={label}>
                  <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground text-sm uppercase tracking-wider">Resources</h3>
            <ul className="space-y-2.5">
              {[
                { href: "/case-studies", label: "Case Studies" },
                { href: "/press-center", label: "Press Center" },
                { href: "/press-center#insights", label: "Insights" },
                { href: "/press-center#press-releases", label: "Press Releases" },
                { href: "/press-center#media-kit", label: "Media Kit" },
              ].map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>&copy; 2026 Nexus Consulting LLC. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
