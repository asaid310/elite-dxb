import { ArrowRight, Zap, ImageIcon } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background placeholder */}
      <div className="absolute inset-0 bg-muted/30">
        <div className="w-full h-full flex items-center justify-center border-2 border-dashed border-border/50">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <ImageIcon className="w-16 h-16" />
            <span className="text-sm font-medium">Hero Image (1920×1080)</span>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8 animate-fade-in">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">New drops every week</span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-heading font-bold leading-[0.9] mb-6 animate-slide-up">
            Real Brands.
            <br />
            <span className="text-gradient">Unreal Prices.</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-lg mb-10 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Authentic streetwear, sneakers & accessories from top brands — up to 70% off. No cap. 🧢
          </p>

          <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <a
              href="#trending"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-hero text-primary-foreground font-heading font-semibold text-lg glow-primary hover:scale-105 transition-transform"
            >
              Shop Now <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#sale"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border text-foreground font-heading font-semibold text-lg hover:bg-muted transition-colors"
            >
              See Deals 🔥
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t border-border/50 bg-background/80 backdrop-blur-sm py-3 overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap gap-8">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex gap-8 text-sm font-medium text-muted-foreground">
              <span>🔥 UP TO 70% OFF</span><span>•</span><span>FREE SHIPPING $50+</span><span>•</span><span>100% AUTHENTIC</span><span>•</span><span>NEW DROPS WEEKLY</span><span>•</span><span>EASY RETURNS</span><span>•</span>
              <span>🔥 UP TO 70% OFF</span><span>•</span><span>FREE SHIPPING $50+</span><span>•</span><span>100% AUTHENTIC</span><span>•</span><span>NEW DROPS WEEKLY</span><span>•</span><span>EASY RETURNS</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
