import ProductCard from "./ProductCard";
import { getTrendingProducts } from "@/data/products";

const TrendingSection = () => {
  const products = getTrendingProducts();

  return (
    <section id="trending" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-sm font-bold text-primary uppercase tracking-widest">What's Hot</span>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold mt-2">Trending Now 🔥</h2>
          </div>
          <a href="#brands" className="text-sm text-secondary font-medium hover:underline underline-offset-4">
            View all products →
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={product.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProductCard {...product} currency="د.إ" sizes={product.sizes} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
