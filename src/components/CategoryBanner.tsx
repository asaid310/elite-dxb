import { useRef } from "react";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import ProductCard from "./ProductCard";
import { useShopifyProducts } from "@/hooks/useShopifyProducts";

const CategoryBanner = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { products, loading } = useShopifyProducts(250);

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

        {loading && (
          <div className="flex justify-center py-8">
            <Loader2 className="w-6 h-6 animate-spin text-primary" />
          </div>
        )}

        <div ref={scrollRef} className="flex gap-2 overflow-x-auto scrollbar-hide px-4 snap-x snap-mandatory pb-2">
          {!loading && products.length === 0 && (
            <div className="w-full text-center py-12 text-muted-foreground">
              <p className="text-lg font-medium">No products found</p>
            </div>
          )}
          {products.map((product) => (
            <div key={product.node.id} className="min-w-[100px] w-[100px] sm:min-w-[130px] sm:w-[130px] snap-start flex-shrink-0">
              <ProductCard shopifyProduct={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryBanner;
