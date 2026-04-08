import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const collections = [
  { name: "Cole Buxton", image: "https://maresdxb.com/cdn/shop/files/1000067964.jpg?v=1747991991&width=1500" },
  { name: "Chrome Hearts", image: "https://maresdxb.com/cdn/shop/files/1000067159.jpg?v=1747496931&width=1500" },
  { name: "Essentials", image: "https://maresdxb.com/cdn/shop/files/1000067961.jpg?v=1747991256&width=1500" },
  { name: "Burberry", image: "https://maresdxb.com/cdn/shop/files/1000067962.jpg?v=1747991474&width=1500" },
  { name: "Gallery Dept", image: "https://maresdxb.com/cdn/shop/files/1000067963.jpg?v=1747991726&width=1500" },
  { name: "Corteiz", image: "https://maresdxb.com/cdn/shop/files/1000067965.jpg?v=1747991916&width=1500" },
  { name: "Synaworld", image: "https://maresdxb.com/cdn/shop/files/1000067960.jpg?v=1747990868&width=1500" },
];

const BrandCollections = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.offsetWidth * 0.6;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

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
        {collections.map((col) => (
          <button
            key={col.name}
            onClick={() => navigate(`/brand/${encodeURIComponent(col.name)}`)}
            className="relative min-w-[260px] sm:min-w-[300px] h-[360px] rounded-2xl overflow-hidden snap-start flex-shrink-0 group"
          >
            <img
              src={col.image}
              alt={col.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="text-lg font-heading font-bold text-foreground">{col.name}</h3>
              <span className="text-sm text-primary font-medium">Buy now →</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default BrandCollections;
