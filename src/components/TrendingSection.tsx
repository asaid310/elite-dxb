import { useRef, useMemo } from "react";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import ProductCard from "./ProductCard";
import { useShopifyProducts } from "@/hooks/useShopifyProducts";

const TrendingSection = () => {
  const { products, loading } = useShopifyProducts(250);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Pick ~1 product per brand for variety, then shuffle
  const diverseProducts = useMemo(() => {
    if (!products.length) return [];
    const brandMap = new Map<string, typeof products>();
    for (const p of products) {
      const vendor = p.node.title.split(" ")[0] || "Other";
      if (!brandMap.has(vendor)) brandMap.set(vendor, []);
      brandMap.get(vendor)!.push(p);
    }
    const picked: typeof products = [];
    // Round-robin: take 1 from each brand, repeat until we have ~30
    const brands = Array.from(brandMap.values());
    let round = 0;
    while (picked.length < 30 && round < 5) {
      for (const brandProducts of brands) {
        if (round < brandProducts.length && picked.length < 30) {
          picked.push(brandProducts[round]);
        }
      }
      round++;
    }
    // Shuffle
    for (let i = picked.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [picked[i], picked[j]] = [picked[j], picked[i]];
    }
    return picked;
  }, [products]);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.offsetWidth * 0.6;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section id="trending" className="py-10 px-0">
      <div className="container mx-auto px-4 mb-4 flex items-end justify-between">
        <h2 className="text-xl sm:text-2xl font-heading font-bold">Trending Now 🔥</h2>
        <div className="hidden sm:flex gap-2">
          <button onClick={() => scroll("left")} className="p-1.5 rounded-full border border-border text-muted-foreground hover:text-foreground transition-colors">
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <button onClick={() => scroll("right")} className="p-1.5 rounded-full border border-border text-muted-foreground hover:text-foreground transition-colors">
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {loading && (
        <div className="flex justify-center py-8">
          <Loader2 className="w-6 h-6 animate-spin text-primary" />
        </div>
      )}

      <div ref={scrollRef} className="flex gap-2 overflow-x-auto scrollbar-hide px-4 snap-x snap-mandatory">
        {!loading && diverseProducts.length === 0 && (
          <div className="w-full text-center py-12 text-muted-foreground">
            <p className="text-lg font-medium">No products found</p>
          </div>
        )}
        {diverseProducts.map((product) => (
          <div key={product.node.id} className="min-w-[100px] w-[100px] sm:min-w-[130px] sm:w-[130px] snap-start flex-shrink-0">
            <ProductCard shopifyProduct={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingSection;
