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

const imageMap = buildImageMap();
const brandMap = buildBrandMap();

// Track which brand image index to use next (for "Style N" products)
const brandCounters = new Map<string, number>();

/**
 * Find a matching local product image for a Shopify product that has no images.
 */
function findLocalImage(title: string): string | null {
  const lower = title.toLowerCase().trim();

  // Direct title match
  if (imageMap.has(lower)) {
    return imageMap.get(lower)![0];
  }

  // Try matching known patterns like "Brand Product - Style N"
  // Extract brand name and style number
  const styleMatch = lower.match(/^(.+?)\s*-\s*style\s+(\d+)$/);
  if (styleMatch) {
    const baseName = styleMatch[1].trim();
    const styleNum = parseInt(styleMatch[2]) - 1;
    
    // Try direct base name match
    if (imageMap.has(baseName)) {
      const images = imageMap.get(baseName)!;
      if (styleNum < images.length) return images[styleNum];
      return images[0];
    }

    // Try brand-based match using the first word(s) as brand
    for (const [brand, images] of brandMap) {
      if (baseName.startsWith(brand) || brand.startsWith(baseName.split(' ')[0])) {
        if (styleNum < images.length) return images[styleNum];
        return images[0];
      }
    }
  }

  // Try partial matching - find products whose names contain key parts
  const words = lower.split(/\s+/);
  for (const [name, images] of imageMap) {
    // Check if most words match
    const matchCount = words.filter(w => name.includes(w)).length;
    if (matchCount >= Math.ceil(words.length * 0.6) && matchCount >= 2) {
      return images[0];
    }
  }

  // Brand-based fallback using title's first word(s)
  for (const [brand, images] of brandMap) {
    if (lower.includes(brand)) {
      const key = `brand-${brand}`;
      const idx = brandCounters.get(key) || 0;
      brandCounters.set(key, idx + 1);
      return images[idx % images.length];
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
