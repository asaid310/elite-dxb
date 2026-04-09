import { useRef } from "react";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import ProductCard from "./ProductCard";
import { useShopifyProducts } from "@/hooks/useShopifyProducts";

const CategoryBanner = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { products, loading } = useShopifyProducts(50);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.offsetWidth * 0.6;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="py-10 space-y-12">
      <div>
        <div className="container mx-auto px-4 mb-4 flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold">All Products 🛍️</h2>
          <div className="hidden sm:flex gap-2">
            <button onClick={() => scroll("left")} className="p-2 rounded-full border border-border text-muted-foreground hover:text-foreground transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={() => scroll("right")} className="p-2 rounded-full border border-border text-muted-foreground hover:text-foreground transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {loading && (
          <div className="flex justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        )}

        <div ref={scrollRef} className="flex gap-4 overflow-x-auto scrollbar-hide px-4 snap-x snap-mandatory pb-2">
          {!loading && products.length === 0 && (
            <div className="w-full text-center py-12 text-muted-foreground">
              <p className="text-lg font-medium">No products found</p>
              <p className="text-sm mt-1">Products will appear here once added to your Shopify store.</p>
            </div>
          )}
          {products.map((product) => (
            <div key={product.node.id} className="min-w-[150px] sm:min-w-[180px] snap-start flex-shrink-0">
              <ProductCard shopifyProduct={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryBanner;
