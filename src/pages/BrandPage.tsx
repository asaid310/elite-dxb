import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import SearchOverlay from "@/components/SearchOverlay";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getProductsByBrand, getAllBrands } from "@/data/products";

const BrandPage = () => {
  const { brandName } = useParams<{ brandName: string }>();
  const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useState(false);
  const decodedBrand = decodeURIComponent(brandName || "");
  const products = getProductsByBrand(decodedBrand);
  const allBrands = getAllBrands();

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
                  <ProductCard {...product} currency="د.إ" sizes={product.sizes} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground mb-6">No products found for "{decodedBrand}"</p>
              <div className="flex flex-wrap justify-center gap-2">
                {allBrands.map((brand) => (
                  <button
                    key={brand}
                    onClick={() => navigate(`/brand/${encodeURIComponent(brand)}`)}
                    className="px-4 py-2 rounded-full bg-muted text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {brand}
                  </button>
                ))}
              </div>
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
