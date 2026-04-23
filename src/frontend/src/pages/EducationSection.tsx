import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type { WorkshopItem } from "@/types";
import {
  BookOpen,
  GraduationCap,
  Microscope,
  Tractor,
  TreePine,
  Users,
} from "lucide-react";

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

export function EducationSection() {
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
