import { Heart, ShoppingBag } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  image: string;
  name: string;
  brand: string;
  originalPrice: number;
  salePrice: number;
  tag?: string;
}

const ProductCard = ({ image, name, brand, originalPrice, salePrice, tag }: ProductCardProps) => {
  const [liked, setLiked] = useState(false);
  const discount = Math.round(((originalPrice - salePrice) / originalPrice) * 100);

  return (
    <div className="group relative rounded-2xl overflow-hidden bg-gradient-card border border-border/50 shadow-card hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
          width={800}
          height={800}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {tag && (
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase">
            {tag}
          </span>
        )}
        <span className="absolute top-3 right-3 px-2 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold">
          -{discount}%
        </span>
        {/* Overlay actions */}
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

      {/* Info */}
      <div className="p-4">
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{brand}</p>
        <h3 className="font-heading font-semibold text-foreground truncate">{name}</h3>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-lg font-bold text-primary">${salePrice}</span>
          <span className="text-sm text-muted-foreground line-through">${originalPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
