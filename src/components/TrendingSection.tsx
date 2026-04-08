import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";
import { getTrendingProducts } from "@/data/products";

const TrendingSection = () => {
  const products = getTrendingProducts();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.offsetWidth * 0.6;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section id="trending" className="py-14 px-0">
      <div className="container mx-auto px-4 mb-6 flex items-end justify-between">
        <h2 className="text-2xl sm:text-3xl font-heading font-bold">Trending Now 🔥</h2>
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
        {products.map((product) => (
          <div key={product.id} className="min-w-[200px] sm:min-w-[240px] snap-start flex-shrink-0">
            <ProductCard {...product} currency="د.إ" sizes={product.sizes} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingSection;
