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
  // ===== SNEAKERS — Golden Goose =====
  { id: "gg-1", name: "Golden Goose", brand: "Golden Goose", category: "sneakers", originalPrice: 399.99, salePrice: 299.99, imageUrl: "https://maresdxb.com/cdn/shop/files/4CC8C7C4-D064-4227-8688-13BD861BD242.webp?v=1775504504&width=800", tag: "Hot 🔥", sizes: ["39","40","41","42","43","44"] },
  { id: "gg-2", name: "Golden Goose", brand: "Golden Goose", category: "sneakers", originalPrice: 399.99, salePrice: 299.99, imageUrl: "https://maresdxb.com/cdn/shop/files/6782DD4A-6B0C-4F21-8CC0-9F1701EE10F6.webp?v=1774311706&width=800", sizes: ["39","40","41","42","43","44"] },
  { id: "gg-3", name: "Golden Goose", brand: "Golden Goose", category: "sneakers", originalPrice: 399.99, salePrice: 299.99, imageUrl: "https://maresdxb.com/cdn/shop/files/1CC21C96-946A-415F-B2F5-638ADB9F72A7.webp?v=1774311706&width=800", sizes: ["39","40","41","42","43","44"] },
  { id: "gg-4", name: "Golden Goose", brand: "Golden Goose", category: "sneakers", originalPrice: 399.99, salePrice: 299.99, imageUrl: "https://maresdxb.com/cdn/shop/files/C93FAE3C-5EC0-412D-B0CF-901A53E081FC.webp?v=1774311706&width=800", sizes: ["39","40","41","42","43","44"] },
  { id: "gg-5", name: "Golden Goose", brand: "Golden Goose", category: "sneakers", originalPrice: 399.99, salePrice: 299.99, imageUrl: "https://maresdxb.com/cdn/shop/files/BB37F964-DE93-4F40-A869-8641BAE08D5F.webp?v=1774311706&width=800", sizes: ["39","40","41","42","43","44"] },
  { id: "gg-6", name: "Golden Goose", brand: "Golden Goose", category: "sneakers", originalPrice: 399.99, salePrice: 299.99, imageUrl: "https://maresdxb.com/cdn/shop/files/259EC7AC-3A8E-4AF1-8E1E-935562E1647A.webp?v=1774311706&width=800", sizes: ["39","40","41","42","43","44"] },
  { id: "gg-7", name: "Golden Goose", brand: "Golden Goose", category: "sneakers", originalPrice: 399.99, salePrice: 299.99, imageUrl: "https://maresdxb.com/cdn/shop/files/76BE72BD-CD76-4FCB-AFA4-E9C28A71B8A2.webp?v=1774311706&width=800", sizes: ["39","40","41","42","43","44"] },
  { id: "gg-8", name: "Golden Goose", brand: "Golden Goose", category: "sneakers", originalPrice: 399.99, salePrice: 299.99, imageUrl: "https://maresdxb.com/cdn/shop/files/73A04651-F2C0-47CB-9612-1D2B1A7668DC.webp?v=1774311706&width=800", sizes: ["39","40","41","42","43","44"] },
  { id: "gg-9", name: "Golden Goose", brand: "Golden Goose", category: "sneakers", originalPrice: 399.99, salePrice: 299.99, imageUrl: "https://maresdxb.com/cdn/shop/files/B25009BE-E8DD-41DD-B0A7-346D30ED0957.webp?v=1774311706&width=800", sizes: ["39","40","41","42","43","44"] },
  { id: "gg-10", name: "Golden Goose", brand: "Golden Goose", category: "sneakers", originalPrice: 399.99, salePrice: 299.99, imageUrl: "https://maresdxb.com/cdn/shop/files/E41F5D77-CB47-43F0-A0F4-1B3F728A7AFC.webp?v=1774311706&width=800", sizes: ["39","40","41","42","43","44"] },

  // ===== SNEAKERS — Nike =====
  { id: "af1-white", name: "AF1 White", brand: "Nike", category: "sneakers", originalPrice: 199.99, salePrice: 129.99, imageUrl: "https://maresdxb.com/cdn/shop/files/download_25.webp?v=1744715032&width=800", tag: "Hot 🔥", sizes: ["39","40","41","42","43","44","45"] },
  { id: "af1-black", name: "AF1 Black", brand: "Nike", category: "sneakers", originalPrice: 199.99, salePrice: 129.99, imageUrl: "https://maresdxb.com/cdn/shop/files/download_26_d6526682-3ae6-44ac-b74f-1e4cca43ed9a.webp?v=1744715061&width=800", sizes: ["39","40","41","42","43","44","45"] },

  // ===== SNEAKERS — Adidas =====
  { id: "adidas-campus-1", name: "Adidas Campus", brand: "Adidas", category: "sneakers", originalPrice: 189.99, salePrice: 124.99, imageUrl: "https://maresdxb.com/cdn/shop/files/download_40.webp?v=1744738678&width=800", tag: "Trending", sizes: ["39","40","41","42","43","44"] },
  { id: "adidas-campus-2", name: "Adidas Campus", brand: "Adidas", category: "sneakers", originalPrice: 189.99, salePrice: 124.99, imageUrl: "https://maresdxb.com/cdn/shop/files/BC6F089E-8E15-4CA4-91DA-D73C060D8403.png?v=1744843112&width=800", sizes: ["39","40","41","42","43","44"] },
  { id: "adidas-campus-3", name: "Adidas Campus", brand: "Adidas", category: "sneakers", originalPrice: 189.99, salePrice: 124.99, imageUrl: "https://maresdxb.com/cdn/shop/files/download_43.webp?v=1744740139&width=800", tag: "New", sizes: ["39","40","41","42","43","44"] },

  // ===== SNEAKERS — Dior =====
  { id: "dior-b30-white", name: "Dior B30 White", brand: "Dior", category: "sneakers", originalPrice: 395.99, salePrice: 249.99, imageUrl: "https://maresdxb.com/cdn/shop/files/9C1F99E0-4FB3-457A-9017-18B3847E8157.png?v=1739374077&width=800", tag: "Hot 🔥", sizes: ["39","40","41","42","43","44","45"] },
  { id: "dior-b30-bw", name: "Dior B30 Black & White", brand: "Dior", category: "sneakers", originalPrice: 395.99, salePrice: 249.99, imageUrl: "https://maresdxb.com/cdn/shop/files/AA7A7EBB-EE1E-47CB-B251-48B1688C06EA.png?v=1739374138&width=800", tag: "Trending", sizes: ["39","40","41","42","43","44","45"] },
  { id: "dior-b30-black", name: "Dior B30 Full Black", brand: "Dior", category: "sneakers", originalPrice: 395.99, salePrice: 249.99, imageUrl: "https://maresdxb.com/cdn/shop/files/7491D92D-9552-45BB-948A-D3B11AD19003.png?v=1739356545&width=800", sizes: ["39","40","41","42","43","44","45"] },
  { id: "dior-b30-grey", name: "Dior B30 Grey", brand: "Dior", category: "sneakers", originalPrice: 395.99, salePrice: 249.99, imageUrl: "https://maresdxb.com/cdn/shop/files/51D1A665-C684-4BF2-A559-CEA6049ACCB1.png?v=1739356505&width=800", sizes: ["39","40","41","42","43","44","45"] },
  { id: "dior-b22-1", name: "Dior B22", brand: "Dior", category: "sneakers", originalPrice: 309.99, salePrice: 249.99, imageUrl: "https://maresdxb.com/cdn/shop/files/download_45.webp?v=1744841244&width=800", sizes: ["39","40","41","42","43","44"] },
  { id: "dior-b22-2", name: "Dior B22", brand: "Dior", category: "sneakers", originalPrice: 309.99, salePrice: 249.99, imageUrl: "https://maresdxb.com/cdn/shop/files/download_44_ce52bd26-7ae2-447b-a86a-93e6db3bc1ad.webp?v=1744841142&width=800", sizes: ["39","40","41","42","43","44"] },
  { id: "dior-sandal-1", name: "Dior Sandal", brand: "Dior", category: "sneakers", originalPrice: 359.99, salePrice: 269.99, imageUrl: "https://maresdxb.com/cdn/shop/files/download_13_352d64e7-ca23-4a04-9456-482ca13006b3.webp?v=1747074368&width=800", sizes: ["39","40","41","42","43","44"] },
  { id: "dior-sandal-2", name: "Dior Sandal", brand: "Dior", category: "sneakers", originalPrice: 359.99, salePrice: 269.99, imageUrl: "https://maresdxb.com/cdn/shop/files/download_14_74a443ff-3d80-414c-86f2-9cc14f96f2a6.webp?v=1747074511&width=800", sizes: ["39","40","41","42","43","44"] },

  // ===== SNEAKERS — Amiri =====
  { id: "amiri-shoes-1", name: "Amiri Shoes", brand: "Amiri", category: "sneakers", originalPrice: 224.99, salePrice: 169.99, imageUrl: "https://maresdxb.com/cdn/shop/files/download_30.webp?v=1744721152&width=800", tag: "Hot 🔥", sizes: ["39","40","41","42","43","44"] },
  { id: "amiri-shoes-2", name: "Amiri Shoes", brand: "Amiri", category: "sneakers", originalPrice: 224.99, salePrice: 169.99, imageUrl: "https://maresdxb.com/cdn/shop/files/download_33.webp?v=1744721210&width=800", sizes: ["39","40","41","42","43","44"] },
  { id: "amiri-shoes-3", name: "Amiri Shoes", brand: "Amiri", category: "sneakers", originalPrice: 224.99, salePrice: 169.99, imageUrl: "https://maresdxb.com/cdn/shop/files/download_32.webp?v=1744721308&width=800", sizes: ["39","40","41","42","43","44"] },
  { id: "amiri-shoes-4", name: "Amiri Shoes", brand: "Amiri", category: "sneakers", originalPrice: 224.99, salePrice: 169.99, imageUrl: "https://maresdxb.com/cdn/shop/files/download_31.webp?v=1744721561&width=800", sizes: ["39","40","41","42","43","44"] },

  // ===== SNEAKERS — Birkenstock =====
  { id: "birkenstock-1", name: "Birkenstock", brand: "Birkenstock", category: "sneakers", originalPrice: 199.99, salePrice: 139.99, imageUrl: "https://maresdxb.com/cdn/shop/collections/rn-image_picker_lib_temp_d0f9e51f-b655-4499-8a7d-6fbcabc83a62.webp?v=1763811664&width=800", tag: "New", sizes: ["38","39","40","41","42","43","44"] },

  // ===== CLOTHES — Acne Studios =====
  { id: "acne-ls-1", name: "Acne Studios Long Sleeve", brand: "Acne Studios", category: "clothes", originalPrice: 299.99, salePrice: 179.99, imageUrl: "https://maresdxb.com/cdn/shop/files/06F2EAA2-4FB3-48E5-B72A-B94B1F030B7C.webp?v=1774738955&width=800", tag: "Hot 🔥", sizes: ["S","M","L","XL"] },
  { id: "acne-ls-2", name: "Acne Studios Long Sleeve", brand: "Acne Studios", category: "clothes", originalPrice: 299.99, salePrice: 179.99, imageUrl: "https://maresdxb.com/cdn/shop/files/CD965AA1-583D-4A60-A1BB-56EA3EB9A475.webp?v=1774739259&width=800", sizes: ["S","M","L","XL"] },
  { id: "acne-ls-3", name: "Acne Studios Long Sleeve", brand: "Acne Studios", category: "clothes", originalPrice: 299.99, salePrice: 179.99, imageUrl: "https://maresdxb.com/cdn/shop/files/F37E64ED-E2DB-46AE-96BA-C449F5A10E02.webp?v=1774739520&width=800", sizes: ["M","L","XL"] },
  { id: "acne-ls-4", name: "Acne Studios Long Sleeve", brand: "Acne Studios", category: "clothes", originalPrice: 299.99, salePrice: 179.99, imageUrl: "https://maresdxb.com/cdn/shop/files/5B2BDE0E-8275-4BBD-89F2-FB52004EEAF0.webp?v=1774739604&width=800", sizes: ["S","M","L"] },
  { id: "acne-ls-5", name: "Acne Studios Long Sleeve", brand: "Acne Studios", category: "clothes", originalPrice: 299.99, salePrice: 179.99, imageUrl: "https://maresdxb.com/cdn/shop/files/5A6C8BE5-8AB2-4DFF-802C-B56CCF7B0081.webp?v=1774739787&width=800", tag: "New", sizes: ["S","M","L","XL"] },
  { id: "acne-ls-6", name: "Acne Studios Long Sleeve", brand: "Acne Studios", category: "clothes", originalPrice: 299.99, salePrice: 179.99, imageUrl: "https://maresdxb.com/cdn/shop/files/7639E999-7754-44E2-9E02-69358012558D.webp?v=1774739851&width=800", sizes: ["S","M","L","XL"] },
  { id: "acne-hoodie-1", name: "Acne Studio Hoodie", brand: "Acne Studios", category: "clothes", originalPrice: 299.99, salePrice: 229.99, imageUrl: "https://maresdxb.com/cdn/shop/files/94B4C9F1-0A3A-46DF-B176-D525EFE05D8F.webp?v=1774740934&width=800", tag: "Trending", sizes: ["S","M","L","XL"] },
  { id: "acne-hoodie-2", name: "Acne Studio Hoodie", brand: "Acne Studios", category: "clothes", originalPrice: 299.99, salePrice: 229.99, imageUrl: "https://maresdxb.com/cdn/shop/files/553E3EA1-7D7D-4F0E-981E-FF553723BF07.webp?v=1774740934&width=800", sizes: ["M","L","XL"] },
  { id: "acne-tee-1", name: "Acne Studios Tee", brand: "Acne Studios", category: "clothes", originalPrice: 299.99, salePrice: 159.99, imageUrl: "https://maresdxb.com/cdn/shop/files/02D0EEB0-195F-47E7-917A-7D17390DD9D5.webp?v=1774740007&width=800", sizes: ["S","M","L"] },
  { id: "acne-tee-2", name: "Acne Studios Tee", brand: "Acne Studios", category: "clothes", originalPrice: 299.99, salePrice: 159.99, imageUrl: "https://maresdxb.com/cdn/shop/files/ECD2E428-A0A7-4843-A796-41E9A6848C3D.webp?v=1774740087&width=800", tag: "Deal", sizes: ["S","M","L","XL"] },
  { id: "acne-tee-3", name: "Acne Studios Tee", brand: "Acne Studios", category: "clothes", originalPrice: 299.99, salePrice: 159.99, imageUrl: "https://maresdxb.com/cdn/shop/files/868B50C9-44D1-4112-B57B-5D1A83D4FC54.webp?v=1774740548&width=800", sizes: ["M","L"] },
  { id: "acne-tee-4", name: "Acne Studios Tee", brand: "Acne Studios", category: "clothes", originalPrice: 299.99, salePrice: 159.99, imageUrl: "https://maresdxb.com/cdn/shop/files/06D2D354-BEE1-4E2A-AB1B-8137123A1CDE.webp?v=1774740643&width=800", sizes: ["S","M","L"] },
  { id: "acne-tee-5", name: "Acne Studios Tee", brand: "Acne Studios", category: "clothes", originalPrice: 299.99, salePrice: 159.99, imageUrl: "https://maresdxb.com/cdn/shop/files/36E17278-53D1-456E-BC4C-25C9E4434058.webp?v=1774740693&width=800", sizes: ["S","M","L","XL"] },

  // ===== CLOTHES — Ralph Lauren =====
  { id: "rl-quarter-zip", name: "RL Cable Knit Quarter Zip", brand: "Ralph Lauren", category: "clothes", originalPrice: 299.99, salePrice: 194.99, imageUrl: "https://maresdxb.com/cdn/shop/files/s7-1380288_lifestyle_700x.webp?v=1741807548", tag: "Hot 🔥", sizes: ["S","M","L","XL"] },
  { id: "rl-hoodie-1", name: "RL Hoodie", brand: "Ralph Lauren", category: "clothes", originalPrice: 299.99, salePrice: 219.99, imageUrl: "https://maresdxb.com/cdn/shop/files/27D0ECF1-0645-45F7-B25A-475F498F2616.jpg?v=1775501553&width=800", tag: "Sale", sizes: ["S","M","L","XL"] },
  { id: "rl-hoodie-2", name: "RL Hoodie", brand: "Ralph Lauren", category: "clothes", originalPrice: 299.99, salePrice: 219.99, imageUrl: "https://maresdxb.com/cdn/shop/files/C3BA3F5B-1CED-47B1-9CCD-82B809749AA3.png?v=1775501553&width=800", sizes: ["M","L","XL"] },
  { id: "rl-hoodie-3", name: "RL Hoodie", brand: "Ralph Lauren", category: "clothes", originalPrice: 299.99, salePrice: 219.99, imageUrl: "https://maresdxb.com/cdn/shop/files/56FA2A80-4DD2-40A8-A6D1-A8F22820214F.png?v=1775501553&width=800", sizes: ["S","M","L"] },
  { id: "rl-hoodie-4", name: "RL Hoodie", brand: "Ralph Lauren", category: "clothes", originalPrice: 299.99, salePrice: 219.99, imageUrl: "https://maresdxb.com/cdn/shop/files/056A93E0-06B6-44DD-BEAB-012B6E2BB9A5.png?v=1775501553&width=800", sizes: ["S","M","L","XL"] },
  { id: "rl-hoodie-5", name: "RL Hoodie", brand: "Ralph Lauren", category: "clothes", originalPrice: 299.99, salePrice: 219.99, imageUrl: "https://maresdxb.com/cdn/shop/files/143DDE22-6F99-4437-A457-5E8E92966235.png?v=1775501553&width=800", sizes: ["M","L","XL"] },
  { id: "rl-hoodie-6", name: "RL Hoodie", brand: "Ralph Lauren", category: "clothes", originalPrice: 299.99, salePrice: 219.99, imageUrl: "https://maresdxb.com/cdn/shop/files/25E52F83-8535-48D8-9393-8635AE7E96D1.png?v=1775501553&width=800", tag: "New", sizes: ["S","M","L"] },
  { id: "rl-hoodie-7", name: "RL Hoodie", brand: "Ralph Lauren", category: "clothes", originalPrice: 299.99, salePrice: 219.99, imageUrl: "https://maresdxb.com/cdn/shop/files/8ACDB19F-06E4-40CC-9841-E68E8D660A58.png?v=1775501553&width=800", sizes: ["S","M","L","XL"] },
  { id: "rl-hoodie-8", name: "RL Hoodie", brand: "Ralph Lauren", category: "clothes", originalPrice: 299.99, salePrice: 219.99, imageUrl: "https://maresdxb.com/cdn/shop/files/93E7A678-96A3-49D3-AA70-815BCD14EFE4.png?v=1775501553&width=800", sizes: ["M","L","XL"] },
  { id: "rl-hoodie-9", name: "RL Hoodie", brand: "Ralph Lauren", category: "clothes", originalPrice: 299.99, salePrice: 219.99, imageUrl: "https://maresdxb.com/cdn/shop/files/D93A9D9B-2035-4B3A-BBCD-CFD11734C305.png?v=1775501552&width=800", sizes: ["S","M","L","XL"] },
  { id: "rl-sweater-1", name: "RL Sweater", brand: "Ralph Lauren", category: "clothes", originalPrice: 299.99, salePrice: 254.99, imageUrl: "https://maresdxb.com/cdn/shop/files/EE5AED2A-4E53-4A48-911F-D04251D67EB5.jpg?v=1774568917&width=800", sizes: ["S","M","L","XL"] },
  { id: "rl-sweater-2", name: "RL Sweater", brand: "Ralph Lauren", category: "clothes", originalPrice: 299.99, salePrice: 254.99, imageUrl: "https://maresdxb.com/cdn/shop/files/96D77D95-7D06-47A1-B7D2-BFB600D38D01.jpg?v=1774568944&width=800", sizes: ["S","M","L","XL"] },
  { id: "rl-bear-1", name: "RL Bear Sweater", brand: "Ralph Lauren", category: "clothes", originalPrice: 299.99, salePrice: 254.99, imageUrl: "https://maresdxb.com/cdn/shop/files/3BC26C0E-87B3-4011-90A1-B1FA55454D0E.webp?v=1774551282&width=800", tag: "Trending", sizes: ["S","M","L","XL"] },
  { id: "rl-bear-2", name: "RL Bear Sweater", brand: "Ralph Lauren", category: "clothes", originalPrice: 299.99, salePrice: 254.99, imageUrl: "https://maresdxb.com/cdn/shop/files/6A6B27F9-91B0-4BAD-81C5-9A89106ABFD6.webp?v=1774550831&width=800", sizes: ["S","M","L","XL"] },
  { id: "rl-bear-3", name: "RL Bear Sweater", brand: "Ralph Lauren", category: "clothes", originalPrice: 299.99, salePrice: 254.99, imageUrl: "https://maresdxb.com/cdn/shop/files/19C21FE0-5330-4EBA-801A-76E1BE7C9CA4.jpg?v=1774550831&width=800", sizes: ["S","M","L"] },
  { id: "rl-bear-4", name: "RL Bear Sweater", brand: "Ralph Lauren", category: "clothes", originalPrice: 299.99, salePrice: 254.99, imageUrl: "https://maresdxb.com/cdn/shop/files/5B8E2EDE-505B-4B83-AA07-2AF03B623ED2.webp?v=1774550831&width=800", sizes: ["M","L","XL"] },
  { id: "rl-bear-5", name: "RL Bear Sweater", brand: "Ralph Lauren", category: "clothes", originalPrice: 299.99, salePrice: 254.99, imageUrl: "https://maresdxb.com/cdn/shop/files/6C421C80-FF41-45A1-BB59-58189092E9B3.webp?v=1774550831&width=800", sizes: ["S","M","L","XL"] },
  { id: "rl-bear-6", name: "RL Bear Sweater", brand: "Ralph Lauren", category: "clothes", originalPrice: 299.99, salePrice: 254.99, imageUrl: "https://maresdxb.com/cdn/shop/files/8FA5661D-AAEF-432C-9A80-DA0F14CE845A.webp?v=1774551339&width=800", sizes: ["S","M","L","XL"] },
  { id: "rl-bear-7", name: "RL Bear Sweater", brand: "Ralph Lauren", category: "clothes", originalPrice: 299.99, salePrice: 254.99, imageUrl: "https://maresdxb.com/cdn/shop/files/48C400A8-FF79-43EA-BE76-6E1FD77EB098.webp?v=1774550831&width=800", sizes: ["S","M","L"] },
  { id: "rl-bear-8", name: "RL Bear Sweater", brand: "Ralph Lauren", category: "clothes", originalPrice: 299.99, salePrice: 254.99, imageUrl: "https://maresdxb.com/cdn/shop/files/E099EC9F-0D9A-46CF-8871-D3BE07A56153.jpg?v=1774569004&width=800", sizes: ["M","L","XL"] },
  { id: "rl-bear-9", name: "RL Bear Sweater", brand: "Ralph Lauren", category: "clothes", originalPrice: 299.99, salePrice: 254.99, imageUrl: "https://maresdxb.com/cdn/shop/files/0F5F1B3A-51F3-4C38-B90E-A741F8AD0694.webp?v=1774568971&width=800", sizes: ["S","M","L","XL"] },
  { id: "rl-bear-10", name: "RL Bear Sweater", brand: "Ralph Lauren", category: "clothes", originalPrice: 299.99, salePrice: 254.99, imageUrl: "https://maresdxb.com/cdn/shop/files/04B61F2B-B073-4567-A3A6-6CA40446F2E3.webp?v=1774550831&width=800", sizes: ["S","M","L"] },
  { id: "rl-bear-11", name: "RL Bear Sweater", brand: "Ralph Lauren", category: "clothes", originalPrice: 299.99, salePrice: 254.99, imageUrl: "https://maresdxb.com/cdn/shop/files/86056181-B56E-4367-AC97-17D2F7EA8D90.webp?v=1774569036&width=800", sizes: ["M","L","XL"] },
  { id: "rl-bear-12", name: "RL Bear Sweater", brand: "Ralph Lauren", category: "clothes", originalPrice: 299.99, salePrice: 254.99, imageUrl: "https://maresdxb.com/cdn/shop/files/74201CDE-6645-4800-BF20-6B4F2924EB34.webp?v=1774569073&width=800", sizes: ["S","M","L","XL"] },
  { id: "rl-bear-13", name: "RL Bear Sweater", brand: "Ralph Lauren", category: "clothes", originalPrice: 299.99, salePrice: 254.99, imageUrl: "https://maresdxb.com/cdn/shop/files/02F4DDE5-9530-46B8-865B-DAEC7B97AF2E.webp?v=1774573544&width=800", sizes: ["S","M","L"] },
  { id: "rl-bear-14", name: "RL Bear Sweater", brand: "Ralph Lauren", category: "clothes", originalPrice: 299.99, salePrice: 254.99, imageUrl: "https://maresdxb.com/cdn/shop/files/23AE30B0-3CA6-4B2B-BABB-8E2E72E776E8.webp?v=1774550831&width=800", sizes: ["M","L","XL"] },
  { id: "rl-bear-15", name: "RL Bear Sweater", brand: "Ralph Lauren", category: "clothes", originalPrice: 299.99, salePrice: 254.99, imageUrl: "https://maresdxb.com/cdn/shop/files/E0E6D177-3749-4F51-8D5E-08F7D96DFB9D.jpg?v=1774550831&width=800", sizes: ["S","M","L","XL"] },
  { id: "rl-bear-16", name: "RL Bear Sweater", brand: "Ralph Lauren", category: "clothes", originalPrice: 299.99, salePrice: 254.99, imageUrl: "https://maresdxb.com/cdn/shop/files/AEDFD28C-3B1A-4AE2-A4AC-12A99B133301.webp?v=1774611466&width=800", sizes: ["S","M","L","XL"] },
  { id: "rl-tracksuit-1", name: "RL Tracksuit", brand: "Ralph Lauren", category: "clothes", originalPrice: 399.99, salePrice: 299.99, imageUrl: "https://maresdxb.com/cdn/shop/files/rn-image_picker_lib_temp_f060b31e-f431-4f12-8a69-82525a3a07a8.png?v=1760676077&width=800", sizes: ["S","M","L","XL"] },
  { id: "rl-tracksuit-2", name: "RL Tracksuit", brand: "Ralph Lauren", category: "clothes", originalPrice: 339.99, salePrice: 299.99, imageUrl: "https://maresdxb.com/cdn/shop/files/rn-image_picker_lib_temp_013cc5c0-a0fd-45ba-83dd-eb9ec0d44f32.jpg?v=1760674691&width=800", sizes: ["S","M","L","XL"] },
  { id: "rl-swim-1", name: "RL Swimming Shorts", brand: "Ralph Lauren", category: "clothes", originalPrice: 199.99, salePrice: 159.99, imageUrl: "https://maresdxb.com/cdn/shop/files/rn-image_picker_lib_temp_48ee7938-3868-41f6-8682-d533935c8321.jpg?v=1753787380&width=800", sizes: ["S","M","L","XL"] },
  { id: "rl-swim-2", name: "RL Swimming Shorts", brand: "Ralph Lauren", category: "clothes", originalPrice: 199.99, salePrice: 159.99, imageUrl: "https://maresdxb.com/cdn/shop/files/rn-image_picker_lib_temp_80c0f42a-fd5e-4a0d-930d-49b9e9dd49d1.jpg?v=1753787277&width=800", sizes: ["S","M","L","XL"] },
  { id: "rl-swim-3", name: "RL Swimming Shorts", brand: "Ralph Lauren", category: "clothes", originalPrice: 199.99, salePrice: 159.99, imageUrl: "https://maresdxb.com/cdn/shop/files/rn-image_picker_lib_temp_368c461b-3353-4bcf-a377-73b8e58e2a3e.jpg?v=1753787230&width=800", sizes: ["S","M","L","XL"] },
  { id: "rl-swim-4", name: "RL Swimming Shorts", brand: "Ralph Lauren", category: "clothes", originalPrice: 199.99, salePrice: 159.99, imageUrl: "https://maresdxb.com/cdn/shop/files/rn-image_picker_lib_temp_0b30ff38-f9d1-4cee-9c0c-94d6e02b9b34.jpg?v=1753787159&width=800", sizes: ["S","M","L","XL"] },
  { id: "rl-swim-5", name: "RL Swimming Shorts", brand: "Ralph Lauren", category: "clothes", originalPrice: 199.99, salePrice: 159.99, imageUrl: "https://maresdxb.com/cdn/shop/files/rn-image_picker_lib_temp_167877a0-506d-4746-a26d-948f26cd9f1d.jpg?v=1753787068&width=800", sizes: ["S","M","L"] },
  { id: "rl-swim-6", name: "RL Swimming Shorts", brand: "Ralph Lauren", category: "clothes", originalPrice: 199.99, salePrice: 159.99, imageUrl: "https://maresdxb.com/cdn/shop/files/rn-image_picker_lib_temp_0702f9c9-9fd3-4126-918c-76e5beaf62ad.jpg?v=1753787057&width=800", sizes: ["S","M","L","XL"] },
  { id: "rl-swim-7", name: "RL Swimming Shorts", brand: "Ralph Lauren", category: "clothes", originalPrice: 199.99, salePrice: 159.99, imageUrl: "https://maresdxb.com/cdn/shop/files/rn-image_picker_lib_temp_968d8566-0b20-40f8-b36b-56a29695f64d.jpg?v=1753786930&width=800", sizes: ["M","L","XL"] },
  { id: "rl-swim-8", name: "RL Swimming Shorts", brand: "Ralph Lauren", category: "clothes", originalPrice: 199.99, salePrice: 159.99, imageUrl: "https://maresdxb.com/cdn/shop/files/rn-image_picker_lib_temp_73f0c421-4192-41b3-bd59-ad1844b51b0c.jpg?v=1753786834&width=800", sizes: ["S","M","L","XL"] },

  // ===== CLOTHES — AMI =====
  { id: "ami-jacket-1", name: "Ami Jacket", brand: "AMI", category: "clothes", originalPrice: 229.99, salePrice: 174.99, imageUrl: "https://maresdxb.com/cdn/shop/files/23973704_54167630_1000.jpg?v=1744544254&width=800", tag: "New", sizes: ["S","M","L","XL"] },
  { id: "ami-jacket-2", name: "Ami Jacket", brand: "AMI", category: "clothes", originalPrice: 229.99, salePrice: 174.99, imageUrl: "https://maresdxb.com/cdn/shop/files/23974297_58395854_1000.jpg?v=1744544337&width=800", sizes: ["S","M","L","XL"] },
  { id: "ami-jacket-3", name: "Ami Jacket", brand: "AMI", category: "clothes", originalPrice: 174.99, salePrice: 174.99, imageUrl: "https://maresdxb.com/cdn/shop/files/23975005_54134064_1000.jpg?v=1744544440&width=800", sizes: ["S","M","L"] },
  { id: "ami-shirt-1", name: "Ami Paris Shirt", brand: "AMI", category: "clothes", originalPrice: 209.99, salePrice: 149.99, imageUrl: "https://maresdxb.com/cdn/shop/files/23973922_54133328_1000.jpg?v=1736794287&width=800", tag: "Deal", sizes: ["S","M","L","XL"] },
  { id: "ami-shirt-2", name: "Ami Paris Shirt", brand: "AMI", category: "clothes", originalPrice: 189.99, salePrice: 149.99, imageUrl: "https://maresdxb.com/cdn/shop/files/23974246_54167850_1000.jpg?v=1736794350&width=800", sizes: ["S","M","L","XL"] },
  { id: "ami-sweater-1", name: "Ami Paris Sweater", brand: "AMI", category: "clothes", originalPrice: 229.99, salePrice: 174.99, imageUrl: "https://maresdxb.com/cdn/shop/files/20251183_54167887_2048.jpg?v=1736790729&width=800", sizes: ["S","M","L","XL"] },
  { id: "ami-sweater-2", name: "Ami Paris Sweater", brand: "AMI", category: "clothes", originalPrice: 189.99, salePrice: 164.99, imageUrl: "https://maresdxb.com/cdn/shop/files/23973710_54176053_1000.jpg?v=1736790768&width=800", sizes: ["S","M","L","XL"] },
  { id: "ami-sweater-3", name: "Ami Paris Sweater", brand: "AMI", category: "clothes", originalPrice: 229.99, salePrice: 185.99, imageUrl: "https://maresdxb.com/cdn/shop/files/538012D3-5C9B-4405-9648-FB99F3BF0E49.png?v=1739478634&width=800", sizes: ["S","M","L"] },
  { id: "ami-sweater-4", name: "Ami Paris Sweater", brand: "AMI", category: "clothes", originalPrice: 229.99, salePrice: 169.99, imageUrl: "https://maresdxb.com/cdn/shop/files/20249693_51078842_1000.jpg?v=1738703097&width=800", sizes: ["S","M","L","XL"] },
  { id: "ami-sweater-5", name: "Ami Paris Sweater", brand: "AMI", category: "clothes", originalPrice: 229.99, salePrice: 174.99, imageUrl: "https://maresdxb.com/cdn/shop/files/1B118B2E-EDC6-4EBA-B08F-A60AB481AE1C.jpg?v=1768941595&width=800", sizes: ["S","M","L","XL"] },
  { id: "ami-sweater-6", name: "Ami Paris Sweater", brand: "AMI", category: "clothes", originalPrice: 229.99, salePrice: 174.99, imageUrl: "https://maresdxb.com/cdn/shop/files/39B9F800-D23F-4F8A-ACA4-0D3951FF1D9D.jpg?v=1768941595&width=800", sizes: ["M","L","XL"] },
  { id: "ami-sweater-7", name: "Ami Paris Sweater", brand: "AMI", category: "clothes", originalPrice: 229.99, salePrice: 174.99, imageUrl: "https://maresdxb.com/cdn/shop/files/E7B44F86-B438-4000-A886-B61DE22A82FB.jpg?v=1768941595&width=800", sizes: ["S","M","L","XL"] },
  { id: "ami-sweater-8", name: "Ami Paris Sweater", brand: "AMI", category: "clothes", originalPrice: 229.99, salePrice: 174.99, imageUrl: "https://maresdxb.com/cdn/shop/files/8DF3E788-085E-4E02-A982-639C0A8813DD.jpg?v=1768941595&width=800", sizes: ["S","M","L"] },
  { id: "ami-sweater-9", name: "Ami Paris Sweater", brand: "AMI", category: "clothes", originalPrice: 229.99, salePrice: 174.99, imageUrl: "https://maresdxb.com/cdn/shop/files/887705A5-2BD9-4F80-94DB-98C60F34DD9F.jpg?v=1768941595&width=800", sizes: ["M","L","XL"] },
  { id: "ami-sweater-10", name: "Ami Paris Sweater", brand: "AMI", category: "clothes", originalPrice: 229.99, salePrice: 174.99, imageUrl: "https://maresdxb.com/cdn/shop/files/42A1E132-FA45-48C7-955C-DE4A17F65396.jpg?v=1768941595&width=800", sizes: ["S","M","L","XL"] },
  { id: "ami-sweater-11", name: "Ami Paris Sweater", brand: "AMI", category: "clothes", originalPrice: 229.99, salePrice: 174.99, imageUrl: "https://maresdxb.com/cdn/shop/files/25E4CDDC-AEC1-4F6E-9269-3E748964FCA2.jpg?v=1768941595&width=800", sizes: ["S","M","L"] },
  { id: "ami-sweater-12", name: "Ami Paris Sweater", brand: "AMI", category: "clothes", originalPrice: 229.99, salePrice: 174.99, imageUrl: "https://maresdxb.com/cdn/shop/files/F1BB4B60-1140-4313-8ACC-363BCEF168F4.jpg?v=1768941595&width=800", sizes: ["S","M","L","XL"] },
  { id: "ami-sweater-13", name: "Ami Paris Sweater", brand: "AMI", category: "clothes", originalPrice: 229.99, salePrice: 174.99, imageUrl: "https://maresdxb.com/cdn/shop/files/07F39113-5955-4919-9E6D-AFB8A3B96E45.jpg?v=1768941595&width=800", sizes: ["M","L","XL"] },
  { id: "ami-sweater-14", name: "Ami Paris Sweater", brand: "AMI", category: "clothes", originalPrice: 229.99, salePrice: 174.99, imageUrl: "https://maresdxb.com/cdn/shop/files/61246F95-DCE3-4AAA-9E41-28B299897FCB.jpg?v=1768941595&width=800", sizes: ["S","M","L","XL"] },
  { id: "ami-sweater-15", name: "Ami Paris Sweater", brand: "AMI", category: "clothes", originalPrice: 229.99, salePrice: 174.99, imageUrl: "https://maresdxb.com/cdn/shop/files/8C044448-32A7-4DDA-B10A-9E77DB584F93.jpg?v=1768942444&width=800", sizes: ["S","M","L"] },
  { id: "ami-sweater-16", name: "Ami Paris Sweater", brand: "AMI", category: "clothes", originalPrice: 229.99, salePrice: 174.99, imageUrl: "https://maresdxb.com/cdn/shop/files/5C2C7BB3-D82D-4CC1-9BAF-961429D186DD.jpg?v=1768942444&width=800", sizes: ["S","M","L","XL"] },
  { id: "ami-sweater-17", name: "Ami Paris Sweater", brand: "AMI", category: "clothes", originalPrice: 229.99, salePrice: 174.99, imageUrl: "https://maresdxb.com/cdn/shop/files/CA59F8F0-53B8-474A-A5C5-C37974253412.jpg?v=1768942444&width=800", sizes: ["M","L","XL"] },
  { id: "ami-sweater-18", name: "Ami Paris Sweater", brand: "AMI", category: "clothes", originalPrice: 229.99, salePrice: 174.99, imageUrl: "https://maresdxb.com/cdn/shop/files/202AB7DB-B810-4DD8-9ED0-F02EBA5C6BB7.jpg?v=1768942444&width=800", sizes: ["S","M","L","XL"] },
  { id: "ami-sweater-19", name: "Ami Paris Sweater", brand: "AMI", category: "clothes", originalPrice: 229.99, salePrice: 174.99, imageUrl: "https://maresdxb.com/cdn/shop/files/D4B19050-8070-4434-93BA-5AD580BBC679.jpg?v=1768942444&width=800", sizes: ["S","M","L"] },
  { id: "ami-sweater-20", name: "Ami Paris Sweater", brand: "AMI", category: "clothes", originalPrice: 229.99, salePrice: 174.99, imageUrl: "https://maresdxb.com/cdn/shop/files/074AF536-1807-4C71-8001-1EF72AC17B02.jpg?v=1769026043&width=800", sizes: ["S","M","L","XL"] },

  // ===== CLOTHES — Amiri =====
  { id: "amiri-jeans-1", name: "Amiri Jeans", brand: "Amiri", category: "clothes", originalPrice: 229.99, salePrice: 174.99, imageUrl: "https://maresdxb.com/cdn/shop/files/9297F62D-8968-45F5-8CD3-801F6D609897.jpg?v=1769115381&width=800", tag: "Hot 🔥", sizes: ["28","30","32","34","36"] },
  { id: "amiri-jeans-2", name: "Amiri Jeans", brand: "Amiri", category: "clothes", originalPrice: 229.99, salePrice: 174.99, imageUrl: "https://maresdxb.com/cdn/shop/files/BFE360B0-DBB6-40A6-AC54-C96D4A2C340D.jpg?v=1769115381&width=800", sizes: ["28","30","32","34","36"] },
  { id: "amiri-jeans-3", name: "Amiri Jeans", brand: "Amiri", category: "clothes", originalPrice: 229.99, salePrice: 174.99, imageUrl: "https://maresdxb.com/cdn/shop/files/B42C8215-09EB-4841-9C7B-DD5A2CDD81BA.jpg?v=1769115381&width=800", sizes: ["28","30","32","34","36"] },
  { id: "amiri-jeans-4", name: "Amiri Jeans", brand: "Amiri", category: "clothes", originalPrice: 229.99, salePrice: 174.99, imageUrl: "https://maresdxb.com/cdn/shop/files/206E6F83-CC13-40FC-81BE-A42818274D01.jpg?v=1769115381&width=800", sizes: ["28","30","32","34","36"] },
  { id: "amiri-jeans-5", name: "Amiri Jeans", brand: "Amiri", category: "clothes", originalPrice: 229.99, salePrice: 174.99, imageUrl: "https://maresdxb.com/cdn/shop/files/E227DDA5-98C2-441D-B2B2-EB165BBCB390.jpg?v=1769115381&width=800", sizes: ["28","30","32","34","36"] },
  { id: "amiri-jeans-6", name: "Amiri Jeans", brand: "Amiri", category: "clothes", originalPrice: 229.99, salePrice: 174.99, imageUrl: "https://maresdxb.com/cdn/shop/files/A968E10F-F757-49C1-9D46-F3217F5737B0.jpg?v=1769115382&width=800", sizes: ["28","30","32","34","36"] },
  { id: "amiri-jeans-7", name: "Amiri Jeans", brand: "Amiri", category: "clothes", originalPrice: 229.99, salePrice: 174.99, imageUrl: "https://maresdxb.com/cdn/shop/files/DCAE5DBC-F873-47CE-8B45-F5D5FAB8A1CC.jpg?v=1769115381&width=800", sizes: ["28","30","32","34","36"] },
  { id: "amiri-jeans-8", name: "Amiri Jeans", brand: "Amiri", category: "clothes", originalPrice: 229.99, salePrice: 174.99, imageUrl: "https://maresdxb.com/cdn/shop/files/1D177447-C910-48E3-90C6-5D0E4C672EE6.jpg?v=1769115381&width=800", sizes: ["28","30","32","34","36"] },
  { id: "amiri-jeans-9", name: "Amiri Jeans", brand: "Amiri", category: "clothes", originalPrice: 229.99, salePrice: 174.99, imageUrl: "https://maresdxb.com/cdn/shop/files/7D8C3972-684B-435E-8CFF-6D0CDF1B8E4F.jpg?v=1769115381&width=800", sizes: ["28","30","32","34","36"] },
  { id: "amiri-jeans-10", name: "Amiri Jeans", brand: "Amiri", category: "clothes", originalPrice: 229.99, salePrice: 174.99, imageUrl: "https://maresdxb.com/cdn/shop/files/1493813C-6BAD-495E-9149-3EB3F0BCEE91.jpg?v=1769115382&width=800", sizes: ["28","30","32","34","36"] },
  { id: "amiri-tee-1", name: "Amiri Tee", brand: "Amiri", category: "clothes", originalPrice: 209.99, salePrice: 149.99, imageUrl: "https://maresdxb.com/cdn/shop/files/90FB7B6B-1EBD-4E11-AA27-E6BB977BE045.jpg?v=1769116731&width=800", tag: "Trending", sizes: ["S","M","L","XL"] },
  { id: "amiri-tee-2", name: "Amiri Tee", brand: "Amiri", category: "clothes", originalPrice: 209.99, salePrice: 149.99, imageUrl: "https://maresdxb.com/cdn/shop/files/96512A22-893A-47E1-ADBD-60664F71FD9B.jpg?v=1769116731&width=800", sizes: ["S","M","L","XL"] },
  { id: "amiri-tee-3", name: "Amiri Tee", brand: "Amiri", category: "clothes", originalPrice: 209.99, salePrice: 149.99, imageUrl: "https://maresdxb.com/cdn/shop/files/B171FE8F-B146-4960-BB36-6A77A7685DF1.jpg?v=1769116731&width=800", sizes: ["S","M","L","XL"] },
  { id: "amiri-tee-4", name: "Amiri Tee", brand: "Amiri", category: "clothes", originalPrice: 209.99, salePrice: 149.99, imageUrl: "https://maresdxb.com/cdn/shop/files/395E0F25-01EE-4CBB-87D2-305B4C87EE34.jpg?v=1769116731&width=800", sizes: ["S","M","L","XL"] },
  { id: "amiri-tee-5", name: "Amiri Tee", brand: "Amiri", category: "clothes", originalPrice: 209.99, salePrice: 149.99, imageUrl: "https://maresdxb.com/cdn/shop/files/666331C3-58B3-4CB6-85EA-733D1A8631A2.jpg?v=1769116732&width=800", sizes: ["S","M","L","XL"] },

  // ===== CLOTHES — Dior =====
  { id: "dior-tee", name: "Dior Stone Island Tee", brand: "Dior", category: "clothes", originalPrice: 164.99, salePrice: 164.99, imageUrl: "https://maresdxb.com/cdn/shop/files/download.webp?v=1738494724&width=800", sizes: ["S","M","L","XL"] },
  { id: "dior-sweater", name: "Dior Sweater", brand: "Dior", category: "clothes", originalPrice: 234.99, salePrice: 234.99, imageUrl: "https://maresdxb.com/cdn/shop/files/IMG-20250113-WA0015.jpg?v=1738494768&width=800", tag: "New", sizes: ["S","M","L","XL"] },

  // ===== CLOTHES — Essentials =====
  { id: "essentials-hoodie", name: "Essentials Hoodie", brand: "Essentials", category: "clothes", originalPrice: 349.99, salePrice: 199.99, imageUrl: "https://maresdxb.com/cdn/shop/files/1000048623_300x300.png?v=1744118304", tag: "Trending", sizes: ["S","M","L","XL"] },
  { id: "essentials-short", name: "Essentials Short", brand: "Essentials", category: "clothes", originalPrice: 199.99, salePrice: 149.99, imageUrl: "https://maresdxb.com/cdn/shop/files/IMG_0867.jpg?v=1740341052&width=800", sizes: ["S","M","L","XL"] },

  // ===== CLOTHES — Cole Buxton =====
  { id: "cole-buxton-set", name: "Cole Buxton Set", brand: "Cole Buxton", category: "clothes", originalPrice: 449.99, salePrice: 279.99, imageUrl: "https://maresdxb.com/cdn/shop/files/1000067964.jpg?v=1747991991&width=800", tag: "New", sizes: ["S","M","L","XL"] },
  { id: "cole-buxton-shorts", name: "Cole Buxton Shorts", brand: "Cole Buxton", category: "clothes", originalPrice: 249.99, salePrice: 179.99, imageUrl: "https://maresdxb.com/cdn/shop/files/383D290E-2CE9-4F75-A818-09541F63D723_720x728_3c850fcd-d425-4768-ba3d-266750500d81.jpg?v=1744129848&width=800", sizes: ["S","M","L","XL"] },

  // ===== CLOTHES — Corteiz =====
  { id: "corteiz-set", name: "Corteiz Set", brand: "Corteiz", category: "clothes", originalPrice: 399.99, salePrice: 249.99, imageUrl: "https://maresdxb.com/cdn/shop/files/1000067965.jpg?v=1747991916&width=800", tag: "Trending", sizes: ["S","M","L","XL"] },
  { id: "corteiz-hoodie", name: "Corteiz 4 Star Hoodie", brand: "Corteiz", category: "clothes", originalPrice: 349.99, salePrice: 229.99, imageUrl: "https://maresdxb.com/cdn/shop/files/A11CCDEA-6847-4406-ACB9-7CA70EDF9183_1296x1296_4be9dfb6-f73c-43c9-9664-90044a8d5001.jpg?v=1738493772&width=800", sizes: ["S","M","L","XL"] },
  { id: "corteiz-tee", name: "Corteiz Tee", brand: "Corteiz", category: "clothes", originalPrice: 199.99, salePrice: 139.99, imageUrl: "https://maresdxb.com/cdn/shop/files/OGMarket_CorteizNoTime4LuvTee_White-NewBlack.jpg?v=1747077360&width=800", sizes: ["S","M","L","XL"] },

  // ===== CLOTHES — Synaworld =====
  { id: "synaworld-set", name: "Synaworld Set", brand: "Synaworld", category: "clothes", originalPrice: 379.99, salePrice: 229.99, imageUrl: "https://maresdxb.com/cdn/shop/files/1000067960.jpg?v=1747990868&width=800", tag: "Trending", sizes: ["S","M","L","XL"] },

  // ===== CLOTHES — Gallery Dept =====
  { id: "gallery-dept", name: "Gallery Dept Piece", brand: "Gallery Dept", category: "clothes", originalPrice: 499.99, salePrice: 329.99, imageUrl: "https://maresdxb.com/cdn/shop/files/1000067963.jpg?v=1747991726&width=800", tag: "Hot 🔥", sizes: ["S","M","L","XL"] },

  // ===== CLOTHES — Chrome Hearts =====
  { id: "chrome-hearts-tee", name: "Chrome Hearts Tee", brand: "Chrome Hearts", category: "clothes", originalPrice: 399.99, salePrice: 249.99, imageUrl: "https://maresdxb.com/cdn/shop/files/1000067159.jpg?v=1747496931&width=800", tag: "Limited", sizes: ["S","M","L","XL"] },
  { id: "chrome-hearts-shirt", name: "Chrome Hearts Sport Shirt", brand: "Chrome Hearts", category: "clothes", originalPrice: 399.99, salePrice: 269.99, imageUrl: "https://maresdxb.com/cdn/shop/files/F375AA11-BB55-40BF-A43F-EC2B0908AE42.webp?v=1771235270&width=800", sizes: ["S","M","L","XL"] },

  // ===== CLOTHES — Burberry =====
  { id: "burberry-piece", name: "Burberry Piece", brand: "Burberry", category: "clothes", originalPrice: 499.99, salePrice: 299.99, imageUrl: "https://maresdxb.com/cdn/shop/files/1000067962.jpg?v=1747991474&width=800", tag: "Luxury", sizes: ["S","M","L","XL"] },
  { id: "burberry-polo", name: "Burberry Polo", brand: "Burberry", category: "clothes", originalPrice: 349.99, salePrice: 229.99, imageUrl: "https://maresdxb.com/cdn/shop/files/download_18.webp?v=1744140698&width=800", sizes: ["S","M","L","XL"] },

  // ===== CLOTHES — Bape =====
  { id: "bape-tee-1", name: "Bape Tee", brand: "Bape", category: "clothes", originalPrice: 249.99, salePrice: 169.99, imageUrl: "https://maresdxb.com/cdn/shop/files/rn-image_picker_lib_temp_325227c7-8bd4-4449-939b-bc931986aed2.jpg?v=1755103585&width=800", tag: "Trending", sizes: ["S","M","L","XL"] },

  // ===== CLOTHES — Broken Planet =====
  { id: "broken-planet-hoodie", name: "Broken Planet Hoodie", brand: "Broken Planet", category: "clothes", originalPrice: 349.99, salePrice: 219.99, imageUrl: "https://maresdxb.com/cdn/shop/files/929A70B7-B118-487E-A391-15871C56B0B8.jpg?v=1769667030&width=800", tag: "New", sizes: ["S","M","L","XL"] },

  // ===== CLOTHES — Casablanca =====
  { id: "casablanca-tee", name: "Casablanca Tee", brand: "Casablanca", category: "clothes", originalPrice: 279.99, salePrice: 189.99, imageUrl: "https://maresdxb.com/cdn/shop/files/ADC371E3-FAF2-42D1-AB5B-D103D07062F1.jpg?v=1772184294&width=800", tag: "New", sizes: ["S","M","L","XL"] },

  // ===== CLOTHES — Comme des Garcons =====
  { id: "cdg-tee", name: "Comme des Garcons Tee", brand: "Comme des Garcons", category: "clothes", originalPrice: 199.99, salePrice: 139.99, imageUrl: "https://maresdxb.com/cdn/shop/files/download_17_36ecfb6e-1e87-4315-b6b0-653ce00a052b.webp?v=1749063307&width=800", tag: "Trending", sizes: ["S","M","L","XL"] },

  // ===== CLOTHES — Denim Tears =====
  { id: "denim-tears-hoodie", name: "Denim Tears Hoodie", brand: "Denim Tears", category: "clothes", originalPrice: 399.99, salePrice: 249.99, imageUrl: "https://maresdxb.com/cdn/shop/files/DenimTearsCottonWreathSweatshirt_700x700_0567a815-d5db-40d8-91c7-c759c9fa779c.png?v=1737034228&width=800", tag: "Hot 🔥", sizes: ["S","M","L","XL"] },

  // ===== CLOTHES — Sp5der =====
  { id: "sp5der-piece", name: "Sp5der Piece", brand: "Sp5der", category: "clothes", originalPrice: 349.99, salePrice: 219.99, imageUrl: "https://maresdxb.com/cdn/shop/files/1000048859_300x300.png?v=1744284150", tag: "Trending", sizes: ["S","M","L","XL"] },

  // ===== CLOTHES — Stone Island =====
  { id: "stone-island-piece", name: "Stone Island Piece", brand: "Stone Island", category: "clothes", originalPrice: 399.99, salePrice: 269.99, imageUrl: "https://maresdxb.com/cdn/shop/files/1000048628_300x300.png?v=1744118402", tag: "Hot 🔥", sizes: ["S","M","L","XL"] },

  // ===== CLOTHES — Chief Keef =====
  { id: "chief-keef-polo", name: "Chief Keef Polo", brand: "Chief Keef", category: "clothes", originalPrice: 249.99, salePrice: 169.99, imageUrl: "https://maresdxb.com/cdn/shop/files/rn-image_picker_lib_temp_cbd3e83e-a053-4753-b0d0-a3c6a43128a5.webp?v=1768728314&width=800", sizes: ["S","M","L","XL"] },

  // ===== ACCESSORIES =====
  { id: "goyard-card-holder", name: "Goyard Card Holder", brand: "Goyard", category: "accessories", originalPrice: 189.99, salePrice: 139.99, imageUrl: "https://maresdxb.com/cdn/shop/files/144DA556-9CEC-4DB9-8677-C211F8A24DDA_540x540_8e13f771-139f-4f34-8a26-c02ecda8eb9e_700x.jpg?v=1738489244", tag: "Deal", sizes: ["One Size"] },
  { id: "goyard-wallet", name: "Goyard Wallet", brand: "Goyard", category: "accessories", originalPrice: 249.99, salePrice: 179.99, imageUrl: "https://maresdxb.com/cdn/shop/files/144DA556-9CEC-4DB9-8677-C211F8A24DDA_540x540_8e13f771-139f-4f34-8a26-c02ecda8eb9e_700x.jpg?v=1738489244", tag: "Hot 🔥", sizes: ["One Size"] },
  { id: "chrome-hearts-cap", name: "Chrome Hearts Cap", brand: "Chrome Hearts", category: "accessories", originalPrice: 299.99, salePrice: 189.99, imageUrl: "https://maresdxb.com/cdn/shop/files/1000067159.jpg?v=1747496931&width=800", tag: "New", sizes: ["One Size"] },
  { id: "gallery-dept-hat", name: "Gallery Dept Hat", brand: "Gallery Dept", category: "accessories", originalPrice: 349.99, salePrice: 219.99, imageUrl: "https://maresdxb.com/cdn/shop/files/1000067963.jpg?v=1747991726&width=800", tag: "Trending", sizes: ["One Size"] },
  { id: "burberry-accessory", name: "Burberry Accessory", brand: "Burberry", category: "accessories", originalPrice: 399.99, salePrice: 249.99, imageUrl: "https://maresdxb.com/cdn/shop/files/1000048630_300x300.jpg?v=1744118527", tag: "Luxury", sizes: ["One Size"] },
];

export const getProductById = (id: string) => products.find((p) => p.id === id);
export const getProductsByCategory = (category: Product["category"]) => products.filter((p) => p.category === category);
export const getProductsByBrand = (brand: string) => products.filter((p) => p.brand === brand);
export const getAllBrands = () => [...new Set(products.map((p) => p.brand))];
export const getTrendingProducts = () => products.filter((p) => p.tag).slice(0, 12);
export const searchProducts = (query: string) => {
  const q = query.toLowerCase();
  return products.filter((p) =>
    p.name.toLowerCase().includes(q) ||
    p.brand.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q)
  );
};

export default products;
