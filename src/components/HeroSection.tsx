import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getAllBrands } from "@/data/products";
import heroBg from "@/assets/hero-bg.jpeg";

const HeroSection = () => {
  const navigate = useNavigate();
  const brands = getAllBrands();

  return (
    <section className="relative pt-28 pb-0 overflow-hidden">
      {/* Full-width hero banner */}
      <div className="relative w-full h-[70vh] min-h-[400px] max-h-[700px]">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/60 via-muted/30 to-background" />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />

        <div className="relative z-10 h-full flex items-end pb-12 px-6 sm:px-10">
          <div className="max-w-xl">
            <h1 className="text-4xl sm:text-6xl font-heading font-bold leading-tight uppercase tracking-tight">
              Free Shipping
              <br />
              <span className="text-gradient">All Over The UAE</span>
            </h1>
            <a
              href="#trending"
              className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-foreground hover:text-primary transition-colors underline underline-offset-4"
            >
              Buy now <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Brands horizontal scroll */}
      <div className="border-y border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-1 px-4 py-3 min-w-max">
            {brands.map((brand) => (
              <button
                key={brand}
                onClick={() => navigate(`/brand/${encodeURIComponent(brand)}`)}
                className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-all whitespace-nowrap"
              >
                {brand}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
