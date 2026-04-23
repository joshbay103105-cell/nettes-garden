import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type { ApplicationUseCase } from "@/types";
import { ArrowRight, Layers } from "lucide-react";

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

export function ApplicationsSection() {
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
