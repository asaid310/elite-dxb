import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { useShopifyProducts } from "@/hooks/useShopifyProducts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import SearchOverlay from "@/components/SearchOverlay";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductCard from "@/components/ProductCard";
import { Loader2 } from "lucide-react";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [searchOpen, setSearchOpen] = useState(false);

  const { products, loading } = useShopifyProducts(50, query ? `title:*${query}*` : undefined);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onSearchOpen={() => setSearchOpen(true)} />
      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-2xl font-heading font-bold text-foreground mb-1">
            Search results for "{query}"
          </h1>
          <p className="text-sm text-muted-foreground mb-6">
            {loading ? "Searching..." : `${products.length} product${products.length !== 1 ? "s" : ""} found`}
          </p>

          {loading && (
            <div className="flex justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          )}

          {!loading && products.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No products found for "{query}"</p>
              <p className="text-sm text-muted-foreground mt-2">Try searching with different keywords</p>
            </div>
          )}

          {!loading && products.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {products.map((product) => (
                <ProductCard key={product.node.id} shopifyProduct={product} />
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
      <CartDrawer />
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <WhatsAppButton />
    </div>
  );
};

export default SearchResults;
