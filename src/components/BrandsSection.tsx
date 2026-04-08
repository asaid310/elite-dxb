import { useState } from "react";
import ProductCard from "./ProductCard";
import products, { getAllBrands, getProductsByBrand } from "@/data/products";

const brands = ["All", ...getAllBrands()];

const BrandsSection = () => {
  const [activeBrand, setActiveBrand] = useState("All");
  const displayProducts = activeBrand === "All" ? products.slice(0, 12) : getProductsByBrand(activeBrand);

  return (
    <section id="brands" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="mb-10">
          <span className="text-sm font-bold text-primary uppercase tracking-widest">Shop by Brand</span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mt-2">Top Brands ✨</h2>
        </div>

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayProducts.map((product, index) => (
            <div key={product.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.08}s` }}>
              <ProductCard {...product} currency="د.إ" sizes={product.sizes} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
