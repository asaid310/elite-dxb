import ProductCard from "./ProductCard";
import { getProductsByCategory } from "@/data/products";

const categories = [
  { id: "sneakers", title: "Sneakers 👟", subtitle: "From 124 د.إ", category: "sneakers" as const },
  { id: "clothes", title: "Clothes 👕", subtitle: "From 149 د.إ", category: "clothes" as const },
  { id: "accessories", title: "Accessories 💎", subtitle: "Wallets · Hats · More", category: "accessories" as const },
];

const CategoryBanner = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto space-y-20">
        {categories.map((cat) => {
          const products = getProductsByCategory(cat.category);
          return (
            <div key={cat.id} id={cat.id}>
              <div className="mb-8">
                <span className="text-sm font-bold text-primary uppercase tracking-widest">{cat.subtitle}</span>
                <h2 className="text-3xl sm:text-4xl font-heading font-bold mt-2">{cat.title}</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product, index) => (
                  <div key={product.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.08}s` }}>
                    <ProductCard {...product} currency="د.إ" sizes={product.sizes} />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CategoryBanner;
