// ─────────────────────────────────────────────────────────────────────────────
// Nettes Garden — single-file app
// All types, hooks, layout, sections, and data live here.
// ─────────────────────────────────────────────────────────────────────────────

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Eye,
  Facebook,
  GraduationCap,
  Heart,
  HelpCircle,
  Instagram,
  Layers,
  Leaf,
  Mail,
  MapPin,
  Menu,
  Microscope,
  Package,
  Phone,
  Quote,
  Send,
  Sprout,
  Star,
  Target,
  Tractor,
  TreePine,
  Trophy,
  Twitter,
  Users,
  X,
} from "lucide-react";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────

interface NavLink {
  label: string;
  href: string;
}

interface Byproduct {
  id: number;
  name: string;
  category: string;
  description: string;
  benefits: string[];
  icon: string;
}

interface Achievement {
  id: number;
  title: string;
  year: string;
  description: string;
  icon: string;
  type: "award" | "cert" | "milestone";
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
}

interface WorkshopItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface ApplicationUseCase {
  id: number;
  title: string;
  description: string;
  icon: string;
  examples: string[];
}

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// HOOKS
// ─────────────────────────────────────────────────────────────────────────────

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

function useScrollAnimation<T extends Element = HTMLDivElement>(
  options: UseScrollAnimationOptions = {},
) {
  const {
    threshold = 0.15,
    rootMargin = "0px 0px -40px 0px",
    once = true,
  } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
}

function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (!el) continue;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.3 },
      );
      observer.observe(el);
      observers.push(observer);
    }

    return () => {
      for (const o of observers) {
        o.disconnect();
      }
    };
  }, [sectionIds]);

  return activeSection;
}

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

const NAV_LINKS: NavLink[] = [
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

const QUICK_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Education", href: "#education" },
  { label: "Byproducts", href: "#byproducts" },
  { label: "Applications", href: "#applications" },
  { label: "Achievements", href: "#achievements" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const WORKSHOPS: WorkshopItem[] = [
  {
    id: 1,
    title: "Regenerative Agriculture",
    description:
      "Master the principles of soil health, cover cropping, and no-till practices that build long-term farm productivity.",
    icon: "🌱",
  },
  {
    id: 2,
    title: "Composting Masterclass",
    description:
      "From kitchen scraps to black gold — learn hot composting, vermicomposting, and bokashi fermentation techniques.",
    icon: "♻️",
  },
  {
    id: 3,
    title: "Seasonal Planting Guide",
    description:
      "Understand crop rotation, companion planting, and succession sowing to maximize your harvest year-round.",
    icon: "📅",
  },
  {
    id: 4,
    title: "Natural Pest Management",
    description:
      "Deploy beneficial insects, companion plants, and organic sprays to protect crops without chemicals.",
    icon: "🐛",
  },
  {
    id: 5,
    title: "Water Conservation",
    description:
      "Drip irrigation, rainwater harvesting, and swale design to grow more with less water.",
    icon: "💧",
  },
  {
    id: 6,
    title: "Farm-to-Table Processing",
    description:
      "Preservation, fermentation, and value-added product creation to maximize your harvest yields.",
    icon: "🫙",
  },
];

const PROGRAMS = [
  {
    icon: GraduationCap,
    title: "School Farm Tours",
    desc: "Hands-on learning for K-12 students exploring nature and food systems.",
  },
  {
    icon: Users,
    title: "Community Workshops",
    desc: "Monthly public workshops on sustainable living and urban farming.",
  },
  {
    icon: Microscope,
    title: "Research Partnerships",
    desc: "Collaborating with universities to advance organic farming science.",
  },
  {
    icon: TreePine,
    title: "Internship Program",
    desc: "Full-season immersive programs for aspiring farmers and agronomists.",
  },
];

const BYPRODUCTS: Byproduct[] = [
  {
    id: 1,
    name: "Premium Organic Fertilizer",
    category: "Soil Amendment",
    description:
      "Rich in NPK and beneficial microbes, our compost-based fertilizer transforms depleted soil into thriving growing ground.",
    benefits: [
      "All-natural nutrients",
      "Improves soil structure",
      "Boosts microbial life",
      "pH balancing",
    ],
    icon: "🌿",
  },
  {
    id: 2,
    name: "Farm-Rich Compost",
    category: "Soil Amendment",
    description:
      "Fully matured compost from our livestock and crop residues — the foundation of healthy, productive soil.",
    benefits: [
      "Improves water retention",
      "Carbon sequestration",
      "Weed suppression",
      "Slow-release nutrients",
    ],
    icon: "🍂",
  },
  {
    id: 3,
    name: "Fresh Farm Eggs",
    category: "Animal Products",
    description:
      "Pasture-raised hens produce eggs with deep golden yolks, rich in omega-3 and vitamins from natural foraging.",
    benefits: [
      "High omega-3 content",
      "Richer flavor profile",
      "Humanely raised",
      "No antibiotics",
    ],
    icon: "🥚",
  },
  {
    id: 4,
    name: "Raw Artisan Milk",
    category: "Animal Products",
    description:
      "Cold-pressed milk from our grass-fed dairy herd, packed with natural enzymes and beneficial probiotics.",
    benefits: [
      "Grass-fed herd",
      "Natural probiotics",
      "Rich in CLA",
      "No growth hormones",
    ],
    icon: "🥛",
  },
  {
    id: 5,
    name: "Biochar Blend",
    category: "Soil Amendment",
    description:
      "Our proprietary biochar activates soil biology, locks in carbon, and improves moisture retention for decades.",
    benefits: [
      "Permanent carbon sink",
      "Improved drainage",
      "500+ year stability",
      "Microbial habitat",
    ],
    icon: "⚫",
  },
  {
    id: 6,
    name: "Heirloom Seed Collection",
    category: "Seeds & Propagation",
    description:
      "Open-pollinated, non-GMO seeds curated from 20+ generations of careful selection for flavor and resilience.",
    benefits: [
      "Seed saving allowed",
      "Disease resistance",
      "Flavor-optimized",
      "Climate-adapted",
    ],
    icon: "🌾",
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  "Soil Amendment": "bg-primary/10 text-primary border-primary/20",
  "Animal Products": "bg-accent/15 text-accent-foreground border-accent/30",
  "Seeds & Propagation": "bg-chart-1/15 text-chart-1 border-chart-1/20",
};

const USE_CASES: ApplicationUseCase[] = [
  {
    id: 1,
    title: "Large-Scale Agriculture",
    description:
      "Our organic fertilizers and biochar blends are trusted by commercial farmers to restore depleted soils and boost crop yields sustainably.",
    icon: "🌾",
    examples: [
      "Wheat & corn field restoration",
      "Vineyard soil enrichment",
      "Greenhouse substrate",
      "Certified organic transition",
    ],
  },
  {
    id: 2,
    title: "Home Gardening",
    description:
      "From raised beds to window boxes, our compost and seed collections help home gardeners grow nutritious food in any space.",
    icon: "🏡",
    examples: [
      "Vegetable raised beds",
      "Container herb gardens",
      "Backyard composting setup",
      "Perennial food gardens",
    ],
  },
  {
    id: 3,
    title: "Landscaping & Horticulture",
    description:
      "Professional landscapers rely on our soil amendments for lush, chemical-free lawns, native plantings, and ornamental gardens.",
    icon: "🌺",
    examples: [
      "Native plant restoration",
      "Golf course greens",
      "Urban tree planting",
      "Erosion control projects",
    ],
  },
  {
    id: 4,
    title: "School & Community Gardens",
    description:
      "Educational gardens thrive with our beginner-friendly product line, complete with guidance and seed-to-harvest curriculum.",
    icon: "🏫",
    examples: [
      "Elementary school gardens",
      "Community plot allotments",
      "Food forest projects",
      "Therapeutic horticulture",
    ],
  },
  {
    id: 5,
    title: "Aquaponics & Hydroponics",
    description:
      "Our specialized compost teas and biochar additives enhance water quality and plant nutrition in closed-loop growing systems.",
    icon: "💧",
    examples: [
      "Fish-plant integrated systems",
      "NFT lettuce systems",
      "Deep water culture",
      "Tower garden setups",
    ],
  },
  {
    id: 6,
    title: "Ecological Restoration",
    description:
      "Partnering with conservancies and land trusts, we supply living soil biology to bring degraded ecosystems back to life.",
    icon: "🌍",
    examples: [
      "Mine site reclamation",
      "Wetland buffer planting",
      "Wildfire recovery",
      "Riparian corridor restoration",
    ],
  },
];

const ACHIEVEMENTS: Achievement[] = [
  {
    id: 1,
    title: "Best Organic Farm 2024",
    year: "2024",
    description:
      "Awarded by the National Organic Farmers Association for outstanding sustainable practices and community impact.",
    icon: "🏆",
    type: "award",
  },
  {
    id: 2,
    title: "USDA Organic Certified",
    year: "2012",
    description:
      "Continuously certified USDA Organic for 12+ years — zero pesticides, synthetic fertilizers, or GMO inputs.",
    icon: "🌿",
    type: "cert",
  },
  {
    id: 3,
    title: "Sustainability Excellence Award",
    year: "2023",
    description:
      "Recognized by GreenFuture Coalition for our carbon-negative operations and regenerative land practices.",
    icon: "♻️",
    type: "award",
  },
  {
    id: 4,
    title: "Certified B Corporation",
    year: "2021",
    description:
      "Certified by B Lab for meeting the highest verified standards of social and environmental performance.",
    icon: "⭐",
    type: "cert",
  },
  {
    id: 5,
    title: "10,000 Students Educated",
    year: "2023",
    description:
      "Over 10,000 students from 50+ schools have participated in our farm education and food literacy programs.",
    icon: "📚",
    type: "milestone",
  },
  {
    id: 6,
    title: "Zero Waste Operations",
    year: "2022",
    description:
      "Achieved zero-waste certification — 100% of farm byproducts are composted, upcycled, or converted to energy.",
    icon: "🌱",
    type: "milestone",
  },
];

const STATS = [
  { icon: Trophy, value: "18", label: "Awards Won", color: "text-accent" },
  { icon: Star, value: "12+", label: "Certifications", color: "text-primary" },
  {
    icon: Leaf,
    value: "500+",
    label: "Acres Cultivated",
    color: "text-chart-1",
  },
  {
    icon: Users,
    value: "2,400+",
    label: "Community Members",
    color: "text-accent",
  },
];

const TYPE_STYLES: Record<Achievement["type"], string> = {
  award: "bg-accent/15 text-accent-foreground border-accent/30",
  cert: "bg-primary/10 text-primary border-primary/20",
  milestone: "bg-chart-1/15 text-foreground border-chart-1/20",
};

const TYPE_LABELS: Record<Achievement["type"], string> = {
  award: "Award",
  cert: "Certification",
  milestone: "Milestone",
};

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Local Restaurant Owner",
    quote:
      "Nettes Garden has transformed my kitchen. The freshness and flavor of their produce is unmatched — my customers notice it every single meal. I wouldn't source from anywhere else.",
    avatar: "SC",
  },
  {
    id: 2,
    name: "Marcus Thompson",
    role: "Agriculture Teacher, Westside High",
    quote:
      "The school farm tour program changed how my students understand food. They came back with a new respect for nature and a genuine curiosity about sustainability. Truly impactful.",
    avatar: "MT",
  },
  {
    id: 3,
    name: "Linda Okafor",
    role: "Home Gardener",
    quote:
      "I attended the composting masterclass and it revolutionized my garden. My soil went from hard clay to rich, living earth in one season. The team is incredibly knowledgeable and approachable.",
    avatar: "LO",
  },
  {
    id: 4,
    name: "David Ramirez",
    role: "Commercial Farmer, 200+ acres",
    quote:
      "After transitioning to Nettes Garden's organic fertilizer blend, my yields actually improved while my input costs dropped. The soil health improvement has been remarkable and measurable.",
    avatar: "DR",
  },
  {
    id: 5,
    name: "Emma Blackwood",
    role: "Nutritionist & Wellness Coach",
    quote:
      "I recommend Nettes Garden eggs and dairy to all my clients. The nutritional density is noticeably higher — you can taste the difference that genuine pasture-raising makes.",
    avatar: "EB",
  },
  {
    id: 6,
    name: "James Wu",
    role: "Community Garden Coordinator",
    quote:
      "Their heirloom seed collection has brought biodiversity back to our community plots. Three seasons in and we have varieties that grandparents remember but had never seen again.",
    avatar: "JW",
  },
];

const AVATAR_COLORS = [
  "bg-primary text-primary-foreground",
  "bg-accent text-accent-foreground",
  "bg-chart-1 text-primary-foreground",
  "bg-chart-2 text-primary-foreground",
  "bg-chart-3 text-foreground",
  "bg-chart-4 text-primary-foreground",
];

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: "Eleanor Marsh",
    role: "Founder & Head Farmer",
    bio: "Third-generation farmer with a Masters in Sustainable Agriculture from UC Davis. Eleanor founded Nettes Garden in 2008 with a vision to prove that profitable farming and environmental stewardship go hand in hand.",
  },
  {
    id: 2,
    name: "Rafael Santos",
    role: "Director of Education",
    bio: "Former high school biology teacher turned permaculture designer. Rafael leads our education programs and has personally taught over 5,000 students the principles of regenerative farming.",
  },
  {
    id: 3,
    name: "Mei Lin",
    role: "Head of Operations",
    bio: "Supply chain expert who oversees all post-harvest processing, product development, and distribution. Mei has helped grow Nettes Garden into a zero-waste operation over the past 7 years.",
  },
  {
    id: 4,
    name: "Thomas Osei",
    role: "Soil Scientist & Agronomist",
    bio: "PhD in Soil Microbiology. Thomas manages our land health programs, develops our proprietary compost blends, and leads our research partnerships with regional universities.",
  },
];

const TEAM_AVATARS = ["🌾", "📚", "⚙️", "🔬"];

const FAQS: FAQItem[] = [
  {
    id: 1,
    question: "Are all your products certified organic?",
    answer:
      "Yes. Nettes Garden has been USDA Organic Certified since 2012. All produce, dairy, eggs, and soil products are grown or raised without synthetic pesticides, herbicides, GMO inputs, or artificial fertilizers. Our certification is audited annually by a third-party certifier.",
  },
  {
    id: 2,
    question: "Can I visit the farm?",
    answer:
      "Absolutely! We welcome farm visitors, especially for our scheduled school tours, monthly open days, and seasonal harvest events. Contact us to book a group tour or check our calendar for upcoming open farm days. Private visits can also be arranged for researchers, educators, and media.",
  },
  {
    id: 3,
    question: "How can I register for a workshop or training program?",
    answer:
      "Use the contact form on our website or email us directly at programs@nettesgarden.com. Workshops run monthly and fill quickly, so we recommend booking at least 2-3 weeks in advance. Student groups and non-profits receive discounted pricing.",
  },
  {
    id: 4,
    question: "Do you ship your soil products and seeds nationwide?",
    answer:
      "Yes, we ship compost, organic fertilizer, biochar blends, and our heirloom seed collections across the continental US. Orders over $75 qualify for free standard shipping. We use eco-friendly packaging and consolidate shipments to minimize our carbon footprint.",
  },
  {
    id: 5,
    question: "How does your compost differ from store-bought products?",
    answer:
      "Commercial compost is often made from a single material type (wood chips, yard waste) and may not be fully matured. Our farm compost is a diverse blend of livestock manure, crop residues, food scraps, and biochar — fully thermophilic-composted for 90+ days, teeming with beneficial microorganisms and far richer in organic matter.",
  },
  {
    id: 6,
    question: "Do you offer CSA (Community Supported Agriculture) memberships?",
    answer:
      "Yes! Our seasonal CSA runs spring through fall. Members receive weekly boxes of freshly harvested vegetables, eggs, and seasonal extras. We offer half-share and full-share options, with pickup at the farm or 12 community drop points across the county.",
  },
  {
    id: 7,
    question: "What is your return or satisfaction policy?",
    answer:
      "We stand behind every product we sell. If you are unsatisfied with a purchase for any reason, contact us within 14 days and we will offer a replacement, store credit, or full refund. For perishable items, please report issues within 48 hours of delivery with a photo.",
  },
];

const INITIAL_FORM: ContactForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

// ─────────────────────────────────────────────────────────────────────────────
// HEADER
// ─────────────────────────────────────────────────────────────────────────────

function Header() {
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
                Nettes Garden
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

// ─────────────────────────────────────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────────────────────────────────────

function Footer() {
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
    toast.success("Subscribed! Welcome to the Nettes Garden community.");
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
                  Nettes Garden
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
                  href="mailto:hello@nettesgarden.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                >
                  hello@nettesgarden.com
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
            © {year} Nettes Garden. All rights reserved.
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

// ─────────────────────────────────────────────────────────────────────────────
// LAYOUT
// ─────────────────────────────────────────────────────────────────────────────

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 pt-16 lg:pt-20">{children}</main>
      <Footer />
      <Toaster position="bottom-right" />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// HERO SECTION
// ─────────────────────────────────────────────────────────────────────────────

function HeroSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
  });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden"
      data-ocid="hero.section"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-farm.dim_1600x900.jpg')",
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20">
        <div ref={ref} className="max-w-2xl">
          {/* Badge */}
          <div
            className={`mb-6 ${isVisible ? "fade-in" : "opacity-0-initial"}`}
          >
            <Badge className="bg-accent/20 text-accent-foreground border border-accent/40 backdrop-blur-sm px-4 py-1.5 text-sm font-medium animate-float">
              <Leaf className="w-3.5 h-3.5 mr-1.5" />
              Certified Organic Farm Since 2008
            </Badge>
          </div>

          {/* Headline */}
          <h1
            className={`font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-tight text-primary-foreground mb-6 text-balance ${
              isVisible ? "slide-up animate-delayed-1" : "opacity-0-initial"
            }`}
          >
            Growing Fresh, <span className="text-accent">Sustainable,</span> and
            Smart
          </h1>

          {/* Subtext */}
          <p
            className={`text-base sm:text-lg text-primary-foreground/85 leading-relaxed mb-8 max-w-xl ${
              isVisible ? "slide-up animate-delayed-2" : "opacity-0-initial"
            }`}
          >
            At Nettes Garden, we combine generations of farming wisdom with
            modern sustainable practices to bring nature's finest to your table
            — and your community.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-wrap gap-3 mb-12 ${
              isVisible ? "slide-up animate-delayed-3" : "opacity-0-initial"
            }`}
          >
            <Button
              size="lg"
              onClick={() => scrollTo("education")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 shadow-elevated"
              data-ocid="hero.learn_more_button"
            >
              <Sprout className="w-4 h-4 mr-2" />
              Learn More
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo("byproducts")}
              className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/60 rounded-full px-8 bg-transparent backdrop-blur-sm"
              data-ocid="hero.explore_products_button"
            >
              Explore Products
            </Button>
          </div>

          {/* Stats */}
          <div
            className={`flex flex-wrap gap-8 ${
              isVisible ? "fade-in animate-delayed-4" : "opacity-0-initial"
            }`}
          >
            {[
              { value: "15+", label: "Years of Farming" },
              { value: "500+", label: "Acres Cultivated" },
              { value: "2000+", label: "Happy Families" },
            ].map((stat) => (
              <div key={stat.label} className="text-primary-foreground">
                <div className="font-display font-bold text-3xl text-accent">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/70 mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        onClick={() => scrollTo("education")}
        aria-label="Scroll to next section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-smooth animate-float"
        data-ocid="hero.scroll_down_button"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// EDUCATION SECTION
// ─────────────────────────────────────────────────────────────────────────────

function EducationSection() {
  const { ref: headRef, isVisible: headVisible } =
    useScrollAnimation<HTMLDivElement>();
  const { ref: cardsRef, isVisible: cardsVisible } =
    useScrollAnimation<HTMLDivElement>();

  return (
    <section
      id="education"
      className="py-20 lg:py-28 bg-background"
      data-ocid="education.section"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div
          ref={headRef}
          className={`text-center max-w-2xl mx-auto mb-16 ${headVisible ? "slide-up" : "opacity-0-initial"}`}
        >
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4 px-4 py-1.5">
            <BookOpen className="w-3.5 h-3.5 mr-1.5" />
            Education & Learning
          </Badge>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-4 text-balance">
            Learn to Farm <span className="text-primary">Sustainably</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We believe knowledge is the most powerful seed. Our education
            programs equip farmers, students, and communities with practical,
            science-backed skills for a greener future.
          </p>
        </div>

        {/* Featured image + text */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div
            className={`rounded-2xl overflow-hidden shadow-elevated ${cardsVisible ? "slide-left" : "opacity-0-initial"}`}
            ref={cardsRef}
          >
            <img
              src="/assets/generated/education-farming.dim_800x600.jpg"
              alt="Hands-on farming education"
              className="w-full h-80 lg:h-96 object-cover"
            />
          </div>
          <div
            className={`space-y-6 ${cardsVisible ? "slide-up animate-delayed-2" : "opacity-0-initial"}`}
          >
            <h3 className="font-display font-semibold text-3xl text-foreground">
              Farming Guides & Tutorials
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              From beginner plots to commercial operations, our step-by-step
              guides cover every aspect of sustainable agriculture. Learn at
              your own pace with expert-curated content.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {PROGRAMS.map((p, i) => (
                <div
                  key={p.title}
                  className={`flex items-start gap-3 ${cardsVisible ? `slide-up animate-delayed-${i + 2}` : "opacity-0-initial"}`}
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <p.icon className="w-4.5 h-4.5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-sm text-foreground">
                      {p.title}
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                      {p.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
              data-ocid="education.register_button"
            >
              <Tractor className="w-4 h-4 mr-2" />
              Register for Programs
            </Button>
          </div>
        </div>

        {/* Workshop cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WORKSHOPS.map((workshop, i) => (
            <Card
              key={workshop.id}
              className={`border-border shadow-card hover-lift cursor-default bg-card ${
                cardsVisible
                  ? `slide-up animate-delayed-${Math.min(i + 1, 5)}`
                  : "opacity-0-initial"
              }`}
              data-ocid={`education.workshop.${i + 1}`}
            >
              <CardContent className="p-6">
                <div className="text-3xl mb-3">{workshop.icon}</div>
                <h4 className="font-display font-semibold text-foreground mb-2">
                  {workshop.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {workshop.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// BYPRODUCTS SECTION
// ─────────────────────────────────────────────────────────────────────────────

function ByproductsSection() {
  const { ref: headRef, isVisible: headVisible } =
    useScrollAnimation<HTMLDivElement>();
  const { ref: gridRef, isVisible: gridVisible } =
    useScrollAnimation<HTMLDivElement>();

  return (
    <section
      id="byproducts"
      className="py-20 lg:py-28 bg-muted/30"
      data-ocid="byproducts.section"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div
          ref={headRef}
          className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 ${
            headVisible ? "slide-up" : "opacity-0-initial"
          }`}
        >
          <div className="max-w-xl">
            <Badge className="bg-accent/15 text-accent-foreground border-accent/30 mb-4 px-4 py-1.5">
              <Package className="w-3.5 h-3.5 mr-1.5" />
              Farm Byproducts
            </Badge>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-4 text-balance">
              Every Part of the Farm{" "}
              <span className="text-primary">Gives Back</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Zero-waste farming means transforming every byproduct into value.
              From our livestock to our crop residues, each product is crafted
              with care and purpose.
            </p>
          </div>
          <img
            src="/assets/generated/byproducts-organic.dim_800x600.jpg"
            alt="Organic farm products"
            className="rounded-2xl w-full lg:w-80 h-48 lg:h-56 object-cover shadow-elevated shrink-0"
          />
        </div>

        {/* Products grid */}
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BYPRODUCTS.map((product, i) => (
            <Card
              key={product.id}
              className={`border-border shadow-card bg-card hover-lift ${
                gridVisible
                  ? `slide-up animate-delayed-${Math.min(i + 1, 5)}`
                  : "opacity-0-initial"
              }`}
              data-ocid={`byproducts.product.${i + 1}`}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{product.icon}</div>
                  <Badge
                    className={`text-xs border ${CATEGORY_COLORS[product.category] ?? "bg-muted text-muted-foreground"}`}
                  >
                    {product.category}
                  </Badge>
                </div>
                <h4 className="font-display font-semibold text-lg text-foreground mb-2">
                  {product.name}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {product.description}
                </p>
                <div className="space-y-1.5">
                  {product.benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-center gap-2 text-xs text-muted-foreground"
                    >
                      <Leaf className="w-3 h-3 text-primary shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// APPLICATIONS SECTION
// ─────────────────────────────────────────────────────────────────────────────

function ApplicationsSection() {
  const { ref: headRef, isVisible: headVisible } =
    useScrollAnimation<HTMLDivElement>();
  const { ref: listRef, isVisible: listVisible } =
    useScrollAnimation<HTMLDivElement>();

  return (
    <section
      id="applications"
      className="py-20 lg:py-28 bg-background"
      data-ocid="applications.section"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div
          ref={headRef}
          className={`text-center max-w-2xl mx-auto mb-16 ${headVisible ? "slide-up" : "opacity-0-initial"}`}
        >
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4 px-4 py-1.5">
            <Layers className="w-3.5 h-3.5 mr-1.5" />
            Applications
          </Badge>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-4 text-balance">
            Where Our Products <span className="text-primary">Come Alive</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            From backyard gardens to commercial fields, our products and
            expertise power healthy growing across every scale and context.
          </p>
        </div>

        {/* Use Cases */}
        <div ref={listRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {USE_CASES.map((useCase, i) => (
            <div
              key={useCase.id}
              className={`group relative p-6 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-card transition-smooth cursor-default ${
                listVisible
                  ? `slide-up animate-delayed-${Math.min(i + 1, 5)}`
                  : "opacity-0-initial"
              }`}
              data-ocid={`applications.usecase.${i + 1}`}
            >
              <div className="text-4xl mb-4">{useCase.icon}</div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-smooth">
                {useCase.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {useCase.description}
              </p>
              <div className="space-y-2">
                <p className="text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Real Examples
                </p>
                <ul className="space-y-1">
                  {useCase.examples.map((ex) => (
                    <li
                      key={ex}
                      className="flex items-center gap-2 text-xs text-muted-foreground"
                    >
                      <ArrowRight className="w-3 h-3 text-accent shrink-0" />
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ACHIEVEMENTS SECTION
// ─────────────────────────────────────────────────────────────────────────────

function AchievementsSection() {
  const { ref: headRef, isVisible: headVisible } =
    useScrollAnimation<HTMLDivElement>();
  const { ref: statsRef, isVisible: statsVisible } =
    useScrollAnimation<HTMLDivElement>();
  const { ref: cardsRef, isVisible: cardsVisible } =
    useScrollAnimation<HTMLDivElement>();

  return (
    <section
      id="achievements"
      className="py-20 lg:py-28 bg-muted/30"
      data-ocid="achievements.section"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div
          ref={headRef}
          className={`text-center max-w-2xl mx-auto mb-14 ${headVisible ? "slide-up" : "opacity-0-initial"}`}
        >
          <Badge className="bg-accent/15 text-accent-foreground border-accent/30 mb-4 px-4 py-1.5">
            <Trophy className="w-3.5 h-3.5 mr-1.5" />
            Achievements
          </Badge>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-4 text-balance">
            Recognized for <span className="text-primary">Excellence</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Our commitment to sustainable farming, community education, and
            innovation has been recognized by leading organizations across the
            agricultural industry.
          </p>
        </div>

        {/* Stats bar */}
        <div
          ref={statsRef}
          className={`grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14 ${statsVisible ? "fade-in" : "opacity-0-initial"}`}
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`bg-card rounded-2xl p-6 text-center border border-border shadow-card ${
                statsVisible
                  ? `slide-up animate-delayed-${i + 1}`
                  : "opacity-0-initial"
              }`}
              data-ocid={`achievements.stat.${i + 1}`}
            >
              <stat.icon className={`w-7 h-7 ${stat.color} mx-auto mb-3`} />
              <div
                className={`font-display font-bold text-3xl ${stat.color} mb-1`}
              >
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Achievement cards */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {ACHIEVEMENTS.map((ach, i) => (
            <Card
              key={ach.id}
              className={`border-border shadow-card bg-card hover-lift ${
                cardsVisible
                  ? `slide-up animate-delayed-${Math.min(i + 1, 5)}`
                  : "opacity-0-initial"
              }`}
              data-ocid={`achievements.item.${i + 1}`}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="text-3xl">{ach.icon}</div>
                  <div className="flex flex-col items-end gap-1.5">
                    <Badge
                      className={`text-xs border ${TYPE_STYLES[ach.type]}`}
                    >
                      {TYPE_LABELS[ach.type]}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {ach.year}
                    </span>
                  </div>
                </div>
                <h4 className="font-display font-semibold text-foreground mb-2">
                  {ach.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {ach.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// TESTIMONIALS SECTION
// ─────────────────────────────────────────────────────────────────────────────

function TestimonialsSection() {
  const { ref: headRef, isVisible: headVisible } =
    useScrollAnimation<HTMLDivElement>();
  const { ref: gridRef, isVisible: gridVisible } =
    useScrollAnimation<HTMLDivElement>();

  return (
    <section
      id="testimonials"
      className="py-20 lg:py-28 bg-background"
      data-ocid="testimonials.section"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div
          ref={headRef}
          className={`text-center max-w-2xl mx-auto mb-14 ${headVisible ? "slide-up" : "opacity-0-initial"}`}
        >
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4 px-4 py-1.5">
            <Star className="w-3.5 h-3.5 mr-1.5" />
            Testimonials
          </Badge>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-4 text-balance">
            Voices from Our <span className="text-primary">Community</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            From family kitchens to commercial operations, hear what our
            community says about their experience with Nettes Garden.
          </p>
        </div>

        {/* Testimonials grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.id}
              className={`relative p-6 rounded-2xl bg-card border border-border shadow-card hover-lift ${
                gridVisible
                  ? `slide-up animate-delayed-${Math.min(i + 1, 5)}`
                  : "opacity-0-initial"
              }`}
              data-ocid={`testimonials.item.${i + 1}`}
            >
              <Quote className="w-8 h-8 text-primary/20 mb-3" />

              <p className="text-sm text-muted-foreground leading-relaxed mb-5 italic">
                {t.quote}
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold shrink-0 ${AVATAR_COLORS[i % AVATAR_COLORS.length]}`}
                >
                  {t.avatar}
                </div>
                <div className="min-w-0">
                  <div className="font-medium text-sm text-foreground truncate">
                    {t.name}
                  </div>
                  <div className="text-xs text-muted-foreground truncate">
                    {t.role}
                  </div>
                </div>
                <div className="ml-auto flex gap-0.5 shrink-0">
                  {["s1", "s2", "s3", "s4", "s5"].map((key) => (
                    <Star
                      key={key}
                      className="w-3 h-3 fill-accent text-accent"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ABOUT SECTION
// ─────────────────────────────────────────────────────────────────────────────

function AboutSection() {
  const { ref: headRef, isVisible: headVisible } =
    useScrollAnimation<HTMLDivElement>();
  const { ref: storyRef, isVisible: storyVisible } =
    useScrollAnimation<HTMLDivElement>();
  const { ref: teamRef, isVisible: teamVisible } =
    useScrollAnimation<HTMLDivElement>();

  return (
    <section
      id="about"
      className="py-20 lg:py-28 bg-background"
      data-ocid="about.section"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div
          ref={headRef}
          className={`text-center max-w-2xl mx-auto mb-14 ${headVisible ? "slide-up" : "opacity-0-initial"}`}
        >
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4 px-4 py-1.5">
            <Heart className="w-3.5 h-3.5 mr-1.5" />
            About Us
          </Badge>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-4 text-balance">
            Rooted in Purpose,{" "}
            <span className="text-primary">Grown with Love</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Nettes Garden is more than a business — it's a living commitment to
            the land, the people who work it, and the communities who depend on
            it.
          </p>
        </div>

        {/* Story */}
        <div
          ref={storyRef}
          className="grid lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <img
            src="/assets/generated/farm-aerial.dim_800x600.jpg"
            alt="Nettes Garden aerial view"
            className={`rounded-2xl w-full h-80 object-cover shadow-elevated ${storyVisible ? "fade-in" : "opacity-0-initial"}`}
          />
          <div
            className={`space-y-8 ${storyVisible ? "slide-up animate-delayed-2" : "opacity-0-initial"}`}
          >
            <div>
              <h3 className="font-display font-semibold text-2xl text-foreground mb-3">
                Our Story
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Founded in 2008 on 50 acres of depleted California farmland,
                Nettes Garden began as a bold experiment: could sustainable,
                regenerative farming actually outperform conventional methods?
                Fifteen years later, our 500+ acre operation proves every day
                that it can — and must.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-primary/8 border border-primary/15">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-4 h-4 text-primary" />
                  <span className="font-display font-semibold text-foreground text-sm">
                    Mission
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  To prove that farming can feed the world while healing the
                  planet — one acre, one family, one season at a time.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-accent/10 border border-accent/20">
                <div className="flex items-center gap-2 mb-2">
                  <Eye className="w-4 h-4 text-accent-foreground" />
                  <span className="font-display font-semibold text-foreground text-sm">
                    Vision
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  A world where every community has access to nourishing,
                  sustainably grown food, and every farmer prospers without
                  compromise.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team */}
        <div ref={teamRef}>
          <div
            className={`text-center mb-10 ${teamVisible ? "slide-up" : "opacity-0-initial"}`}
          >
            <h3 className="font-display font-bold text-3xl text-foreground">
              Meet the Team
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((member, i) => (
              <div
                key={member.id}
                className={`text-center p-6 rounded-2xl bg-card border border-border shadow-card hover-lift ${
                  teamVisible
                    ? `slide-up animate-delayed-${i + 1}`
                    : "opacity-0-initial"
                }`}
                data-ocid={`about.team.${i + 1}`}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center text-3xl mx-auto mb-4">
                  {TEAM_AVATARS[i]}
                </div>
                <h4 className="font-display font-semibold text-foreground mb-1">
                  {member.name}
                </h4>
                <p className="text-xs text-primary font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team image */}
        <div
          className={`mt-12 rounded-2xl overflow-hidden shadow-elevated ${teamVisible ? "fade-in animate-delayed-5" : "opacity-0-initial"}`}
        >
          <img
            src="/assets/generated/about-team.dim_800x600.jpg"
            alt="The Nettes Garden team"
            className="w-full h-64 lg:h-80 object-cover"
          />
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FAQ SECTION
// ─────────────────────────────────────────────────────────────────────────────

function FAQSection() {
  const { ref: headRef, isVisible: headVisible } =
    useScrollAnimation<HTMLDivElement>();
  const { ref: listRef, isVisible: listVisible } =
    useScrollAnimation<HTMLDivElement>();

  return (
    <section
      id="faq"
      className="py-20 lg:py-28 bg-muted/30"
      data-ocid="faq.section"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div
          ref={headRef}
          className={`text-center max-w-2xl mx-auto mb-14 ${headVisible ? "slide-up" : "opacity-0-initial"}`}
        >
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4 px-4 py-1.5">
            <HelpCircle className="w-3.5 h-3.5 mr-1.5" />
            FAQ
          </Badge>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-4 text-balance">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Everything you need to know about Nettes Garden — from our products
            and certifications to visiting and workshops.
          </p>
        </div>

        <div
          ref={listRef}
          className={`max-w-3xl mx-auto ${listVisible ? "slide-up" : "opacity-0-initial"}`}
        >
          <Accordion
            type="single"
            collapsible
            className="space-y-3"
            data-ocid="faq.list"
          >
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={faq.id}
                value={`faq-${faq.id}`}
                className="bg-card border border-border rounded-xl px-6 shadow-subtle"
                data-ocid={`faq.item.${i + 1}`}
              >
                <AccordionTrigger
                  className="font-display font-semibold text-foreground text-left hover:text-primary hover:no-underline transition-smooth py-5"
                  data-ocid={`faq.trigger.${i + 1}`}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CONTACT SECTION
// ─────────────────────────────────────────────────────────────────────────────

function ContactSection() {
  const [form, setForm] = useState<ContactForm>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<ContactForm>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { ref: headRef, isVisible: headVisible } =
    useScrollAnimation<HTMLDivElement>();
  const { ref: formRef, isVisible: formVisible } =
    useScrollAnimation<HTMLDivElement>();

  const validate = (): boolean => {
    const newErrors: Partial<ContactForm> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Enter a valid email";
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBlur = (field: keyof ContactForm) => {
    if (errors[field]) validate();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setIsSubmitting(false);
    toast.success("Message sent! We'll be in touch within 1-2 business days.");
    setForm(INITIAL_FORM);
    setErrors({});
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-background"
      data-ocid="contact.section"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div
          ref={headRef}
          className={`text-center max-w-2xl mx-auto mb-14 ${headVisible ? "slide-up" : "opacity-0-initial"}`}
        >
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4 px-4 py-1.5">
            <Mail className="w-3.5 h-3.5 mr-1.5" />
            Get in Touch
          </Badge>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-4 text-balance">
            We'd Love to <span className="text-primary">Hear From You</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Whether you're interested in our products, education programs, or
            just want to say hello — we're here and happy to help.
          </p>
        </div>

        <div
          ref={formRef}
          className="grid lg:grid-cols-5 gap-10 lg:gap-16 max-w-5xl mx-auto"
        >
          {/* Contact info */}
          <div
            className={`lg:col-span-2 space-y-8 ${formVisible ? "slide-left" : "opacity-0-initial"}`}
          >
            <div>
              <h3 className="font-display font-semibold text-xl text-foreground mb-5">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Farm Address
                    </p>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      123 Green Valley Road
                      <br />
                      Harvest County, CA 94102
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Phone</p>
                    <a
                      href="tel:+14155550123"
                      className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                    >
                      +1 (415) 555-0123
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <a
                      href="mailto:hello@nettesgarden.com"
                      className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                    >
                      hello@nettesgarden.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="p-5 rounded-xl bg-muted/40 border border-border">
              <h4 className="font-display font-semibold text-foreground mb-3">
                Farm Hours
              </h4>
              <div className="space-y-1.5 text-sm">
                {[
                  { day: "Monday – Friday", hours: "7:00 AM – 5:00 PM" },
                  { day: "Saturday", hours: "8:00 AM – 4:00 PM" },
                  { day: "Sunday", hours: "Closed" },
                ].map(({ day, hours }) => (
                  <div key={day} className="flex justify-between">
                    <span className="text-muted-foreground">{day}</span>
                    <span className="font-medium text-foreground">{hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-display font-semibold text-foreground mb-3">
                Follow Us
              </h4>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-smooth text-muted-foreground"
                  data-ocid="contact.instagram_link"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-smooth text-muted-foreground"
                  data-ocid="contact.facebook_link"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-smooth text-muted-foreground"
                  data-ocid="contact.twitter_link"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className={`lg:col-span-3 space-y-5 ${formVisible ? "slide-up animate-delayed-2" : "opacity-0-initial"}`}
            noValidate
            data-ocid="contact.form"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <Label htmlFor="contact-name" className="text-sm font-medium">
                  Your Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="contact-name"
                  type="text"
                  placeholder="Eleanor Marsh"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  onBlur={() => handleBlur("name")}
                  className={errors.name ? "border-destructive" : ""}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  data-ocid="contact.name_input"
                />
                {errors.name && (
                  <p
                    id="name-error"
                    className="text-xs text-destructive"
                    data-ocid="contact.name_field_error"
                  >
                    {errors.name}
                  </p>
                )}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="contact-email" className="text-sm font-medium">
                  Email Address <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  onBlur={() => handleBlur("email")}
                  className={errors.email ? "border-destructive" : ""}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  data-ocid="contact.email_input"
                />
                {errors.email && (
                  <p
                    id="email-error"
                    className="text-xs text-destructive"
                    data-ocid="contact.email_field_error"
                  >
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="contact-subject" className="text-sm font-medium">
                Subject
              </Label>
              <Input
                id="contact-subject"
                type="text"
                placeholder="Workshop inquiry, product order, farm visit..."
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                data-ocid="contact.subject_input"
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="contact-message" className="text-sm font-medium">
                Message <span className="text-destructive">*</span>
              </Label>
              <Textarea
                id="contact-message"
                placeholder="Tell us about your interest in Nettes Garden — products, programs, tours, partnerships..."
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                onBlur={() => handleBlur("message")}
                className={
                  errors.message
                    ? "border-destructive resize-none"
                    : "resize-none"
                }
                aria-describedby={errors.message ? "message-error" : undefined}
                data-ocid="contact.message_textarea"
              />
              {errors.message && (
                <p
                  id="message-error"
                  className="text-xs text-destructive"
                  data-ocid="contact.message_field_error"
                >
                  {errors.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full h-12 text-sm font-medium"
              data-ocid="contact.submit_button"
            >
              {isSubmitting ? (
                <span
                  className="flex items-center gap-2"
                  data-ocid="contact.loading_state"
                >
                  <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Sending Message...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Send Message
                </span>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// APP ROOT
// ─────────────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <Layout>
      <HeroSection />
      <EducationSection />
      <ByproductsSection />
      <ApplicationsSection />
      <AchievementsSection />
      <TestimonialsSection />
      <AboutSection />
      <FAQSection />
      <ContactSection />
    </Layout>
  );
}
