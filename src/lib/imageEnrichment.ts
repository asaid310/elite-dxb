import products from "@/data/products";
import type { ShopifyProduct } from "@/lib/shopify";

/**
 * Build a lookup map from normalized product title → imageUrl
 * from local product data. Used to fill missing images in Shopify products.
 */
function buildImageMap(): Map<string, string[]> {
  const map = new Map<string, string[]>();
  for (const p of products) {
    const key = p.name.toLowerCase().trim();
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(p.imageUrl);
  }
  return map;
}

// Brand-based fallback: group by brand
function buildBrandMap(): Map<string, string[]> {
  const map = new Map<string, string[]>();
  for (const p of products) {
    const key = p.brand.toLowerCase().trim();
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(p.imageUrl);
  }
  return map;
}

// Vendor → brand name normalization (Shopify vendor names may differ from local)
function buildVendorMap(): Map<string, string[]> {
  const map = new Map<string, string[]>();
  for (const p of products) {
    // Add multiple keys for fuzzy matching
    const keys = [
      p.brand.toLowerCase().trim(),
      p.brand.toLowerCase().replace(/\s+/g, ''),
    ];
    for (const key of keys) {
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(p.imageUrl);
    }
  }
  return map;
}

const imageMap = buildImageMap();
const brandMap = buildBrandMap();
const vendorMap = buildVendorMap();

// Track brand image indices per enrichment batch
const brandCounters = new Map<string, number>();

/**
 * Normalize and extract useful parts from a Shopify product title.
 */
function normalizeTitle(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/\s*-\s*style\s+\d+$/i, '') // Remove "- Style N"
    .replace(/\s+/g, ' ');
}

/**
 * Find a matching local product image for a Shopify product that has no images.
 */
function findLocalImage(title: string): string | null {
  const lower = title.toLowerCase().trim();
  const normalized = normalizeTitle(title);

  // 1. Direct exact title match
  if (imageMap.has(lower)) {
    return imageMap.get(lower)![0];
  }

  // 2. Normalized title match (without "Style N")
  if (imageMap.has(normalized)) {
    return imageMap.get(normalized)![0];
  }

  // 3. "Style N" pattern match - map to Nth image within brand
  const styleMatch = lower.match(/^(.+?)\s*-\s*style\s+(\d+)$/);
  if (styleMatch) {
    const baseName = styleMatch[1].trim();
    const styleNum = parseInt(styleMatch[2]) - 1;

    // Direct base name match in image map
    if (imageMap.has(baseName)) {
      const images = imageMap.get(baseName)!;
      return images[styleNum % images.length];
    }

    // Try matching base name parts against brand map
    for (const [brand, images] of brandMap) {
      if (baseName.includes(brand) || brand.includes(baseName.split(' ')[0])) {
        // Filter images by category hint from title
        const isSneakerHint = /sneaker|shoe|sandal|b30|b22|af1|campus|gats|jordan/i.test(baseName);
        const isClothesHint = /tee|hoodie|sweater|shirt|short|set|piece|jacket|polo|pant/i.test(baseName);
        
        let filteredImages = images;
        if (isSneakerHint) {
          const sneakerProducts = products.filter(p => p.brand.toLowerCase() === brand && p.category === 'sneakers');
          if (sneakerProducts.length > 0) filteredImages = sneakerProducts.map(p => p.imageUrl);
        } else if (isClothesHint) {
          const clothesProducts = products.filter(p => p.brand.toLowerCase() === brand && p.category === 'clothes');
          if (clothesProducts.length > 0) filteredImages = clothesProducts.map(p => p.imageUrl);
        }

        return filteredImages[styleNum % filteredImages.length];
      }
    }
  }

  // 4. Partial word matching
  const words = lower.split(/\s+/).filter(w => w.length > 2);
  let bestMatch: { images: string[]; score: number } | null = null;
  
  for (const [name, images] of imageMap) {
    const matchCount = words.filter(w => name.includes(w)).length;
    const score = matchCount / words.length;
    if (score >= 0.5 && matchCount >= 2) {
      if (!bestMatch || score > bestMatch.score) {
        bestMatch = { images, score };
      }
    }
  }
  if (bestMatch) return bestMatch.images[0];

  // 5. Brand/vendor-based fallback - find brand name in title
  for (const [brand, images] of brandMap) {
    if (lower.includes(brand) && brand.length >= 3) {
      const key = `brand-${brand}`;
      const idx = brandCounters.get(key) || 0;
      brandCounters.set(key, idx + 1);
      return images[idx % images.length];
    }
  }

  // 6. Try first word as vendor/brand
  const firstWord = lower.split(/\s+/)[0];
  if (firstWord && firstWord.length >= 3) {
    for (const [brand, images] of brandMap) {
      if (brand.startsWith(firstWord) || firstWord.startsWith(brand)) {
        const key = `vendor-${firstWord}`;
        const idx = brandCounters.get(key) || 0;
        brandCounters.set(key, idx + 1);
        return images[idx % images.length];
      }
    }
  }

  return null;
}

/**
 * Enrich a Shopify product with a local image if it has no images.
 */
export function enrichProductImage(product: ShopifyProduct): ShopifyProduct {
  if (product.node.images.edges.length > 0) return product;

  const localImage = findLocalImage(product.node.title);
  if (!localImage) return product;

  return {
    node: {
      ...product.node,
      images: {
        edges: [{ node: { url: localImage, altText: product.node.title } }],
      },
    },
  };
}

/**
 * Enrich a single product node with local image if missing.
 */
export function enrichProductNodeImage(product: ShopifyProduct['node']): ShopifyProduct['node'] {
  if (product.images.edges.length > 0) return product;

  const localImage = findLocalImage(product.title);
  if (!localImage) return product;

  return {
    ...product,
    images: {
      edges: [{ node: { url: localImage, altText: product.title } }],
    },
  };
}
