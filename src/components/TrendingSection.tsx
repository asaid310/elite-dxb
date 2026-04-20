import { useRef, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import products from "@/data/products";
import { useCurrencyStore } from "@/stores/currencyStore";

const TrendingSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const format = useCurrencyStore(state => state.format);

  // Pick ~1 product per brand for variety, then shuffle
  const diverseProducts = useMemo(() => {
    const excludedBrands = ["Arsenal", "Barcelona", "Real Madrid", "Mares"];
    const filtered = products.filter(p => !excludedBrands.includes(p.brand) && (p.category === "sneakers" || p.category === "clothes"));
    const brandMap = new Map<string, typeof products>();
    for (const p of filtered) {
      if (!brandMap.has(p.brand)) brandMap.set(p.brand, []);
      brandMap.get(p.brand)!.push(p);
    }
    const picked: typeof products = [];
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
    // Stable shuffle with seed
    for (let i = picked.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [picked[i], picked[j]] = [picked[j], picked[i]];
    }
    return picked;
  }, []);

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

      <div ref={scrollRef} className="flex gap-2 overflow-x-auto scrollbar-hide px-4 snap-x snap-mandatory">
        {diverseProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
            className="min-w-[100px] w-[100px] sm:min-w-[130px] sm:w-[130px] snap-start flex-shrink-0 cursor-pointer group"
          >
            <div className="relative rounded-xl overflow-hidden bg-gradient-card border border-border/50 shadow-card hover:border-primary/30 transition-all duration-300">
              <div className="relative aspect-square overflow-hidden bg-muted/20">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {product.tag && (
                  <span className="absolute top-1 left-1 text-[8px] font-bold bg-primary text-primary-foreground px-1.5 py-0.5 rounded-full">
                    {product.tag}
                  </span>
                )}
              </div>
              <div className="p-1.5">
                <h3 className="font-heading font-semibold text-[11px] text-foreground truncate">{product.name}</h3>
                <span className="text-[11px] font-bold text-primary">{format(product.salePrice)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingSection;
