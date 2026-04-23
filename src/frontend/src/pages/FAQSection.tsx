import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type { FAQItem } from "@/types";
import { HelpCircle } from "lucide-react";

const FAQS: FAQItem[] = [
  {
    id: 1,
    question: "Are all your products certified organic?",
    answer:
      "Yes. Green Harvest Farm has been USDA Organic Certified since 2012. All produce, dairy, eggs, and soil products are grown or raised without synthetic pesticides, herbicides, GMO inputs, or artificial fertilizers. Our certification is audited annually by a third-party certifier.",
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
      "Use the contact form on our website or email us directly at programs@greenharvestfarm.com. Workshops run monthly and fill quickly, so we recommend booking at least 2-3 weeks in advance. Student groups and non-profits receive discounted pricing.",
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

export function FAQSection() {
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
            Everything you need to know about Green Harvest Farm — from our
            products and certifications to visiting and workshops.
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
