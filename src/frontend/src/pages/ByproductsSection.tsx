import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type { Byproduct } from "@/types";
import { Leaf, Package } from "lucide-react";

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

export function ByproductsSection() {
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
