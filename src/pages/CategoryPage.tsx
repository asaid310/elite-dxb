import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import SearchOverlay from "@/components/SearchOverlay";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useShopifyProducts } from "@/hooks/useShopifyProducts";
import products as localProducts from "@/data/products";
import { useCurrencyStore } from "@/stores/currencyStore";

const categoryMap: Record<string, { label: string; query: string; localCategory: string }> = {
  sneakers: { label: "Sneakers", query: "product_type:Sneakers", localCategory: "sneakers" },
  clothes: { label: "Clothes", query: "product_type:Clothing", localCategory: "clothes" },
  accessories: { label: "Accessories", query: "product_type:Accessories", localCategory: "accessories" },
};

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useState(false);
  const format = useCurrencyStore(state => state.format);

  const config = categoryMap[category || ""] || { label: category || "", query: `product_type:${category}`, localCategory: category || "" };
  const { products: shopifyProducts, loading } = useShopifyProducts(250, config.query);

  // Get local products for this category (as fallback / additional display)
  const filteredLocal = localProducts.filter(p => p.category === config.localCategory);

  // Build a set of Shopify product titles (lowercased) for dedup
  const shopifyTitles = new Set(shopifyProducts.map(p => p.node.title.toLowerCase()));

  return (
    <div className="min-h-screen bg-background">
      <Navbar onSearchOpen={() => setSearchOpen(true)} />
      <CartDrawer />

      <div className="pt-28 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>

          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-heading font-bold">{config.label}</h1>
            <p className="text-muted-foreground mt-1">
              {loading ? "Loading..." : `${shopifyProducts.length + filteredLocal.filter(lp => !shopifyTitles.has(lp.name.toLowerCase())).length} products`}
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center py-16"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {/* Shopify products first */}
              {shopifyProducts.map((product, index) => (
                <div key={product.node.id} className="animate-slide-up" style={{ animationDelay: `${Math.min(index * 0.02, 0.5)}s` }}>
                  <ProductCard shopifyProduct={product} />
                </div>
              ))}
              {/* Local-only products (not in Shopify) */}
              {filteredLocal
                .filter(lp => !shopifyTitles.has(lp.name.toLowerCase()))
                .map((lp, index) => (
                  <div
                    key={lp.id}
                    onClick={() => navigate(`/product/${lp.id}`)}
                    className="group relative rounded-xl overflow-hidden bg-gradient-card border border-border/50 shadow-card hover:border-primary/30 transition-all duration-300 cursor-pointer animate-slide-up"
                    style={{ animationDelay: `${Math.min((shopifyProducts.length + index) * 0.02, 0.8)}s` }}
                  >
                    <div className="relative aspect-square overflow-hidden bg-muted/20">
                      <img src={lp.imageUrl} alt={lp.name} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <div className="p-1.5">
                      <h3 className="font-heading font-semibold text-[11px] text-foreground truncate">{lp.name}</h3>
                      <span className="text-[11px] font-bold text-primary">{format(lp.salePrice)}</span>
                    </div>
                  </div>
                ))}
              {shopifyProducts.length === 0 && filteredLocal.length === 0 && (
                <div className="col-span-full text-center py-16">
                  <p className="text-muted-foreground mb-6">No products found in "{config.label}"</p>
                </div>
              )}
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

export default CategoryPage;
