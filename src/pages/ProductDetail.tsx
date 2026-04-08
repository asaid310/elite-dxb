import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, Heart, ShoppingBag, Truck, Shield, RotateCcw } from "lucide-react";
import { getProductById } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const product = getProductById(id || "");
  const [selectedSize, setSelectedSize] = useState("");
  const [liked, setLiked] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 text-center">
          <h1 className="text-3xl font-heading font-bold text-foreground">Product not found</h1>
          <button onClick={() => navigate("/")} className="mt-4 text-primary hover:underline">← Back to shop</button>
        </div>
        <CartDrawer />
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
      <Navbar />
      <div className="pt-28 pb-20 px-4">
        <div className="container mx-auto">
          {/* Back button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden bg-muted/20 border border-border/50 aspect-square">
              <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
              {product.tag && (
                <span className="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-bold uppercase">
                  {product.tag}
                </span>
              )}
              <span className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-bold">
                -{discount}%
              </span>
              <button
                onClick={() => setLiked(!liked)}
                className="absolute bottom-4 right-4 p-3 rounded-full bg-card/80 backdrop-blur-sm border border-border hover:border-primary transition-colors"
              >
                <Heart className={`w-5 h-5 ${liked ? "fill-primary text-primary" : "text-foreground"}`} />
              </button>
            </div>

            {/* Details */}
            <div className="flex flex-col">
              <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">{product.brand}</p>
              <h1 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mt-2">{product.name}</h1>

              <div className="flex items-center gap-3 mt-4">
                <span className="text-3xl font-bold text-primary">{product.salePrice} د.إ</span>
                <span className="text-lg text-muted-foreground line-through">{product.originalPrice} د.إ</span>
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-bold">Save {(product.originalPrice - product.salePrice).toFixed(2)} د.إ</span>
              </div>

              {product.description && (
                <p className="text-muted-foreground mt-6 leading-relaxed">{product.description}</p>
              )}

              {/* Size selector */}
              <div className="mt-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-foreground">Select Size</span>
                  {!selectedSize && <span className="text-xs text-primary animate-pulse">Please select a size</span>}
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-[56px] px-4 py-3 rounded-xl text-sm font-semibold border-2 transition-all duration-200 ${
                        selectedSize === size
                          ? "border-primary bg-primary/10 text-primary scale-105"
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
                className={`mt-8 flex items-center justify-center gap-3 w-full py-4 rounded-full font-heading font-semibold text-lg transition-all duration-300 ${
                  selectedSize
                    ? "bg-gradient-hero text-primary-foreground glow-primary hover:scale-[1.02]"
                    : "bg-muted text-muted-foreground cursor-not-allowed"
                }`}
              >
                <ShoppingBag className="w-5 h-5" />
                {selectedSize ? "Add to Cart" : "Select a Size First"}
              </button>

              {/* Info badges */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { icon: Truck, label: "Free Shipping", sub: "Over 200 د.إ" },
                  { icon: Shield, label: "1:1 Quality", sub: "Guaranteed" },
                  { icon: RotateCcw, label: "Fast Delivery", sub: "7-11 days" },
                ].map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="flex flex-col items-center text-center p-3 rounded-xl bg-muted/30 border border-border/50">
                    <Icon className="w-5 h-5 text-primary mb-1.5" />
                    <span className="text-xs font-semibold text-foreground">{label}</span>
                    <span className="text-[10px] text-muted-foreground">{sub}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default ProductDetail;
