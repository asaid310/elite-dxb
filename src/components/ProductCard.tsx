import { Heart, ShoppingBag, ImageIcon } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  name: string;
  brand: string;
  originalPrice: number;
  salePrice: number;
  tag?: string;
  currency?: string;
}

const ProductCard = ({ name, brand, originalPrice, salePrice, tag, currency = "د.إ" }: ProductCardProps) => {
  const [liked, setLiked] = useState(false);
  const discount = Math.round(((originalPrice - salePrice) / originalPrice) * 100);

  return (
    <div className="group relative rounded-2xl overflow-hidden bg-gradient-card border border-border/50 shadow-card hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
      <div className="relative aspect-square overflow-hidden bg-muted/20 border-b border-dashed border-border/50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <ImageIcon className="w-10 h-10" />
          <span className="text-xs font-medium">Product Image</span>
        </div>
        {tag && (
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase">
            {tag}
          </span>
        )}
        <span className="absolute top-3 right-3 px-2 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold">
          -{discount}%
        </span>
        <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <button
            onClick={() => setLiked(!liked)}
            className="p-3 rounded-full bg-card border border-border hover:border-primary transition-colors"
          >
            <Heart className={`w-5 h-5 ${liked ? "fill-primary text-primary" : "text-foreground"}`} />
          </button>
          <button className="p-3 rounded-full bg-gradient-hero text-primary-foreground glow-primary hover:scale-110 transition-transform">
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{brand}</p>
        <h3 className="font-heading font-semibold text-foreground truncate">{name}</h3>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-lg font-bold text-primary">{salePrice} {currency}</span>
          <span className="text-sm text-muted-foreground line-through">{originalPrice} {currency}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
