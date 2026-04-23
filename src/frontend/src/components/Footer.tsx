import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Instagram,
  Leaf,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Education", href: "#education" },
  { label: "Byproducts", href: "#byproducts" },
  { label: "Applications", href: "#applications" },
  { label: "Achievements", href: "#achievements" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.hostname)
      : "";

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("Subscribed! Welcome to the Green Harvest community.");
    setEmail("");
  };

  return (
    <footer className="bg-card border-t border-border" data-ocid="footer">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
                <Leaf
                  className="w-4.5 h-4.5 text-primary-foreground"
                  strokeWidth={2.5}
                />
              </div>
              <div className="leading-tight">
                <span className="block font-display font-semibold text-foreground text-base">
                  Green Harvest
                </span>
                <span className="block text-[10px] font-body uppercase tracking-widest text-muted-foreground">
                  Farm
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Growing fresh, sustainable, and smart produce since 2008. Rooted
              in community, driven by nature.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-smooth text-muted-foreground"
                data-ocid="footer.instagram_link"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-smooth text-muted-foreground"
                data-ocid="footer.facebook_link"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-smooth text-muted-foreground"
                data-ocid="footer.twitter_link"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                    data-ocid={`footer.${link.label.toLowerCase().replace(" ", "_")}_link`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">
                  123 Green Valley Road, Harvest County, CA 94102
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a
                  href="tel:+14155550123"
                  className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                >
                  +1 (415) 555-0123
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a
                  href="mailto:hello@greenharvestfarm.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                >
                  hello@greenharvestfarm.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-2">
              Stay Updated
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Get seasonal tips, harvest news, and workshop announcements.
            </p>
            <form
              onSubmit={handleNewsletterSubmit}
              className="space-y-2.5"
              data-ocid="footer.newsletter_form"
            >
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background border-border text-sm"
                aria-label="Email for newsletter"
                data-ocid="footer.newsletter_input"
              />
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm rounded-full"
                data-ocid="footer.newsletter_submit"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {year} Green Harvest Farm. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary transition-smooth"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
