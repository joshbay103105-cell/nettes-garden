import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type { TeamMember } from "@/types";
import { Eye, Heart, Target } from "lucide-react";

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: "Eleanor Marsh",
    role: "Founder & Head Farmer",
    bio: "Third-generation farmer with a Masters in Sustainable Agriculture from UC Davis. Eleanor founded Green Harvest in 2008 with a vision to prove that profitable farming and environmental stewardship go hand in hand.",
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
    bio: "Supply chain expert who oversees all post-harvest processing, product development, and distribution. Mei has helped grow Green Harvest into a zero-waste operation over the past 7 years.",
  },
  {
    id: 4,
    name: "Thomas Osei",
    role: "Soil Scientist & Agronomist",
    bio: "PhD in Soil Microbiology. Thomas manages our land health programs, develops our proprietary compost blends, and leads our research partnerships with regional universities.",
  },
];

const TEAM_AVATARS = ["🌾", "📚", "⚙️", "🔬"];

export function AboutSection() {
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
            Green Harvest Farm is more than a business — it's a living
            commitment to the land, the people who work it, and the communities
            who depend on it.
          </p>
        </div>

        {/* Story */}
        <div
          ref={storyRef}
          className="grid lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <img
            src="/assets/generated/farm-aerial.dim_800x600.jpg"
            alt="Green Harvest Farm aerial view"
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
                Green Harvest Farm began as a bold experiment: could
                sustainable, regenerative farming actually outperform
                conventional methods? Fifteen years later, our 500+ acre
                operation proves every day that it can — and must.
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
            alt="The Green Harvest Farm team"
            className="w-full h-64 lg:h-80 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
