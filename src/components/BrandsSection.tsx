import { useState } from "react";
import ProductCard from "./ProductCard";

const brands = [
  "All",
  "Nike",
  "Adidas",
  "Zara",
  "H&M",
  "Gucci",
  "Puma",
  "New Balance",
];

const productsByBrand: Record<string, { name: string; brand: string; originalPrice: number; salePrice: number; tag?: string }[]> = {
  All: [
    { name: "Air Force Classic", brand: "Nike", originalPrice: 550, salePrice: 219, tag: "Hot 🔥" },
    { name: "Ultraboost 23", brand: "Adidas", originalPrice: 680, salePrice: 269, tag: "New" },
    { name: "Oversized Blazer", brand: "Zara", originalPrice: 420, salePrice: 159 },
    { name: "Suede Classic", brand: "Puma", originalPrice: 380, salePrice: 145, tag: "Trending" },
    { name: "574 Core", brand: "New Balance", originalPrice: 460, salePrice: 179 },
    { name: "Linen Shirt", brand: "H&M", originalPrice: 150, salePrice: 55, tag: "Deal" },
  ],
  Nike: [
    { name: "Air Force Classic", brand: "Nike", originalPrice: 550, salePrice: 219, tag: "Hot 🔥" },
    { name: "Dunk Low Retro", brand: "Nike", originalPrice: 620, salePrice: 249 },
    { name: "Air Max 90", brand: "Nike", originalPrice: 700, salePrice: 289, tag: "Limited" },
  ],
  Adidas: [
    { name: "Ultraboost 23", brand: "Adidas", originalPrice: 680, salePrice: 269, tag: "New" },
    { name: "Samba OG", brand: "Adidas", originalPrice: 480, salePrice: 189, tag: "Trending" },
    { name: "Forum Low", brand: "Adidas", originalPrice: 420, salePrice: 165 },
  ],
  Zara: [
    { name: "Oversized Blazer", brand: "Zara", originalPrice: 420, salePrice: 159 },
    { name: "Cargo Joggers", brand: "Zara", originalPrice: 280, salePrice: 99, tag: "Deal" },
    { name: "Leather Jacket", brand: "Zara", originalPrice: 750, salePrice: 299, tag: "Hot 🔥" },
  ],
  "H&M": [
    { name: "Linen Shirt", brand: "H&M", originalPrice: 150, salePrice: 55, tag: "Deal" },
    { name: "Relaxed Fit Hoodie", brand: "H&M", originalPrice: 180, salePrice: 69 },
    { name: "Wide Leg Pants", brand: "H&M", originalPrice: 130, salePrice: 49 },
  ],
  Gucci: [
    { name: "Ace Sneakers", brand: "Gucci", originalPrice: 2800, salePrice: 1099, tag: "Luxury" },
    { name: "GG Belt", brand: "Gucci", originalPrice: 1600, salePrice: 649 },
    { name: "Slide Sandals", brand: "Gucci", originalPrice: 1200, salePrice: 479, tag: "Hot 🔥" },
  ],
  Puma: [
    { name: "Suede Classic", brand: "Puma", originalPrice: 380, salePrice: 145, tag: "Trending" },
    { name: "RS-X", brand: "Puma", originalPrice: 450, salePrice: 175 },
    { name: "Palermo", brand: "Puma", originalPrice: 350, salePrice: 129 },
  ],
  "New Balance": [
    { name: "574 Core", brand: "New Balance", originalPrice: 460, salePrice: 179 },
    { name: "990v6", brand: "New Balance", originalPrice: 900, salePrice: 359, tag: "Premium" },
    { name: "550", brand: "New Balance", originalPrice: 520, salePrice: 199, tag: "Trending" },
  ],
};

const BrandsSection = () => {
  const [activeBrand, setActiveBrand] = useState("All");
  const products = productsByBrand[activeBrand] || [];

  return (
    <section id="brands" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="mb-10">
          <span className="text-sm font-bold text-primary uppercase tracking-widest">Shop by Brand</span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mt-2">Top Brands ✨</h2>
        </div>

        {/* Brand tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {brands.map((brand) => (
            <button
              key={brand}
              onClick={() => setActiveBrand(brand)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeBrand === brand
                  ? "bg-gradient-hero text-primary-foreground glow-primary scale-105"
                  : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
              }`}
            >
              {brand}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={`${activeBrand}-${index}`} className="animate-slide-up" style={{ animationDelay: `${index * 0.08}s` }}>
              <ProductCard {...product} currency="د.إ" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
