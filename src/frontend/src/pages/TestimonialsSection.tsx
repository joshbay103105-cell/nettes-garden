import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type { Testimonial } from "@/types";
import { Quote, Star } from "lucide-react";

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Local Restaurant Owner",
    quote:
      "Green Harvest Farm has transformed my kitchen. The freshness and flavor of their produce is unmatched — my customers notice it every single meal. I wouldn't source from anywhere else.",
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
      "After transitioning to Green Harvest's organic fertilizer blend, my yields actually improved while my input costs dropped. The soil health improvement has been remarkable and measurable.",
    avatar: "DR",
  },
  {
    id: 5,
    name: "Emma Blackwood",
    role: "Nutritionist & Wellness Coach",
    quote:
      "I recommend Green Harvest eggs and dairy to all my clients. The nutritional density is noticeably higher — you can taste the difference that genuine pasture-raising makes.",
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

export function TestimonialsSection() {
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
            community says about their experience with Green Harvest Farm.
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
