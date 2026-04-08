import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { getProductsByBrand, getAllBrands } from "@/data/products";

const BrandPage = () => {
  const { brandName } = useParams<{ brandName: string }>();
  const navigate = useNavigate();
  const decodedBrand = decodeURIComponent(brandName || "");
  const products = getProductsByBrand(decodedBrand);
  const allBrands = getAllBrands();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CartDrawer />

      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-3xl">
          {/* Back button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>

          {/* Brand header */}
          <div className="mb-10">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold">{decodedBrand}</h1>
            <p className="text-muted-foreground mt-2">{products.length} product{products.length !== 1 ? "s" : ""}</p>
          </div>

          {/* 2-column product grid */}
          {products.length > 0 ? (
            <div className="grid grid-cols-2 gap-4">
              {products.map((product, index) => (
                <div key={product.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.06}s` }}>
                  <ProductCard {...product} currency="د.إ" sizes={product.sizes} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg mb-6">No products found for "{decodedBrand}"</p>
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
    </div>
  );
};

export default BrandPage;
