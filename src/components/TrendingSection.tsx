import ProductCard from "./ProductCard";

const products = [
  { name: "Air Force Classic", brand: "Streetwear Co.", originalPrice: 150, salePrice: 59, tag: "Hot 🔥" },
  { name: "Oversized Sage Hoodie", brand: "Urban Edge", originalPrice: 120, salePrice: 45, tag: "New" },
  { name: "Gold Chain Shades Set", brand: "Luxe Street", originalPrice: 85, salePrice: 29 },
  { name: "Utility Cargo Pants", brand: "StreetwearCo.", originalPrice: 110, salePrice: 42, tag: "Trending" },
  { name: "Classic Snapback", brand: "CapGame", originalPrice: 45, salePrice: 18 },
  { name: "Retro Runner White", brand: "Sole Society", originalPrice: 180, salePrice: 69, tag: "Limited" },
];

const TrendingSection = () => {
  return (
    <section id="trending" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-sm font-bold text-primary uppercase tracking-widest">What's Hot</span>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold mt-2">Trending Now 🔥</h2>
          </div>
          <a href="#" className="text-sm text-secondary font-medium hover:underline underline-offset-4">
            View all products →
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
