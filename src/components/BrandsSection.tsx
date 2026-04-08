import { useState } from "react";
import ProductCard from "./ProductCard";

const brands = [
  "All",
  "Acne Studios",
  "Ralph Lauren",
  "Golden Goose",
  "Goyard",
  "Essentials",
  "Chrome Hearts",
  "Burberry",
  "Cole Buxton",
  "Corteiz",
  "Gallery Dept",
  "Synaworld",
];

interface Product {
  name: string;
  brand: string;
  originalPrice: number;
  salePrice: number;
  imageUrl: string;
  tag?: string;
  sizes?: string[];
}

const productsByBrand: Record<string, Product[]> = {
  "Acne Studios": [
    { name: "Acne Studios Long Sleeve", brand: "Acne Studios", originalPrice: 299.99, salePrice: 179.99, imageUrl: "https://maresdxb.com/cdn/shop/files/7639E999-7754-44E2-9E02-69358012558D.webp?v=1774739851&width=800", tag: "New", sizes: ["S", "M", "L", "XL"] },
    { name: "Acne Studios Long Sleeve", brand: "Acne Studios", originalPrice: 299.99, salePrice: 179.99, imageUrl: "https://maresdxb.com/cdn/shop/files/5A6C8BE5-8AB2-4DFF-802C-B56CCF7B0081.webp?v=1774739787&width=800", sizes: ["S", "M", "L", "XL"] },
    { name: "Acne Studios Long Sleeve", brand: "Acne Studios", originalPrice: 299.99, salePrice: 179.99, imageUrl: "https://maresdxb.com/cdn/shop/files/5B2BDE0E-8275-4BBD-89F2-FB52004EEAF0.webp?v=1774739604&width=800", sizes: ["S", "M", "L"] },
    { name: "Acne Studios Long Sleeve", brand: "Acne Studios", originalPrice: 299.99, salePrice: 179.99, imageUrl: "https://maresdxb.com/cdn/shop/files/F37E64ED-E2DB-46AE-96BA-C449F5A10E02.webp?v=1774739520&width=800", sizes: ["M", "L", "XL"] },
    { name: "Acne Studios Long Sleeve", brand: "Acne Studios", originalPrice: 299.99, salePrice: 179.99, imageUrl: "https://maresdxb.com/cdn/shop/files/CD965AA1-583D-4A60-A1BB-56EA3EB9A475.webp?v=1774739259&width=800", sizes: ["S", "M", "L"] },
    { name: "Acne Studios Long Sleeve", brand: "Acne Studios", originalPrice: 299.99, salePrice: 179.99, imageUrl: "https://maresdxb.com/cdn/shop/files/06F2EAA2-4FB3-48E5-B72A-B94B1F030B7C.webp?v=1774738955&width=800", tag: "Hot 🔥", sizes: ["S", "M", "L", "XL"] },
    { name: "Acne Studio Hoodie", brand: "Acne Studios", originalPrice: 299.99, salePrice: 229.99, imageUrl: "https://maresdxb.com/cdn/shop/files/94B4C9F1-0A3A-46DF-B176-D525EFE05D8F.webp?v=1774740934&width=800", tag: "Trending", sizes: ["S", "M", "L", "XL"] },
    { name: "Acne Studio Hoodie", brand: "Acne Studios", originalPrice: 299.99, salePrice: 229.99, imageUrl: "https://maresdxb.com/cdn/shop/files/553E3EA1-7D7D-4F0E-981E-FF553723BF07.webp?v=1774740934&width=800", sizes: ["M", "L", "XL"] },
    { name: "Acne Studios Tee", brand: "Acne Studios", originalPrice: 249.99, salePrice: 149.99, imageUrl: "https://maresdxb.com/cdn/shop/files/02D0EEB0-195F-47E7-917A-7D17390DD9D5.webp?v=1774740007&width=800", sizes: ["S", "M", "L"] },
    { name: "Acne Studios Tee", brand: "Acne Studios", originalPrice: 249.99, salePrice: 149.99, imageUrl: "https://maresdxb.com/cdn/shop/files/ECD2E428-A0A7-4843-A796-41E9A6848C3D.webp?v=1774740087&width=800", sizes: ["S", "M", "L", "XL"] },
    { name: "Acne Studios Tee", brand: "Acne Studios", originalPrice: 249.99, salePrice: 149.99, imageUrl: "https://maresdxb.com/cdn/shop/files/868B50C9-44D1-4112-B57B-5D1A83D4FC54.webp?v=1774740548&width=800", tag: "Deal", sizes: ["M", "L"] },
    { name: "Acne Studios Tee", brand: "Acne Studios", originalPrice: 249.99, salePrice: 149.99, imageUrl: "https://maresdxb.com/cdn/shop/files/06D2D354-BEE1-4E2A-AB1B-8137123A1CDE.webp?v=1774740643&width=800", sizes: ["S", "M", "L"] },
    { name: "Acne Studios Tee", brand: "Acne Studios", originalPrice: 249.99, salePrice: 149.99, imageUrl: "https://maresdxb.com/cdn/shop/files/36E17278-53D1-456E-BC4C-25C9E4434058.webp?v=1774740693&width=800", sizes: ["S", "M", "L", "XL"] },
  ],
  "Ralph Lauren": [
    { name: "RL Cable Knit Quarter Zip", brand: "Ralph Lauren", originalPrice: 299.99, salePrice: 194.99, imageUrl: "https://maresdxb.com/cdn/shop/files/s7-1380288_lifestyle_700x.webp?v=1741807548", tag: "Hot 🔥", sizes: ["S", "M", "L", "XL"] },
    { name: "RL Hoodie", brand: "Ralph Lauren", originalPrice: 299.99, salePrice: 219.99, imageUrl: "https://maresdxb.com/cdn/shop/files/27D0ECF1-0645-45F7-B25A-475F498F2616.jpg?v=1775501553&width=800", tag: "Sale", sizes: ["S", "M", "L", "XL"] },
    { name: "RL Hoodie", brand: "Ralph Lauren", originalPrice: 299.99, salePrice: 219.99, imageUrl: "https://maresdxb.com/cdn/shop/files/C3BA3F5B-1CED-47B1-9CCD-82B809749AA3.png?v=1775501553&width=800", tag: "Sale", sizes: ["M", "L", "XL"] },
    { name: "RL Hoodie", brand: "Ralph Lauren", originalPrice: 299.99, salePrice: 219.99, imageUrl: "https://maresdxb.com/cdn/shop/files/56FA2A80-4DD2-40A8-A6D1-A8F22820214F.png?v=1775501553&width=800", tag: "Sale", sizes: ["S", "M", "L"] },
    { name: "RL Hoodie", brand: "Ralph Lauren", originalPrice: 299.99, salePrice: 219.99, imageUrl: "https://maresdxb.com/cdn/shop/files/056A93E0-06B6-44DD-BEAB-012B6E2BB9A5.png?v=1775501553&width=800", sizes: ["S", "M", "L", "XL"] },
    { name: "RL Hoodie", brand: "Ralph Lauren", originalPrice: 299.99, salePrice: 219.99, imageUrl: "https://maresdxb.com/cdn/shop/files/143DDE22-6F99-4437-A457-5E8E92966235.png?v=1775501553&width=800", sizes: ["M", "L", "XL"] },
    { name: "RL Hoodie", brand: "Ralph Lauren", originalPrice: 299.99, salePrice: 219.99, imageUrl: "https://maresdxb.com/cdn/shop/files/25E52F83-8535-48D8-9393-8635AE7E96D1.png?v=1775501553&width=800", sizes: ["S", "M", "L"] },
    { name: "RL Hoodie", brand: "Ralph Lauren", originalPrice: 299.99, salePrice: 219.99, imageUrl: "https://maresdxb.com/cdn/shop/files/8ACDB19F-06E4-40CC-9841-E68E8D660A58.png?v=1775501553&width=800", tag: "New", sizes: ["S", "M", "L", "XL"] },
  ],
  "Golden Goose": [
    { name: "Golden Goose Sneakers", brand: "Golden Goose", originalPrice: 399.99, salePrice: 299.99, imageUrl: "https://maresdxb.com/cdn/shop/files/4CC8C7C4-D064-4227-8688-13BD861BD242_700x.webp?v=1775504504", tag: "Hot 🔥", sizes: ["39", "40", "41", "42", "43", "44"] },
  ],
  "Goyard": [
    { name: "Goyard Card Holder", brand: "Goyard", originalPrice: 189.99, salePrice: 139.99, imageUrl: "https://maresdxb.com/cdn/shop/files/144DA556-9CEC-4DB9-8677-C211F8A24DDA_540x540_8e13f771-139f-4f34-8a26-c02ecda8eb9e_700x.jpg?v=1738489244", tag: "Deal" },
  ],
  "Essentials": [
    { name: "Essentials Hoodie", brand: "Essentials", originalPrice: 349.99, salePrice: 199.99, imageUrl: "https://maresdxb.com/cdn/shop/files/1000048623_300x300.png?v=1744118304", tag: "Trending", sizes: ["S", "M", "L", "XL"] },
  ],
  "Chrome Hearts": [
    { name: "Chrome Hearts Tee", brand: "Chrome Hearts", originalPrice: 399.99, salePrice: 249.99, imageUrl: "https://maresdxb.com/cdn/shop/files/1000067159.jpg?v=1747496931&width=800", tag: "Limited", sizes: ["S", "M", "L", "XL"] },
  ],
  "Burberry": [
    { name: "Burberry Piece", brand: "Burberry", originalPrice: 499.99, salePrice: 299.99, imageUrl: "https://maresdxb.com/cdn/shop/files/1000048630_300x300.jpg?v=1744118527", tag: "Luxury", sizes: ["S", "M", "L", "XL"] },
  ],
  "Cole Buxton": [
    { name: "Cole Buxton Set", brand: "Cole Buxton", originalPrice: 449.99, salePrice: 279.99, imageUrl: "https://maresdxb.com/cdn/shop/files/1000067964.jpg?v=1747991991&width=800", tag: "New", sizes: ["S", "M", "L", "XL"] },
  ],
  "Corteiz": [
    { name: "Corteiz Set", brand: "Corteiz", originalPrice: 399.99, salePrice: 249.99, imageUrl: "https://maresdxb.com/cdn/shop/files/1000067965.jpg?v=1747991916&width=800", tag: "Trending", sizes: ["S", "M", "L", "XL"] },
  ],
  "Gallery Dept": [
    { name: "Gallery Dept Piece", brand: "Gallery Dept", originalPrice: 499.99, salePrice: 329.99, imageUrl: "https://maresdxb.com/cdn/shop/files/1000067963.jpg?v=1747991726&width=800", tag: "Hot 🔥", sizes: ["S", "M", "L", "XL"] },
  ],
  "Synaworld": [
    { name: "Synaworld Set", brand: "Synaworld", originalPrice: 379.99, salePrice: 229.99, imageUrl: "https://maresdxb.com/cdn/shop/files/1000067960.jpg?v=1747990868&width=800", tag: "Trending", sizes: ["S", "M", "L", "XL"] },
  ],
};

// Build "All" from first 2 of each brand
const allProducts: Product[] = [];
Object.values(productsByBrand).forEach((products) => {
  allProducts.push(...products.slice(0, 2));
});
productsByBrand["All"] = allProducts;

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
