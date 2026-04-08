import ProductCard from "./ProductCard";

const products = [
  { name: "Acne Studios Long Sleeve", brand: "Acne Studios", originalPrice: 299.99, salePrice: 179.99, imageUrl: "https://maresdxb.com/cdn/shop/files/7639E999-7754-44E2-9E02-69358012558D.webp?v=1774739851&width=800", tag: "Hot 🔥", sizes: ["S", "M", "L", "XL"] },
  { name: "RL Cable Knit Quarter Zip", brand: "Ralph Lauren", originalPrice: 299.99, salePrice: 194.99, imageUrl: "https://maresdxb.com/cdn/shop/files/s7-1380288_lifestyle_700x.webp?v=1741807548", tag: "New", sizes: ["S", "M", "L", "XL"] },
  { name: "Golden Goose Sneakers", brand: "Golden Goose", originalPrice: 399.99, salePrice: 299.99, imageUrl: "https://maresdxb.com/cdn/shop/files/4CC8C7C4-D064-4227-8688-13BD861BD242_700x.webp?v=1775504504", tag: "Trending", sizes: ["39", "40", "41", "42", "43", "44"] },
  { name: "Goyard Card Holder", brand: "Goyard", originalPrice: 189.99, salePrice: 139.99, imageUrl: "https://maresdxb.com/cdn/shop/files/144DA556-9CEC-4DB9-8677-C211F8A24DDA_540x540_8e13f771-139f-4f34-8a26-c02ecda8eb9e_700x.jpg?v=1738489244", tag: "Deal" },
  { name: "RL Hoodie", brand: "Ralph Lauren", originalPrice: 299.99, salePrice: 219.99, imageUrl: "https://maresdxb.com/cdn/shop/files/27D0ECF1-0645-45F7-B25A-475F498F2616.jpg?v=1775501553&width=800", tag: "Sale", sizes: ["S", "M", "L", "XL"] },
  { name: "Acne Studio Hoodie", brand: "Acne Studios", originalPrice: 299.99, salePrice: 229.99, imageUrl: "https://maresdxb.com/cdn/shop/files/94B4C9F1-0A3A-46DF-B176-D525EFE05D8F.webp?v=1774740934&width=800", tag: "Limited", sizes: ["S", "M", "L", "XL"] },
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
          <a href="#brands" className="text-sm text-secondary font-medium hover:underline underline-offset-4">
            View all products →
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProductCard {...product} currency="د.إ" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
