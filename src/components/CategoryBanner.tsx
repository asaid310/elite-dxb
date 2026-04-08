import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";
import { getProductsByCategory } from "@/data/products";

const categories = [
  { id: "sneakers", title: "Kicks 👟", category: "sneakers" as const },
  { id: "clothes", title: "Fits 🧥", category: "clothes" as const },
  { id: "accessories", title: "Drip Extras 💎", category: "accessories" as const },
];

const CategoryRow = ({ id, title, category }: typeof categories[number]) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const products = getProductsByCategory(category);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.offsetWidth * 0.6;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <div id={id}>
      <div className="container mx-auto px-4 mb-4 flex items-end justify-between">
        <h2 className="text-2xl sm:text-3xl font-heading font-bold">{title}</h2>
        <div className="hidden sm:flex gap-2">
          <button onClick={() => scroll("left")} className="p-2 rounded-full border border-border text-muted-foreground hover:text-foreground transition-colors">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button onClick={() => scroll("right")} className="p-2 rounded-full border border-border text-muted-foreground hover:text-foreground transition-colors">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div ref={scrollRef} className="flex gap-4 overflow-x-auto scrollbar-hide px-4 snap-x snap-mandatory pb-2">
        {products.map((product) => (
          <div key={product.id} className="min-w-[200px] sm:min-w-[240px] snap-start flex-shrink-0">
            <ProductCard {...product} currency="د.إ" sizes={product.sizes} />
          </div>
        ))}
      </div>
    </div>
  );
};

const CategoryBanner = () => (
  <section className="py-10 space-y-12">
    {categories.map((cat) => (
      <CategoryRow key={cat.id} {...cat} />
    ))}
  </section>
);

export default CategoryBanner;
