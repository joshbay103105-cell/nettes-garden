import { Button } from "@/components/ui/button";
import { useActiveSection } from "@/hooks/useScrollAnimation";
import { Leaf, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Education", href: "#education" },
  { label: "Byproducts", href: "#byproducts" },
  { label: "Applications", href: "#applications" },
  { label: "Achievements", href: "#achievements" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const SECTION_IDS = [
  "home",
  "education",
  "byproducts",
  "applications",
  "achievements",
  "about",
  "contact",
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, "", href);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? "bg-card/95 backdrop-blur-sm border-b border-border shadow-subtle"
          : "bg-card/80 backdrop-blur-sm"
      }`}
      data-ocid="header"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-2.5 group"
            data-ocid="header.logo_link"
            aria-label="Go to home"
          >
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shadow-sm group-hover:scale-105 transition-smooth">
              <Leaf
                className="w-4.5 h-4.5 text-primary-foreground"
                strokeWidth={2.5}
              />
            </div>
            <div className="leading-tight">
              <span className="block font-display font-semibold text-foreground text-base tracking-tight">
                Green Harvest
              </span>
              <span className="block text-[10px] font-body font-medium text-muted-foreground uppercase tracking-widest -mt-0.5">
                Farm
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <button
                  type="button"
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-3 py-2 text-sm font-medium rounded-md transition-smooth ${
                    isActive
                      ? "text-primary"
                      : "text-foreground/70 hover:text-foreground hover:bg-muted/60"
                  }`}
                  data-ocid={`header.nav_${sectionId}`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-primary" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Button
              onClick={() => handleNavClick("#contact")}
              size="sm"
              className="hidden lg:flex bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-5"
              data-ocid="header.contact_button"
            >
              Get in Touch
            </Button>
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-muted/60 transition-smooth"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              data-ocid="header.mobile_menu_toggle"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav
            className="lg:hidden py-4 border-t border-border bg-card"
            aria-label="Mobile navigation"
            data-ocid="header.mobile_menu"
          >
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace("#", "");
              return (
                <button
                  type="button"
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="flex w-full text-left px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-muted/40 rounded-lg transition-smooth"
                  data-ocid={`header.mobile_nav_${sectionId}`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
}
