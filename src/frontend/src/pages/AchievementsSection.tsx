import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type { Achievement } from "@/types";
import { Leaf, Star, Trophy, Users } from "lucide-react";

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

export function AchievementsSection() {
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
