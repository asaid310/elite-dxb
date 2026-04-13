import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowLeft, Heart, ShoppingBag, Truck, Shield, RotateCcw, Loader2 } from "lucide-react";
import { fetchProductByHandle, type ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import SearchOverlay from "@/components/SearchOverlay";
import WhatsAppButton from "@/components/WhatsAppButton";
import products from "@/data/products";
import type { Product } from "@/data/products";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id: handle } = useParams();
  const navigate = useNavigate();
  const addItem = useCartStore(state => state.addItem);
  const isCartLoading = useCartStore(state => state.isLoading);
  const [shopifyProduct, setShopifyProduct] = useState<ShopifyProduct['node'] | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariantIdx, setSelectedVariantIdx] = useState(0);
  const [liked, setLiked] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  // Check local products first
  const localProduct: Product | undefined = products.find(p => p.id === handle);

  // Always try to fetch from Shopify (even for local products)
  useEffect(() => {
    if (!handle) {
      setLoading(false);
      return;
    }
    setLoading(true);
    fetchProductByHandle(handle)
      .then(setShopifyProduct)
      .finally(() => setLoading(false));
  }, [handle]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar onSearchOpen={() => setSearchOpen(true)} />
        <div className="pt-32 flex justify-center"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>
      </div>
    );
  }

  // If we have a Shopify product, use that for checkout (even if local product exists)
  const hasShopifyCheckout = !!shopifyProduct;
  const shopifyVariant = shopifyProduct?.variants.edges[selectedVariantIdx]?.node;

  const handleAddToCart = async () => {
    if (!shopifyProduct || !shopifyVariant) {
      toast.error("This product is not available for checkout yet. Please contact us on WhatsApp for assistance.");
      return;
    }
    const shopifyProductWrapper: ShopifyProduct = { node: shopifyProduct };
    await addItem({
      product: shopifyProductWrapper,
      variantId: shopifyVariant.id,
      variantTitle: shopifyVariant.title,
      price: shopifyVariant.price,
      quantity: 1,
      selectedOptions: shopifyVariant.selectedOptions || [],
    });
  };

  // Render local product with Shopify checkout
  if (localProduct) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar onSearchOpen={() => setSearchOpen(true)} />
        <div className="pt-24 pb-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
              <div className="relative rounded-xl overflow-hidden bg-muted/20 border border-border/50 aspect-square">
                <img src={localProduct.imageUrl} alt={localProduct.name} className="w-full h-full object-cover" />
                <button
                  onClick={() => setLiked(!liked)}
                  className="absolute bottom-3 right-3 p-2.5 rounded-full bg-card/80 backdrop-blur-sm border border-border hover:border-primary transition-colors"
                >
                  <Heart className={`w-5 h-5 ${liked ? "fill-primary text-primary" : "text-foreground"}`} />
                </button>
              </div>

              <div className="flex flex-col">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{localProduct.brand}</span>
                <h1 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mt-1">{localProduct.name}</h1>

                <div className="flex flex-wrap items-center gap-2 mt-3">
                  <span className="text-2xl font-bold text-primary">{localProduct.salePrice.toFixed(2)} د.إ</span>
                  {localProduct.originalPrice > localProduct.salePrice && (
                    <span className="text-base text-muted-foreground line-through">{localProduct.originalPrice.toFixed(2)} د.إ</span>
                  )}
                </div>

                {localProduct.description && (
                  <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{localProduct.description}</p>
                )}

                {/* Size selector - use Shopify variants if available, otherwise local sizes */}
                {hasShopifyCheckout && shopifyProduct.variants.edges.length > 1 ? (
                  <div className="mt-6">
                    <span className="text-sm font-semibold text-foreground mb-2 block">Select Size</span>
                    <div className="flex flex-wrap gap-2">
                      {shopifyProduct.variants.edges.map((v, idx) => (
                        <button
                          key={v.node.id}
                          onClick={() => setSelectedVariantIdx(idx)}
                          disabled={!v.node.availableForSale}
                          className={`min-w-[48px] px-3 py-2.5 rounded-lg text-sm font-semibold border-2 transition-all ${
                            selectedVariantIdx === idx
                              ? "border-primary bg-primary/10 text-primary"
                              : v.node.availableForSale
                                ? "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                                : "border-border text-muted-foreground/40 cursor-not-allowed"
                          }`}
                        >
                          {v.node.title}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : localProduct.sizes.length > 0 ? (
                  <div className="mt-6">
                    <span className="text-sm font-semibold text-foreground mb-2 block">Select Size</span>
                    <div className="flex flex-wrap gap-2">
                      {localProduct.sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`min-w-[48px] px-3 py-2.5 rounded-lg text-sm font-semibold border-2 transition-all ${
                            selectedSize === size
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : null}

                <button
                  onClick={handleAddToCart}
                  disabled={isCartLoading || (hasShopifyCheckout && !shopifyVariant?.availableForSale)}
                  className={`mt-6 flex items-center justify-center gap-2 w-full py-3.5 rounded-full font-heading font-semibold text-base transition-all ${
                    hasShopifyCheckout && !shopifyVariant?.availableForSale
                      ? "bg-muted text-muted-foreground cursor-not-allowed"
                      : "bg-gradient-hero text-primary-foreground glow-primary hover:scale-[1.02]"
                  }`}
                >
                  {isCartLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <ShoppingBag className="w-5 h-5" />}
                  {hasShopifyCheckout && !shopifyVariant?.availableForSale ? "Unavailable" : "Buy Now"}
                </button>

                <div className="grid grid-cols-3 gap-2 mt-6">
                  {[
                    { icon: Truck, label: "Free Shipping", sub: "Over 200 د.إ" },
                    { icon: Shield, label: "1:1 Quality", sub: "Guaranteed" },
                    { icon: RotateCcw, label: "Fast Delivery", sub: "7-11 days" },
                  ].map(({ icon: Icon, label, sub }) => (
                    <div key={label} className="flex flex-col items-center text-center p-2.5 rounded-lg bg-muted/30 border border-border/50">
                      <Icon className="w-4 h-4 text-primary mb-1" />
                      <span className="text-[10px] font-semibold text-foreground">{label}</span>
                      <span className="text-[9px] text-muted-foreground">{sub}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <CartDrawer />
        <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
        <WhatsAppButton />
      </div>
    );
  }

  // Shopify-only product
  if (!shopifyProduct) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar onSearchOpen={() => setSearchOpen(true)} />
        <div className="pt-32 text-center px-4">
          <h1 className="text-2xl font-heading font-bold text-foreground">Product not found</h1>
          <button onClick={() => navigate("/")} className="mt-4 text-primary hover:underline">← Back to shop</button>
        </div>
        <CartDrawer />
        <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      </div>
    );
  }

  const product = shopifyProduct;
  const selectedVariant = product.variants.edges[selectedVariantIdx]?.node;
  const price = parseFloat(selectedVariant?.price.amount || product.priceRange.minVariantPrice.amount);
  const currency = product.priceRange.minVariantPrice.currencyCode === "AED" ? "د.إ" : product.priceRange.minVariantPrice.currencyCode;
  const imageUrl = product.images.edges[0]?.node.url;
  const shopifyProductWrapper: ShopifyProduct = { node: product };

  const handleShopifyAddToCart = async () => {
    if (!selectedVariant) return;
    await addItem({
      product: shopifyProductWrapper,
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity: 1,
      selectedOptions: selectedVariant.selectedOptions || [],
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar onSearchOpen={() => setSearchOpen(true)} />
      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <div className="relative rounded-xl overflow-hidden bg-muted/20 border border-border/50 aspect-square">
              {imageUrl && <img src={imageUrl} alt={product.title} className="w-full h-full object-cover" />}
              <button
                onClick={() => setLiked(!liked)}
                className="absolute bottom-3 right-3 p-2.5 rounded-full bg-card/80 backdrop-blur-sm border border-border hover:border-primary transition-colors"
              >
                <Heart className={`w-5 h-5 ${liked ? "fill-primary text-primary" : "text-foreground"}`} />
              </button>
            </div>

            <div className="flex flex-col">
              <h1 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mt-1">{product.title}</h1>

              <div className="flex flex-wrap items-center gap-2 mt-3">
                <span className="text-2xl font-bold text-primary">{price.toFixed(2)} {currency}</span>
              </div>

              {product.description && product.description.length > 0 && (
                <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{product.description}</p>
              )}

              {product.variants.edges.length > 1 && (
              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-foreground">Select Variant</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.variants.edges.map((v, idx) => (
                    <button
                      key={v.node.id}
                      onClick={() => setSelectedVariantIdx(idx)}
                      disabled={!v.node.availableForSale}
                      className={`min-w-[48px] px-3 py-2.5 rounded-lg text-sm font-semibold border-2 transition-all ${
                        selectedVariantIdx === idx
                          ? "border-primary bg-primary/10 text-primary"
                          : v.node.availableForSale
                            ? "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                            : "border-border text-muted-foreground/40 cursor-not-allowed"
                      }`}
                    >
                      {v.node.title}
                    </button>
                  ))}
                </div>
              </div>
              )}

              <button
                onClick={handleShopifyAddToCart}
                disabled={!selectedVariant?.availableForSale || isCartLoading}
                className={`mt-6 flex items-center justify-center gap-2 w-full py-3.5 rounded-full font-heading font-semibold text-base transition-all ${
                  selectedVariant?.availableForSale
                    ? "bg-gradient-hero text-primary-foreground glow-primary hover:scale-[1.02]"
                    : "bg-muted text-muted-foreground cursor-not-allowed"
                }`}
              >
                {isCartLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <ShoppingBag className="w-5 h-5" />}
                {selectedVariant?.availableForSale ? "Add to Cart" : "Unavailable"}
              </button>

              <div className="grid grid-cols-3 gap-2 mt-6">
                {[
                  { icon: Truck, label: "Free Shipping", sub: "Over 200 د.إ" },
                  { icon: Shield, label: "1:1 Quality", sub: "Guaranteed" },
                  { icon: RotateCcw, label: "Fast Delivery", sub: "7-11 days" },
                ].map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="flex flex-col items-center text-center p-2.5 rounded-lg bg-muted/30 border border-border/50">
                    <Icon className="w-4 h-4 text-primary mb-1" />
                    <span className="text-[10px] font-semibold text-foreground">{label}</span>
                    <span className="text-[9px] text-muted-foreground">{sub}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <CartDrawer />
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <WhatsAppButton />
    </div>
  );
};

export default ProductDetail;
