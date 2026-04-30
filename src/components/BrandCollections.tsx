import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getAllBrands, getProductsByBrand } from "@/data/products";

// Pairs of brands whose positions get swapped on each animation tick.
const SWAP_PAIRS: ReadonlyArray<readonly [string, string]> = [
  ["YSL", "Chief Keef"],
  ["Hermes", "AMI"],
  ["Louis Vuitton", "Comme des Garcons"],
];

// Per-brand image overrides for the category card.
const BRAND_IMAGE_OVERRIDES: Record<string, string> = {
  "Ralph Lauren":
    "https://cdn.shopify.com/s/files/1/0635/3531/7043/files/3BC26C0E-87B3-4011-90A1-B1FA55454D0E.webp?v=1774551282&width=800",
};

const applySwaps = (input: string[]) => {
  const arr = [...input];
  for (const [a, b] of SWAP_PAIRS) {
    const i = arr.indexOf(a);
    const j = arr.indexOf(b);
    if (i !== -1 && j !== -1) [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const BrandCollections = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.offsetWidth * 0.6;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  // Hide fragrance-only brands from the homepage "Shop by Brand" carousel.
  const baseBrands = useMemo(
    () =>
      getAllBrands().filter((brand) => {
        const items = getProductsByBrand(brand);
        if (items.length === 0) return false;
        const isFragranceOnly = items.every(
          (p) => p.sizes.length === 1 && p.sizes[0] === "One Size",
        );
        return !isFragranceOnly;
      }),
    [],
  );

  // Toggle between original order and swapped order so the swap is observable
  // and the FLIP effect can animate cards from their previous slot to the new one.
  const [swapped, setSwapped] = useState(true);
  const brands = useMemo(
    () => (swapped ? applySwaps(baseBrands) : baseBrands),
    [baseBrands, swapped],
  );

  // Track each card's previous bounding rect for FLIP animation.
  const cardRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const prevRects = useRef<Map<string, DOMRect>>(new Map());

  // Snapshot positions before the DOM updates with the new order.
  useLayoutEffect(() => {
    cardRefs.current.forEach((el, brand) => {
      prevRects.current.set(brand, el.getBoundingClientRect());
    });
  });

  // After the new order is committed, invert and play.
  useLayoutEffect(() => {
    cardRefs.current.forEach((el, brand) => {
      const prev = prevRects.current.get(brand);
      if (!prev) return;
      const next = el.getBoundingClientRect();
      const dx = prev.left - next.left;
      const dy = prev.top - next.top;
      if (dx === 0 && dy === 0) return;

      // Invert: jump back to old position with no transition...
      el.style.transition = "none";
      el.style.transform = `translate(${dx}px, ${dy}px)`;
      // ...then play: animate to identity on the next frame.
      requestAnimationFrame(() => {
        el.style.transition = "transform 500ms cubic-bezier(0.22, 1, 0.36, 1)";
        el.style.transform = "";
      });
    });
  }, [brands]);

  // Re-trigger the swap on a slow interval so the transition is visible.
  useEffect(() => {
    const id = window.setInterval(() => setSwapped((s) => !s), 4000);
    return () => window.clearInterval(id);
  }, []);

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
          const image = BRAND_IMAGE_OVERRIDES[brand] ?? products[0]?.imageUrl;
          return (
            <button
              key={brand}
              ref={(el) => {
                if (el) cardRefs.current.set(brand, el);
                else cardRefs.current.delete(brand);
              }}
              onClick={() => navigate(`/brand/${encodeURIComponent(brand)}`)}
              className="relative min-w-[260px] sm:min-w-[300px] h-[360px] rounded-2xl overflow-hidden snap-start flex-shrink-0 group hover:scale-105 active:scale-110 active:z-10 will-change-transform"
            >
              {image && (
                <img
                  src={image}
                  alt={brand}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-background/80 backdrop-blur-sm">
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
