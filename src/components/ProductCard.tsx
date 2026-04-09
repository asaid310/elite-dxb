import { Heart, ShoppingBag, ImageIcon, Loader2 } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "@/stores/cartStore";
import type { ShopifyProduct } from "@/lib/shopify";

interface ProductCardProps {
  shopifyProduct: ShopifyProduct;
}

const ProductCard = ({ shopifyProduct }: ProductCardProps) => {
  const [liked, setLiked] = useState(false);
  const addItem = useCartStore(state => state.addItem);
  const isLoading = useCartStore(state => state.isLoading);
  const navigate = useNavigate();

  const product = shopifyProduct.node;
  const name = product.title;
  const imageUrl = product.images.edges[0]?.node.url;
  const price = parseFloat(product.priceRange.minVariantPrice.amount);
  const currency = product.priceRange.minVariantPrice.currencyCode === "AED" ? "د.إ" : product.priceRange.minVariantPrice.currencyCode;
  const selectedVariant = product.variants.edges[0]?.node;

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedVariant) return;
    await addItem({
      product: shopifyProduct,
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity: 1,
      selectedOptions: selectedVariant.selectedOptions || [],
    });
  };

  const handleClick = () => {
    navigate(`/product/${product.handle}`);
  };

  return (
    <div
      onClick={handleClick}
      className="group relative rounded-xl overflow-hidden bg-gradient-card border border-border/50 shadow-card hover:border-primary/30 transition-all duration-300 cursor-pointer"
    >
      <div className="relative aspect-square overflow-hidden bg-muted/20 flex items-center justify-center">
        {imageUrl ? (
          <img src={imageUrl} alt={product.images.edges[0]?.node.altText || name} className="w-full h-full object-cover" loading="lazy" />
        ) : (
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <ImageIcon className="w-8 h-8" />
            <span className="text-xs font-medium">Product Image</span>
          </div>
        )}
        <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
          <button
            onClick={(e) => { e.stopPropagation(); setLiked(!liked); }}
            className="p-2.5 rounded-full bg-card border border-border hover:border-primary transition-colors"
          >
            <Heart className={`w-4 h-4 ${liked ? "fill-primary text-primary" : "text-foreground"}`} />
          </button>
          <button
            onClick={handleAddToCart}
            disabled={isLoading || !selectedVariant}
            className="p-2.5 rounded-full bg-gradient-hero text-primary-foreground glow-primary hover:scale-110 transition-transform disabled:opacity-50"
          >
            {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <ShoppingBag className="w-4 h-4" />}
          </button>
        </div>
      </div>

      <div className="p-2">
        <p className="text-[9px] text-muted-foreground uppercase tracking-wider">{product.variants.edges[0]?.node.selectedOptions?.find(o => o.name === "Vendor")?.value || ""}</p>
        <h3 className="font-heading font-semibold text-xs text-foreground truncate">{name}</h3>
        <div className="flex items-center gap-1 mt-0.5">
          <span className="text-xs font-bold text-primary">{price.toFixed(2)} {currency}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
