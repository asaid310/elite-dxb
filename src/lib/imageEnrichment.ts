import products from "@/data/products";
import type { ShopifyProduct } from "@/lib/shopify";

/**
 * Build lookup maps from local product data for image enrichment.
 */

// Exact name → images
const imageMap = new Map<string, string[]>();
// Brand (lowercase) → images
const brandMap = new Map<string, string[]>();
// Brand (lowercase) → category → images
const brandCategoryMap = new Map<string, Map<string, string[]>>();

for (const p of products) {
  const nameKey = p.name.toLowerCase().trim();
  if (!imageMap.has(nameKey)) imageMap.set(nameKey, []);
  imageMap.get(nameKey)!.push(p.imageUrl);

  const brandKey = p.brand.toLowerCase().trim();
  if (!brandMap.has(brandKey)) brandMap.set(brandKey, []);
  brandMap.get(brandKey)!.push(p.imageUrl);

  if (!brandCategoryMap.has(brandKey)) brandCategoryMap.set(brandKey, new Map());
  const catMap = brandCategoryMap.get(brandKey)!;
  const cat = p.category?.toLowerCase() || 'other';
  if (!catMap.has(cat)) catMap.set(cat, []);
  catMap.get(cat)!.push(p.imageUrl);
}

// Common name normalizations: typos, plurals, abbreviations
const ALIASES: Record<string, string> = {
  'chrome hearts': 'chrome heart',
  'comme des garcons': 'commes des garcons',
  'comme des garcon': 'commes des garcon',
  'birkenstock': 'birkenstcok',
  'cdg': 'commes des garcons',
  'cb': 'cole buxton',
  'ch': 'chrome heart',
  'lv': 'louis vuitton',
  'rl': 'ralph lauren',
  'ap': 'audemars piguet',
  'crtz': 'corteiz',
  'syna': 'synaworld',
  'casa': 'casablanca',
  'jpg': 'jean paul gaultier',
  'tobacco': 'tobbaco',       // typo in local data
  'stronger with you': 'stronger with you',
  'arsenal': 'arsenal',
  'barca': 'barca',
};

// Brand name variants for matching Shopify vendor/title to local brand
const BRAND_ALIASES: Record<string, string> = {
  'ami': 'ami',
  'ami paris': 'ami',
  'chrome hearts': 'chrome heart',
  'chrome heart': 'chrome heart',
  'comme des garcons': 'commes des garcons',
  'cdg': 'commes des garcons',
  'cole buxton': 'cole buxton',
  'cb': 'cole buxton',
  'louis vuitton': 'louis vuitton',
  'lv': 'louis vuitton',
  'ralph lauren': 'ralph lauren',
  'rl': 'ralph lauren',
  'audemars piguet': 'audemars piguet',
  'ap': 'audemars piguet',
  'synaworld': 'synaworld',
  'syna': 'synaworld',
  'casablanca': 'casablanca',
  'casa': 'casablanca',
  'corteiz': 'corteiz',
  'crtz': 'corteiz',
  'jean paul gaultier': 'jean paul gaultier',
  'jpg': 'jean paul gaultier',
  'emporio armani': 'emporio armani',
  'birkenstock': 'birkenstock',
  'nishane': 'nishane',
  'mancera': 'mancera',
  'tom ford': 'tom ford',
  'versace': 'versace',
  'creed': 'creed',
  'dior': 'dior',
  'gucci': 'gucci',
  'hermes': 'hermes',
  'goyard': 'goyard',
  'nike': 'nike',
  'adidas': 'adidas',
  'jordan': 'jordan',
  'travis scott': 'travis scott',
  'travis': 'travis scott',
  'bape': 'bape',
  'hellstar': 'hellstar',
  'sp5der': 'sp5der',
  'gallery dept': 'gallery dept',
  'stone island': 'stone island',
  'broken planet': 'broken planet',
  'denim tears': 'denim tears',
  'essentials': 'essentials',
  'trapstar': 'trapstar',
  'lacoste': 'lacoste',
  'burberry': 'burberry',
  'cpfm': 'cpfm',
  'chief keef': 'chief keef',
  'amiri': 'amiri',
  'acne studios': 'acne studios',
  'acne studio': 'acne studios',
  'maison margiela': 'maison margiela',
  'loro piana': 'loro piana',
  'rimowa': 'rimowa',
  'golden goose': 'golden goose',
  'rolex': 'rolex',
  'patek philippe': 'patek philippe',
  'patek philipe': 'patek philippe',
  'van cleef': 'van cleef',
  'ysl': 'ysl',
  'saint laurent': 'ysl',
  'labubu': 'labubu',
  'stronger with you': 'emporio armani',
  'valentino': 'valentino',
  'uggs': 'uggs',
  'arsenal': 'arsenal',
  'real madrid': 'real madrid',
  'football': 'football',
};

// Direct title → local name overrides for hard-to-match products
const TITLE_OVERRIDES: Record<string, string> = {
  'stronger with you tobacco 5ml': 'stronger with you tobbaco 5ml',
  'stronger with you parfum 5ml': 'stronger with you parfum 5ml',
  'jpg le male le parfum 5ml': 'jpg le male le parfum 5ml',
  'jpg le beau 5ml': 'jpg le beau 5ml',
  'arabians tonka 5ml': 'arabians tonka 5 ml',
  'mancera french rivera 5ml': 'mancera french rivera 5ml',
  'mancera amore caffe 5ml': 'mancera amore caffe 5ml',
  'nishane hacivat x 5ml': 'nishane hacivat x',
  'valentino born in roma intense 5ml': 'valentino born in roma intense 5ml',
  'jordan 4 - frozen moments': 'jordan 4 frozen moments',
  'jordan 4 - pure money': 'jordan 4 pure money',
  'birkenstock clogs': 'birkenstcok clogs',
  'birkenstock': 'birkenstcok clogs',
  'cdg zip up': 'commes des garcon zip up',
  'chrome hearts tee': 'chrome hearts long sleeve',
  'chrome hearts sport shirt': 'chrome heart sport shirt',
  'chrome hearts cap': 'chrome heart sport shirt',
  'gallery dept piece': 'gallery dept tee',
  'gallery dept hat': 'gallery dept tee',
  'burberry piece': 'burberry polo',
  'burberry accessory': 'burberry polo',
  'sp5der piece': 'sp5der hoodie',
  'sp5der tee': 'sp5der hoodie',
  'stone island piece': 'stone island hoodie',
  'cole buxton set': 'cole buxton sweater',
  'corteiz set': 'corteiz tee',
  'syna hoodie': 'synaworld hoodie',
  'syna tee': 'syna tee',
  'cb sweater': 'cole buxton sweater',
  'ch jacket': 'ch jacket',
  'ap sweater': 'ap sweater',
  'goyard wallet': 'goyard card holder',
  'rolex watch': 'rolex submariner',
  'patek philippe': 'patek philipe',
  'arsenal retro kit': 'travis barca kit',
  'barca set': 'travis barca kit',
  'real madrid set': 'travis barca kit',
  'football jersey': 'travis barca kit',
  'uggs chestnut': 'birkenstcok clogs',
  'lacoste jacket': 'lacoste jacket black',
  'lacoste polo': 'lacoste polo black',
};

// Track counters for cycling through images
const counters = new Map<string, number>();
function nextImage(key: string, images: string[]): string {
  const idx = counters.get(key) || 0;
  counters.set(key, idx + 1);
  return images[idx % images.length];
}

/**
 * Normalize a title for matching: lowercase, remove dashes, extra spaces, size suffixes
 */
function normalize(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/\s*-\s*/g, ' ')  // "Jordan 4 - Black Cats" → "jordan 4 black cats"
    .replace(/\s+/g, ' ')
    .replace(/\s*5\s*ml$/i, '') // Remove "5ml" or "5 ml" suffix
    .replace(/\s*#\d+$/, '');   // Remove "#8" etc
}

/**
 * Try to find a brand name within a title
 */
function extractBrand(title: string): string | null {
  const lower = title.toLowerCase().trim();
  
  // Sort brands by length (longest first) for greedy matching
  const sortedBrands = Object.keys(BRAND_ALIASES).sort((a, b) => b.length - a.length);
  for (const alias of sortedBrands) {
    if (lower.startsWith(alias + ' ') || lower === alias) {
      return BRAND_ALIASES[alias];
    }
  }
  return null;
}

/**
 * Determine category hint from product title
 */
function getCategoryHint(title: string): string | null {
  const lower = title.toLowerCase();
  if (/sneaker|shoe|sandal|b30|b22|campus|gats|jordan|tn|j1|af1|skate|clog|ugg/i.test(lower)) return 'sneakers';
  if (/tee|hoodie|sweater|shirt|short|set|piece|jacket|polo|pant|jean|zip|jogger|kit|jersey/i.test(lower)) return 'clothes';
  if (/card holder|wallet|bracelet|cap|hat|belt|beanie|bag|tote|cross body|watch|phone case|mystery box/i.test(lower)) return 'accessories';
  if (/5ml|parfum|fragrance|eau|cologne|perfume|hacivat|tonka|aventus|eros|libre|fabulous|imagination|caffe|rivera|le male|le beau|tobacco/i.test(lower)) return 'fragrances';
  return null;
}

/**
 * Find a matching local product image for a Shopify product.
 */
function findLocalImage(title: string): string | null {
  const lower = title.toLowerCase().trim();
  const normalized = normalize(title);

  // 0. Direct title overrides
  const overrideKey = TITLE_OVERRIDES[lower] || TITLE_OVERRIDES[normalized];
  if (overrideKey && imageMap.has(overrideKey)) {
    return nextImage(`override-${overrideKey}`, imageMap.get(overrideKey)!);
  }

  // 1. Direct exact match
  if (imageMap.has(lower)) {
    return nextImage(`exact-${lower}`, imageMap.get(lower)!);
  }

  // 2. Normalized match (without dashes, 5ml, etc.)
  if (imageMap.has(normalized)) {
    return nextImage(`norm-${normalized}`, imageMap.get(normalized)!);
  }

  // 3. Apply aliases and try again
  for (const [alias, replacement] of Object.entries(ALIASES)) {
    const aliased = lower.replace(alias, replacement);
    if (aliased !== lower && imageMap.has(aliased)) {
      return nextImage(`alias-${aliased}`, imageMap.get(aliased)!);
    }
    const aliasedNorm = normalized.replace(alias, replacement);
    if (aliasedNorm !== normalized && imageMap.has(aliasedNorm)) {
      return nextImage(`alias-${aliasedNorm}`, imageMap.get(aliasedNorm)!);
    }
  }

  // 4. "Style N" pattern - extract base name and use Nth image
  const styleMatch = lower.match(/^(.+?)\s*-?\s*style\s+(\d+)$/);
  if (styleMatch) {
    const baseName = styleMatch[1].trim();
    const styleNum = parseInt(styleMatch[2]) - 1;
    
    // Try base name directly
    if (imageMap.has(baseName)) {
      const images = imageMap.get(baseName)!;
      return images[styleNum % images.length];
    }
    // Try with aliases
    for (const [alias, replacement] of Object.entries(ALIASES)) {
      const aliased = baseName.replace(alias, replacement);
      if (aliased !== baseName && imageMap.has(aliased)) {
        const images = imageMap.get(aliased)!;
        return images[styleNum % images.length];
      }
    }
    // Try brand-based with category filter
    const brand = extractBrand(baseName);
    if (brand) {
      const catHint = getCategoryHint(baseName);
      const catMap = brandCategoryMap.get(brand);
      if (catMap && catHint) {
        const images = catMap.get(catHint);
        if (images?.length) return images[styleNum % images.length];
      }
      const brandImages = brandMap.get(brand);
      if (brandImages?.length) return brandImages[styleNum % brandImages.length];
    }
  }

  // 5. Generic category words (Piece, Set, Accessory) → use brand + category
  const genericMatch = lower.match(/^(.+?)\s+(piece|set|accessory|accessories)$/);
  if (genericMatch) {
    const brandPart = genericMatch[1].trim();
    const brand = extractBrand(brandPart) || brandPart;
    const catHint = getCategoryHint(lower);
    
    // Try brand + category
    const catMap = brandCategoryMap.get(brand);
    if (catMap) {
      if (catHint) {
        const images = catMap.get(catHint);
        if (images?.length) return nextImage(`generic-${brand}-${catHint}`, images);
      }
      // Use any category from this brand
      for (const [, images] of catMap) {
        if (images.length) return nextImage(`generic-${brand}`, images);
      }
    }
    // Try fuzzy brand match
    for (const [bKey, images] of brandMap) {
      if (bKey.includes(brand) || brand.includes(bKey)) {
        return nextImage(`generic-fuzzy-${brand}`, images);
      }
    }
  }

  // 6. Brand-based fallback with category awareness
  const brand = extractBrand(lower);
  if (brand) {
    const catHint = getCategoryHint(lower);
    const catMap = brandCategoryMap.get(brand);
    if (catMap && catHint) {
      const images = catMap.get(catHint);
      if (images?.length) return nextImage(`brand-cat-${brand}-${catHint}`, images);
    }
    const brandImages = brandMap.get(brand);
    if (brandImages?.length) return nextImage(`brand-${brand}`, brandImages);
  }

  // 7. Partial word matching - more aggressive
  const words = normalized.split(/\s+/).filter(w => w.length > 2);
  let bestMatch: { images: string[]; score: number; key: string } | null = null;
  
  for (const [name, images] of imageMap) {
    const nameWords = name.split(/\s+/);
    const matchCount = words.filter(w => nameWords.some(nw => nw === w || nw.startsWith(w) || w.startsWith(nw))).length;
    const score = matchCount / Math.max(words.length, 1);
    if (score >= 0.4 && matchCount >= 2) {
      if (!bestMatch || score > bestMatch.score || (score === bestMatch.score && images.length > bestMatch.images.length)) {
        bestMatch = { images, score, key: name };
      }
    }
  }
  if (bestMatch) return nextImage(`partial-${bestMatch.key}`, bestMatch.images);

  // 8. Single-word brand detection from brandMap
  for (const [bKey, images] of brandMap) {
    if (lower.includes(bKey) && bKey.length >= 3) {
      return nextImage(`fallback-${bKey}`, images);
    }
  }

  // 9. First word as brand lookup
  const firstWord = lower.split(/\s+/)[0];
  if (firstWord && firstWord.length >= 3) {
    for (const [bKey, images] of brandMap) {
      if (bKey.startsWith(firstWord) || firstWord.startsWith(bKey)) {
        return nextImage(`first-${firstWord}`, images);
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
