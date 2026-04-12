import { useRef, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import products from "@/data/products";

const CategoryBanner = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Shuffle and show all products
  const shuffled = useMemo(() => {
    const arr = [...products];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, []);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.offsetWidth * 0.6;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="py-10 space-y-12">
      <div>
        <div className="container mx-auto px-4 mb-4 flex items-end justify-between">
          <h2 className="text-xl sm:text-2xl font-heading font-bold">All Products 🛍️</h2>
          <div className="hidden sm:flex gap-2">
            <button onClick={() => scroll("left")} className="p-1.5 rounded-full border border-border text-muted-foreground hover:text-foreground transition-colors">
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button onClick={() => scroll("right")} className="p-1.5 rounded-full border border-border text-muted-foreground hover:text-foreground transition-colors">
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div ref={scrollRef} className="flex gap-2 overflow-x-auto scrollbar-hide px-4 snap-x snap-mandatory pb-2">
          {shuffled.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="min-w-[100px] w-[100px] sm:min-w-[130px] sm:w-[130px] snap-start flex-shrink-0 group"
            >
              <div className="relative aspect-square rounded-lg overflow-hidden bg-muted/20 border border-border/50">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                {product.tag && (
                  <span className="absolute top-1 left-1 bg-primary text-primary-foreground text-[8px] px-1.5 py-0.5 rounded-full font-semibold">
                    {product.tag}
                  </span>
                )}
              </div>
              <p className="text-[10px] sm:text-xs font-medium text-foreground mt-1 line-clamp-1">{product.name}</p>
              <div className="flex items-center gap-1">
                <span className="text-[10px] sm:text-xs font-bold text-primary">{product.salePrice.toFixed(2)} د.إ</span>
                {product.originalPrice > product.salePrice && (
                  <span className="text-[8px] sm:text-[10px] text-muted-foreground line-through">{product.originalPrice.toFixed(2)}</span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryBanner;
