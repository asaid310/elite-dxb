import ProductCard from "./ProductCard";

const sneakers = [
  { name: "Golden Goose Sneakers", brand: "Golden Goose", originalPrice: 399.99, salePrice: 299.99, imageUrl: "https://maresdxb.com/cdn/shop/files/4CC8C7C4-D064-4227-8688-13BD861BD242_700x.webp?v=1775504504", tag: "Hot 🔥", sizes: ["39", "40", "41", "42", "43", "44"] },
];

const streetwear = [
  { name: "Acne Studios Long Sleeve", brand: "Acne Studios", originalPrice: 299.99, salePrice: 179.99, imageUrl: "https://maresdxb.com/cdn/shop/files/7639E999-7754-44E2-9E02-69358012558D.webp?v=1774739851&width=800", tag: "New", sizes: ["S", "M", "L", "XL"] },
  { name: "RL Hoodie", brand: "Ralph Lauren", originalPrice: 299.99, salePrice: 219.99, imageUrl: "https://maresdxb.com/cdn/shop/files/27D0ECF1-0645-45F7-B25A-475F498F2616.jpg?v=1775501553&width=800", tag: "Sale", sizes: ["S", "M", "L", "XL"] },
  { name: "Acne Studio Hoodie", brand: "Acne Studios", originalPrice: 299.99, salePrice: 229.99, imageUrl: "https://maresdxb.com/cdn/shop/files/94B4C9F1-0A3A-46DF-B176-D525EFE05D8F.webp?v=1774740934&width=800", tag: "Trending", sizes: ["S", "M", "L", "XL"] },
  { name: "Essentials Hoodie", brand: "Essentials", originalPrice: 349.99, salePrice: 199.99, imageUrl: "https://maresdxb.com/cdn/shop/files/1000048623_300x300.png?v=1744118304", sizes: ["S", "M", "L", "XL"] },
  { name: "Cole Buxton Set", brand: "Cole Buxton", originalPrice: 449.99, salePrice: 279.99, imageUrl: "https://maresdxb.com/cdn/shop/files/1000067964.jpg?v=1747991991&width=800", tag: "New", sizes: ["S", "M", "L", "XL"] },
  { name: "Corteiz Set", brand: "Corteiz", originalPrice: 399.99, salePrice: 249.99, imageUrl: "https://maresdxb.com/cdn/shop/files/1000067965.jpg?v=1747991916&width=800", tag: "Trending", sizes: ["S", "M", "L", "XL"] },
];

const accessories = [
  { name: "Goyard Card Holder", brand: "Goyard", originalPrice: 189.99, salePrice: 139.99, imageUrl: "https://maresdxb.com/cdn/shop/files/144DA556-9CEC-4DB9-8677-C211F8A24DDA_540x540_8e13f771-139f-4f34-8a26-c02ecda8eb9e_700x.jpg?v=1738489244", tag: "Deal" },
];

const categories = [
  { id: "sneakers", title: "Sneakers 👟", subtitle: "From 299 د.إ", products: sneakers },
  { id: "streetwear", title: "Streetwear 🔥", subtitle: "From 179 د.إ", products: streetwear },
  { id: "accessories", title: "Accessories 💎", subtitle: "From 139 د.إ", products: accessories },
];

const CategoryBanner = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto space-y-20">
        {categories.map((cat) => (
          <div key={cat.id} id={cat.id}>
            <div className="mb-8">
              <span className="text-sm font-bold text-primary uppercase tracking-widest">{cat.subtitle}</span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold mt-2">{cat.title}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.products.map((product, index) => (
                <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.08}s` }}>
                  <ProductCard {...product} currency="د.إ" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryBanner;
