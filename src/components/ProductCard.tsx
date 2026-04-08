import { Heart, ShoppingBag, ImageIcon } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

interface ProductCardProps {
  id?: string;
  name: string;
  brand: string;
  originalPrice: number;
  salePrice: number;
  imageUrl?: string;
  tag?: string;
  currency?: string;
  sizes?: string[];
}

const ProductCard = ({ id, name, brand, originalPrice, salePrice, imageUrl, tag, currency = "د.إ", sizes }: ProductCardProps) => {
  const [liked, setLiked] = useState(false);
  const { addItem } = useCart();
  const navigate = useNavigate();
  const discount = Math.round(((originalPrice - salePrice) / originalPrice) * 100);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem({
      id: `${id || name}-${brand}-${sizes?.[0] || "default"}-${salePrice}`,
      name,
      brand,
      price: salePrice,
      imageUrl,
      size: sizes?.[0] || undefined,
    });
  };

  const handleClick = () => {
    if (id) navigate(`/product/${id}`);
  };

  return (
    <div
      onClick={handleClick}
      className={`group relative rounded-xl overflow-hidden bg-gradient-card border border-border/50 shadow-card hover:border-primary/30 transition-all duration-300 ${id ? "cursor-pointer" : ""}`}
    >
      <div className="relative aspect-square overflow-hidden bg-muted/20 flex items-center justify-center">
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="w-full h-full object-cover" loading="lazy" />
        ) : (
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <ImageIcon className="w-8 h-8" />
            <span className="text-xs font-medium">Product Image</span>
          </div>
        )}
        {tag && (
          <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold uppercase">
            {tag}
          </span>
        )}
        {discount > 0 && (
          <span className="absolute top-2 right-2 px-1.5 py-0.5 rounded-full bg-accent text-accent-foreground text-[10px] font-bold">
            -{discount}%
          </span>
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
            className="p-2.5 rounded-full bg-gradient-hero text-primary-foreground glow-primary hover:scale-110 transition-transform"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="p-3">
        <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{brand}</p>
        <h3 className="font-heading font-semibold text-sm text-foreground truncate">{name}</h3>
        <div className="flex items-center gap-1.5 mt-1">
          <span className="text-sm font-bold text-primary">{salePrice} {currency}</span>
          {originalPrice !== salePrice && (
            <span className="text-xs text-muted-foreground line-through">{originalPrice} {currency}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
