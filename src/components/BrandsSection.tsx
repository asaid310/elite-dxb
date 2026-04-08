import { useNavigate } from "react-router-dom";
import { getAllBrands, getProductsByBrand } from "@/data/products";

const BrandsSection = () => {
  const navigate = useNavigate();
  const brands = getAllBrands();

  return (
    <section id="brands" className="py-14 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-8">Shop by Brand</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {brands.map((brand) => {
            const count = getProductsByBrand(brand).length;
            return (
              <button
                key={brand}
                onClick={() => navigate(`/brand/${encodeURIComponent(brand)}`)}
                className="group relative rounded-xl border border-border/50 bg-card hover:border-primary/40 transition-all p-5 text-left"
              >
                <span className="text-base font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                  {brand}
                </span>
                <span className="block text-xs text-muted-foreground mt-1">
                  {count} item{count !== 1 ? "s" : ""}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
