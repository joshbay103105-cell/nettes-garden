import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowDown, Leaf, Sprout } from "lucide-react";

export function HeroSection() {
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
            At Green Harvest Farm, we combine generations of farming wisdom with
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
