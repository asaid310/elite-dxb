import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getAllBrands, getProductsByBrand } from "@/data/products";

const BrandCollections = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.offsetWidth * 0.6;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  const brands = getAllBrands();

  return (
    <section className="py-14">
      <div className="container mx-auto px-4 mb-6 flex items-end justify-between">
        <h2 className="text-2xl sm:text-3xl font-heading font-bold">Shop by Brand</h2>
        <div className="hidden sm:flex gap-2">
          <button onClick={() => scroll("left")} className="p-2 rounded-full border border-border text-muted-foreground hover:text-foreground transition-colors">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button onClick={() => scroll("right")} className="p-2 rounded-full border border-border text-muted-foreground hover:text-foreground transition-colors">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div ref={scrollRef} className="flex gap-4 overflow-x-auto scrollbar-hide px-4 snap-x snap-mandatory">
        {brands.map((brand) => {
          const products = getProductsByBrand(brand);
          const image = products[0]?.imageUrl;
          return (
            <button
              key={brand}
              onClick={() => navigate(`/brand/${encodeURIComponent(brand)}`)}
              className="relative min-w-[260px] sm:min-w-[300px] h-[360px] rounded-2xl overflow-hidden snap-start flex-shrink-0 group transition-transform duration-300 hover:scale-105 active:scale-110 active:z-10"
            >
              {image && (
                <img
                  src={image}
                  alt={brand}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-lg font-heading font-bold text-foreground">{brand}</h3>
                <span className="text-sm text-primary font-medium">Buy now →</span>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default BrandCollections;
