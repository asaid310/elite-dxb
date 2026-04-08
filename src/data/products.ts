export interface Product {
  id: string;
  name: string;
  brand: string;
  category: "sneakers" | "clothes" | "accessories";
  originalPrice: number;
  salePrice: number;
  imageUrl: string;
  images?: string[];
  tag?: string;
  sizes: string[];
  description?: string;
}

const products: Product[] = [
  // ===== SNEAKERS =====
  { id: "golden-goose-1", name: "Golden Goose", brand: "Golden Goose", category: "sneakers", originalPrice: 399.99, salePrice: 299.99, imageUrl: "https://maresdxb.com/cdn/shop/files/4CC8C7C4-D064-4227-8688-13BD861BD242_700x.webp?v=1775504504", tag: "Hot 🔥", sizes: ["39", "40", "41", "42", "43", "44"], description: "Premium Golden Goose sneakers with signature distressed finish." },
  { id: "af1-white", name: "AF1 White", brand: "Nike", category: "sneakers", originalPrice: 199.99, salePrice: 129.99, imageUrl: "https://maresdxb.com/cdn/shop/files/download_25.webp?v=1744715032&width=800", tag: "Hot 🔥", sizes: ["39", "40", "41", "42", "43", "44", "45"], description: "Classic Nike Air Force 1 in triple white." },
  { id: "af1-black", name: "AF1 Black", brand: "Nike", category: "sneakers", originalPrice: 199.99, salePrice: 129.99, imageUrl: "https://maresdxb.com/cdn/shop/files/download_26_d6526682-3ae6-44ac-b74f-1e4cca43ed9a.webp?v=1744715061&width=800", sizes: ["39", "40", "41", "42", "43", "44", "45"], description: "Classic Nike Air Force 1 in all black." },
  { id: "adidas-campus-1", name: "Adidas Campus", brand: "Adidas", category: "sneakers", originalPrice: 189.99, salePrice: 124.99, imageUrl: "https://maresdxb.com/cdn/shop/files/download_40.webp?v=1744738678&width=800", tag: "Trending", sizes: ["39", "40", "41", "42", "43", "44"], description: "Adidas Campus sneakers with suede upper." },
  { id: "adidas-campus-2", name: "Adidas Campus", brand: "Adidas", category: "sneakers", originalPrice: 189.99, salePrice: 124.99, imageUrl: "https://maresdxb.com/cdn/shop/files/BC6F089E-8E15-4CA4-91DA-D73C060D8403.png?v=1744843112&width=800", sizes: ["39", "40", "41", "42", "43", "44"], description: "Adidas Campus sneakers in a different colorway." },
  { id: "adidas-campus-3", name: "Adidas Campus", brand: "Adidas", category: "sneakers", originalPrice: 189.99, salePrice: 124.99, imageUrl: "https://maresdxb.com/cdn/shop/files/download_43.webp?v=1744740139&width=800", tag: "New", sizes: ["39", "40", "41", "42", "43", "44"], description: "Adidas Campus sneakers — clean colorway." },

  // ===== CLOTHES — Acne Studios =====
  { id: "acne-ls-1", name: "Acne Studios Long Sleeve", brand: "Acne Studios", category: "clothes", originalPrice: 299.99, salePrice: 179.99, imageUrl: "https://maresdxb.com/cdn/shop/files/06F2EAA2-4FB3-48E5-B72A-B94B1F030B7C.webp?v=1774738955&width=800", tag: "Hot 🔥", sizes: ["S", "M", "L", "XL"], description: "Acne Studios Stockholm 1996 long sleeve tee." },
  { id: "acne-ls-2", name: "Acne Studios Long Sleeve", brand: "Acne Studios", category: "clothes", originalPrice: 299.99, salePrice: 179.99, imageUrl: "https://maresdxb.com/cdn/shop/files/CD965AA1-583D-4A60-A1BB-56EA3EB9A475.webp?v=1774739259&width=800", sizes: ["S", "M", "L", "XL"], description: "Acne Studios Stockholm 1996 long sleeve tee." },
  { id: "acne-ls-3", name: "Acne Studios Long Sleeve", brand: "Acne Studios", category: "clothes", originalPrice: 299.99, salePrice: 179.99, imageUrl: "https://maresdxb.com/cdn/shop/files/F37E64ED-E2DB-46AE-96BA-C449F5A10E02.webp?v=1774739520&width=800", sizes: ["M", "L", "XL"], description: "Acne Studios Stockholm 1996 long sleeve tee." },
  { id: "acne-ls-4", name: "Acne Studios Long Sleeve", brand: "Acne Studios", category: "clothes", originalPrice: 299.99, salePrice: 179.99, imageUrl: "https://maresdxb.com/cdn/shop/files/5B2BDE0E-8275-4BBD-89F2-FB52004EEAF0.webp?v=1774739604&width=800", sizes: ["S", "M", "L"], description: "Acne Studios Stockholm 1996 long sleeve tee." },
  { id: "acne-ls-5", name: "Acne Studios Long Sleeve", brand: "Acne Studios", category: "clothes", originalPrice: 299.99, salePrice: 179.99, imageUrl: "https://maresdxb.com/cdn/shop/files/5A6C8BE5-8AB2-4DFF-802C-B56CCF7B0081.webp?v=1774739787&width=800", tag: "New", sizes: ["S", "M", "L", "XL"], description: "Acne Studios Stockholm 1996 long sleeve tee." },
  { id: "acne-ls-6", name: "Acne Studios Long Sleeve", brand: "Acne Studios", category: "clothes", originalPrice: 299.99, salePrice: 179.99, imageUrl: "https://maresdxb.com/cdn/shop/files/7639E999-7754-44E2-9E02-69358012558D.webp?v=1774739851&width=800", sizes: ["S", "M", "L", "XL"], description: "Acne Studios Stockholm 1996 long sleeve tee." },
  { id: "acne-hoodie-1", name: "Acne Studio Hoodie", brand: "Acne Studios", category: "clothes", originalPrice: 299.99, salePrice: 229.99, imageUrl: "https://maresdxb.com/cdn/shop/files/94B4C9F1-0A3A-46DF-B176-D525EFE05D8F.webp?v=1774740934&width=800", tag: "Trending", sizes: ["S", "M", "L", "XL"], description: "Premium Acne Studios hoodie." },
  { id: "acne-hoodie-2", name: "Acne Studio Hoodie", brand: "Acne Studios", category: "clothes", originalPrice: 299.99, salePrice: 229.99, imageUrl: "https://maresdxb.com/cdn/shop/files/553E3EA1-7D7D-4F0E-981E-FF553723BF07.webp?v=1774740934&width=800", sizes: ["M", "L", "XL"], description: "Premium Acne Studios hoodie." },
  { id: "acne-tee-1", name: "Acne Studios Tee", brand: "Acne Studios", category: "clothes", originalPrice: 299.99, salePrice: 159.99, imageUrl: "https://maresdxb.com/cdn/shop/files/02D0EEB0-195F-47E7-917A-7D17390DD9D5.webp?v=1774740007&width=800", sizes: ["S", "M", "L"], description: "Acne Studios tee with logo print." },
  { id: "acne-tee-2", name: "Acne Studios Tee", brand: "Acne Studios", category: "clothes", originalPrice: 299.99, salePrice: 159.99, imageUrl: "https://maresdxb.com/cdn/shop/files/ECD2E428-A0A7-4843-A796-41E9A6848C3D.webp?v=1774740087&width=800", tag: "Deal", sizes: ["S", "M", "L", "XL"], description: "Acne Studios tee with logo print." },
  { id: "acne-tee-3", name: "Acne Studios Tee", brand: "Acne Studios", category: "clothes", originalPrice: 299.99, salePrice: 159.99, imageUrl: "https://maresdxb.com/cdn/shop/files/868B50C9-44D1-4112-B57B-5D1A83D4FC54.webp?v=1774740548&width=800", sizes: ["M", "L"], description: "Acne Studios tee with logo print." },
  { id: "acne-tee-4", name: "Acne Studios Tee", brand: "Acne Studios", category: "clothes", originalPrice: 299.99, salePrice: 159.99, imageUrl: "https://maresdxb.com/cdn/shop/files/06D2D354-BEE1-4E2A-AB1B-8137123A1CDE.webp?v=1774740643&width=800", sizes: ["S", "M", "L"], description: "Acne Studios tee with logo print." },
  { id: "acne-tee-5", name: "Acne Studios Tee", brand: "Acne Studios", category: "clothes", originalPrice: 299.99, salePrice: 159.99, imageUrl: "https://maresdxb.com/cdn/shop/files/36E17278-53D1-456E-BC4C-25C9E4434058.webp?v=1774740693&width=800", sizes: ["S", "M", "L", "XL"], description: "Acne Studios tee with logo print." },

  // ===== CLOTHES — Ralph Lauren =====
  { id: "rl-quarter-zip", name: "RL Cable Knit Quarter Zip", brand: "Ralph Lauren", category: "clothes", originalPrice: 299.99, salePrice: 194.99, imageUrl: "https://maresdxb.com/cdn/shop/files/s7-1380288_lifestyle_700x.webp?v=1741807548", tag: "Hot 🔥", sizes: ["S", "M", "L", "XL"], description: "Ralph Lauren cable knit quarter zip sweater." },
  { id: "rl-hoodie-1", name: "RL Hoodie", brand: "Ralph Lauren", category: "clothes", originalPrice: 299.99, salePrice: 219.99, imageUrl: "https://maresdxb.com/cdn/shop/files/27D0ECF1-0645-45F7-B25A-475F498F2616.jpg?v=1775501553&width=800", tag: "Sale", sizes: ["S", "M", "L", "XL"], description: "Classic Ralph Lauren hoodie." },
  { id: "rl-hoodie-2", name: "RL Hoodie", brand: "Ralph Lauren", category: "clothes", originalPrice: 299.99, salePrice: 219.99, imageUrl: "https://maresdxb.com/cdn/shop/files/C3BA3F5B-1CED-47B1-9CCD-82B809749AA3.png?v=1775501553&width=800", tag: "Sale", sizes: ["M", "L", "XL"], description: "Classic Ralph Lauren hoodie." },
  { id: "rl-hoodie-3", name: "RL Hoodie", brand: "Ralph Lauren", category: "clothes", originalPrice: 299.99, salePrice: 219.99, imageUrl: "https://maresdxb.com/cdn/shop/files/56FA2A80-4DD2-40A8-A6D1-A8F22820214F.png?v=1775501553&width=800", sizes: ["S", "M", "L"], description: "Classic Ralph Lauren hoodie." },
  { id: "rl-hoodie-4", name: "RL Hoodie", brand: "Ralph Lauren", category: "clothes", originalPrice: 299.99, salePrice: 219.99, imageUrl: "https://maresdxb.com/cdn/shop/files/056A93E0-06B6-44DD-BEAB-012B6E2BB9A5.png?v=1775501553&width=800", sizes: ["S", "M", "L", "XL"], description: "Classic Ralph Lauren hoodie." },
  { id: "rl-hoodie-5", name: "RL Hoodie", brand: "Ralph Lauren", category: "clothes", originalPrice: 299.99, salePrice: 219.99, imageUrl: "https://maresdxb.com/cdn/shop/files/143DDE22-6F99-4437-A457-5E8E92966235.png?v=1775501553&width=800", sizes: ["M", "L", "XL"], description: "Classic Ralph Lauren hoodie." },
  { id: "rl-hoodie-6", name: "RL Hoodie", brand: "Ralph Lauren", category: "clothes", originalPrice: 299.99, salePrice: 219.99, imageUrl: "https://maresdxb.com/cdn/shop/files/25E52F83-8535-48D8-9393-8635AE7E96D1.png?v=1775501553&width=800", tag: "New", sizes: ["S", "M", "L"], description: "Classic Ralph Lauren hoodie." },
  { id: "rl-hoodie-7", name: "RL Hoodie", brand: "Ralph Lauren", category: "clothes", originalPrice: 299.99, salePrice: 219.99, imageUrl: "https://maresdxb.com/cdn/shop/files/8ACDB19F-06E4-40CC-9841-E68E8D660A58.png?v=1775501553&width=800", sizes: ["S", "M", "L", "XL"], description: "Classic Ralph Lauren hoodie." },

  // ===== CLOTHES — AMI =====
  { id: "ami-jacket-1", name: "Ami Jacket", brand: "AMI", category: "clothes", originalPrice: 229.99, salePrice: 174.99, imageUrl: "https://maresdxb.com/cdn/shop/files/23973704_54167630_1000.jpg?v=1744544254&width=800", tag: "New", sizes: ["S", "M", "L", "XL"], description: "AMI Paris jacket with clean tailoring." },
  { id: "ami-jacket-2", name: "Ami Jacket", brand: "AMI", category: "clothes", originalPrice: 229.99, salePrice: 174.99, imageUrl: "https://maresdxb.com/cdn/shop/files/23974297_58395854_1000.jpg?v=1744544337&width=800", sizes: ["S", "M", "L", "XL"], description: "AMI Paris jacket." },
  { id: "ami-jacket-3", name: "Ami Jacket", brand: "AMI", category: "clothes", originalPrice: 174.99, salePrice: 174.99, imageUrl: "https://maresdxb.com/cdn/shop/files/23975005_54134064_1000.jpg?v=1744544440&width=800", sizes: ["S", "M", "L"], description: "AMI Paris jacket." },
  { id: "ami-shirt-1", name: "Ami Paris Shirt", brand: "AMI", category: "clothes", originalPrice: 209.99, salePrice: 149.99, imageUrl: "https://maresdxb.com/cdn/shop/files/23973922_54133328_1000.jpg?v=1736794287&width=800", tag: "Deal", sizes: ["S", "M", "L", "XL"], description: "AMI Paris button-up shirt." },
  { id: "ami-shirt-2", name: "Ami Paris Shirt", brand: "AMI", category: "clothes", originalPrice: 189.99, salePrice: 149.99, imageUrl: "https://maresdxb.com/cdn/shop/files/23974246_54167850_1000.jpg?v=1736794350&width=800", sizes: ["S", "M", "L", "XL"], description: "AMI Paris shirt." },

  // ===== CLOTHES — Other Brands =====
  { id: "essentials-hoodie", name: "Essentials Hoodie", brand: "Essentials", category: "clothes", originalPrice: 349.99, salePrice: 199.99, imageUrl: "https://maresdxb.com/cdn/shop/files/1000048623_300x300.png?v=1744118304", tag: "Trending", sizes: ["S", "M", "L", "XL"], description: "Fear of God Essentials hoodie." },
  { id: "cole-buxton-set", name: "Cole Buxton Set", brand: "Cole Buxton", category: "clothes", originalPrice: 449.99, salePrice: 279.99, imageUrl: "https://maresdxb.com/cdn/shop/files/1000067964.jpg?v=1747991991&width=800", tag: "New", sizes: ["S", "M", "L", "XL"], description: "Cole Buxton premium tracksuit set." },
  { id: "corteiz-set", name: "Corteiz Set", brand: "Corteiz", category: "clothes", originalPrice: 399.99, salePrice: 249.99, imageUrl: "https://maresdxb.com/cdn/shop/files/1000067965.jpg?v=1747991916&width=800", tag: "Trending", sizes: ["S", "M", "L", "XL"], description: "Corteiz matching set." },
  { id: "synaworld-set", name: "Synaworld Set", brand: "Synaworld", category: "clothes", originalPrice: 379.99, salePrice: 229.99, imageUrl: "https://maresdxb.com/cdn/shop/files/1000067960.jpg?v=1747990868&width=800", tag: "Trending", sizes: ["S", "M", "L", "XL"], description: "Synaworld matching set." },
  { id: "gallery-dept", name: "Gallery Dept Piece", brand: "Gallery Dept", category: "clothes", originalPrice: 499.99, salePrice: 329.99, imageUrl: "https://maresdxb.com/cdn/shop/files/1000067963.jpg?v=1747991726&width=800", tag: "Hot 🔥", sizes: ["S", "M", "L", "XL"], description: "Gallery Dept streetwear piece." },
  { id: "chrome-hearts-tee", name: "Chrome Hearts Tee", brand: "Chrome Hearts", category: "clothes", originalPrice: 399.99, salePrice: 249.99, imageUrl: "https://maresdxb.com/cdn/shop/files/1000067159.jpg?v=1747496931&width=800", tag: "Limited", sizes: ["S", "M", "L", "XL"], description: "Chrome Hearts graphic tee." },
  { id: "burberry-piece", name: "Burberry Piece", brand: "Burberry", category: "clothes", originalPrice: 499.99, salePrice: 299.99, imageUrl: "https://maresdxb.com/cdn/shop/files/1000048630_300x300.jpg?v=1744118527", tag: "Luxury", sizes: ["S", "M", "L", "XL"], description: "Burberry designer piece." },
  { id: "bundle-8", name: "Bundle of 8", brand: "Mares", category: "clothes", originalPrice: 229.96, salePrice: 154.99, imageUrl: "https://maresdxb.com/cdn/shop/files/1000048623_300x300.png?v=1744118304", tag: "Deal", sizes: ["S", "M", "L", "XL"], description: "Bundle of 8 items at a discounted price." },

  // ===== ACCESSORIES =====
  { id: "goyard-card-holder", name: "Goyard Card Holder", brand: "Goyard", category: "accessories", originalPrice: 189.99, salePrice: 139.99, imageUrl: "https://maresdxb.com/cdn/shop/files/144DA556-9CEC-4DB9-8677-C211F8A24DDA_540x540_8e13f771-139f-4f34-8a26-c02ecda8eb9e_700x.jpg?v=1738489244", tag: "Deal", sizes: ["One Size"], description: "Goyard card holder — compact and stylish." },
  { id: "goyard-wallet", name: "Goyard Wallet", brand: "Goyard", category: "accessories", originalPrice: 249.99, salePrice: 179.99, imageUrl: "https://maresdxb.com/cdn/shop/files/144DA556-9CEC-4DB9-8677-C211F8A24DDA_540x540_8e13f771-139f-4f34-8a26-c02ecda8eb9e_700x.jpg?v=1738489244", tag: "Hot 🔥", sizes: ["One Size"], description: "Goyard wallet — premium leather finish." },
  { id: "chrome-hearts-cap", name: "Chrome Hearts Cap", brand: "Chrome Hearts", category: "accessories", originalPrice: 299.99, salePrice: 189.99, imageUrl: "https://maresdxb.com/cdn/shop/files/1000067159.jpg?v=1747496931&width=800", tag: "New", sizes: ["One Size"], description: "Chrome Hearts trucker cap." },
  { id: "gallery-dept-hat", name: "Gallery Dept Hat", brand: "Gallery Dept", category: "accessories", originalPrice: 349.99, salePrice: 219.99, imageUrl: "https://maresdxb.com/cdn/shop/files/1000067963.jpg?v=1747991726&width=800", tag: "Trending", sizes: ["One Size"], description: "Gallery Dept vintage hat." },
  { id: "burberry-accessory", name: "Burberry Accessory", brand: "Burberry", category: "accessories", originalPrice: 399.99, salePrice: 249.99, imageUrl: "https://maresdxb.com/cdn/shop/files/1000048630_300x300.jpg?v=1744118527", tag: "Luxury", sizes: ["One Size"], description: "Burberry designer accessory." },
];

export const getProductById = (id: string) => products.find((p) => p.id === id);
export const getProductsByCategory = (category: Product["category"]) => products.filter((p) => p.category === category);
export const getProductsByBrand = (brand: string) => products.filter((p) => p.brand === brand);
export const getAllBrands = () => [...new Set(products.map((p) => p.brand))];
export const getTrendingProducts = () => products.filter((p) => p.tag).slice(0, 6);

export default products;
