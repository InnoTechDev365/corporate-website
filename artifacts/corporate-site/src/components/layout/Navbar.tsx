import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/press-center", label: "Press" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  function isActive(href: string) {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight text-primary shrink-0" data-testid="link-logo">
          NEXUS
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex gap-1 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              data-testid={`link-nav-${link.label.toLowerCase().replace(/ /g, "-")}`}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "bg-primary/10 text-primary"
                  : "text-foreground/70 hover:text-foreground hover:bg-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button
            asChild
            className="rounded-xl shadow-sm ml-3 h-9 px-5 text-sm"
            data-testid="button-nav-cta"
          >
            <Link href="/contact">Get Started</Link>
          </Button>
        </nav>

        {/* Tablet nav (md only, condensed) */}
        <nav className="hidden md:flex lg:hidden gap-1 items-center">
          {navLinks.slice(0, 4).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-2.5 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "bg-primary/10 text-primary"
                  : "text-foreground/70 hover:text-foreground hover:bg-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="rounded-xl ml-2 h-9 px-4 text-sm" data-testid="button-nav-cta-tablet">
            <Link href="/contact">Get Started</Link>
          </Button>
        </nav>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" data-testid="button-menu-open" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[340px] p-0">
              <div className="flex items-center px-6 py-4 border-b">
                <SheetTitle className="text-xl font-bold text-primary">NEXUS</SheetTitle>
              </div>
              <nav className="flex flex-col px-4 py-6 gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    data-testid={`link-mobile-${link.label.toLowerCase().replace(/ /g, "-")}`}
                    className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive(link.href)
                        ? "bg-primary/10 text-primary"
                        : "text-foreground/80 hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4 mt-2 border-t">
                  <Button
                    asChild
                    className="rounded-xl w-full h-12 text-base"
                    data-testid="button-nav-mobile-cta"
                  >
                    <Link href="/contact" onClick={() => setOpen(false)}>Get Started</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
