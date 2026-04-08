import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const collections = [
  { name: "Cole Buxton", image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&h=800&fit=crop" }, // minimal gym tee, neutral tones
  { name: "Chrome Hearts", image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=800&fit=crop" }, // silver rings/jewelry dark aesthetic
  { name: "Essentials", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop" }, // oversized hoodie neutral tones
  { name: "Burberry", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop" }, // trench coat classic style
  { name: "Gallery Dept", image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&h=800&fit=crop" }, // paint splatter artistic denim
  { name: "Corteiz", image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=600&h=800&fit=crop" }, // urban cargo streetwear
  { name: "Synaworld", image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=600&h=800&fit=crop" }, // dark techwear aesthetic
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
