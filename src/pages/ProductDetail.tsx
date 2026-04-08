import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, Heart, ShoppingBag, Truck, Shield, RotateCcw } from "lucide-react";
import { getProductById } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import SearchOverlay from "@/components/SearchOverlay";
import WhatsAppButton from "@/components/WhatsAppButton";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const product = getProductById(id || "");
  const [selectedSize, setSelectedSize] = useState("");
  const [liked, setLiked] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  if (!product) {
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

  const discount = Math.round(((product.originalPrice - product.salePrice) / product.originalPrice) * 100);

  const handleAddToCart = () => {
    if (!selectedSize) return;
    addItem({
      id: `${product.id}-${selectedSize}`,
      name: product.name,
      brand: product.brand,
      price: product.salePrice,
      imageUrl: product.imageUrl,
      size: selectedSize,
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
            {/* Image */}
            <div className="relative rounded-xl overflow-hidden bg-muted/20 border border-border/50 aspect-square">
              <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
              {product.tag && (
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase">
                  {product.tag}
                </span>
              )}
              {discount > 0 && (
                <span className="absolute top-3 right-3 px-2 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold">
                  -{discount}%
                </span>
              )}
              <button
                onClick={() => setLiked(!liked)}
                className="absolute bottom-3 right-3 p-2.5 rounded-full bg-card/80 backdrop-blur-sm border border-border hover:border-primary transition-colors"
              >
                <Heart className={`w-5 h-5 ${liked ? "fill-primary text-primary" : "text-foreground"}`} />
              </button>
            </div>

            {/* Details */}
            <div className="flex flex-col">
              <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">{product.brand}</p>
              <h1 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mt-1">{product.name}</h1>

              <div className="flex flex-wrap items-center gap-2 mt-3">
                <span className="text-2xl font-bold text-primary">{product.salePrice} د.إ</span>
                {product.originalPrice !== product.salePrice && (
                  <span className="text-base text-muted-foreground line-through">{product.originalPrice} د.إ</span>
                )}
                {discount > 0 && (
                  <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-bold">
                    Save {(product.originalPrice - product.salePrice).toFixed(0)} د.إ
                  </span>
                )}
              </div>

              {product.description && (
                <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{product.description}</p>
              )}

              {/* Size selector */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-foreground">Select Size</span>
                  {!selectedSize && <span className="text-xs text-primary animate-pulse">Required</span>}
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
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

              {/* Add to cart */}
              <button
                onClick={handleAddToCart}
                disabled={!selectedSize}
                className={`mt-6 flex items-center justify-center gap-2 w-full py-3.5 rounded-full font-heading font-semibold text-base transition-all ${
                  selectedSize
                    ? "bg-gradient-hero text-primary-foreground glow-primary hover:scale-[1.02]"
                    : "bg-muted text-muted-foreground cursor-not-allowed"
                }`}
              >
                <ShoppingBag className="w-5 h-5" />
                {selectedSize ? "Add to Cart" : "Select a Size"}
              </button>

              {/* Info badges */}
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
