import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import SearchOverlay from "@/components/SearchOverlay";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getProductsByBrand } from "@/data/products";
import type { Product } from "@/data/products";
import { useCurrencyStore } from "@/stores/currencyStore";
import { useShopifyProducts } from "@/hooks/useShopifyProducts";

const LocalProductCard = ({ product }: { product: Product }) => {
  const navigate = useNavigate();
  const format = useCurrencyStore(state => state.format);

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="group relative rounded-xl overflow-hidden bg-gradient-card border border-border/50 shadow-card hover:border-primary/30 transition-all duration-300 cursor-pointer"
    >
      <div className="relative aspect-square overflow-hidden bg-muted/20">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-1.5">
        <h3 className="font-heading font-semibold text-[11px] text-foreground truncate">{product.name}</h3>
        <div className="flex items-center gap-1.5">
          <span className="text-[11px] font-bold text-primary">{format(product.salePrice)}</span>
          {product.originalPrice > product.salePrice && (
            <span className="text-[10px] text-muted-foreground line-through">{product.originalPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  );
};

const BrandPage = () => {
  const { brandName } = useParams<{ brandName: string }>();
  const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useState(false);
  const decodedBrand = decodeURIComponent(brandName || "");
  const localProducts = getProductsByBrand(decodedBrand);
  const { products: shopifyProducts, loading } = useShopifyProducts(250, `vendor:${decodedBrand}`);

  // Dedup: exclude local products that exist in Shopify
  const shopifyTitles = new Set(shopifyProducts.map(p => p.node.title.toLowerCase()));
  const uniqueLocalProducts = localProducts.filter(lp => !shopifyTitles.has(lp.name.toLowerCase()));
  const totalCount = shopifyProducts.length + uniqueLocalProducts.length;

  return (
    <div className="min-h-screen bg-background">
      <Navbar onSearchOpen={() => setSearchOpen(true)} />
      <CartDrawer />

      <div className="pt-28 pb-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>

          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-heading font-bold">{decodedBrand}</h1>
            <p className="text-muted-foreground mt-1">{products.length} product{products.length !== 1 ? "s" : ""}</p>
          </div>

          {products.length > 0 ? (
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {products.map((product, index) => (
                <div key={product.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.04}s` }}>
                  <LocalProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground mb-6">No products found for "{decodedBrand}"</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <WhatsAppButton />
    </div>
  );
};

export default BrandPage;
