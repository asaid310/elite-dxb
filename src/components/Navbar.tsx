import { useState } from "react";
import { ShoppingBag, Menu, X, Search, MapPin, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "@/stores/cartStore";
import { getAllBrands } from "@/data/products";

const categories = [
  { label: "Sneakers", path: "/category/sneakers" },
  { label: "Clothes", path: "/category/clothes" },
  { label: "Accessories", path: "/category/accessories" },
];

interface NavbarProps {
  onSearchOpen?: () => void;
}

const Navbar = ({ onSearchOpen }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [brandsOpen, setBrandsOpen] = useState(false);
  const totalItemCount = useCartStore(state => state.totalItems)();
  const setCartOpen = useCartStore(state => state.setIsOpen);
  const navigate = useNavigate();
  const brands = getAllBrands();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/80">
      <div className="border-b border-border/30 bg-muted/30">
        <div className="container mx-auto flex items-center justify-between py-1.5 px-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3 h-3" />
            <span>🇦🇪 AED · 🇸🇦 SAR · 🇰🇼 KWD · 🇧🇭 BHD · 🇴🇲 OMR · 🇶🇦 QAR</span>
          </div>
          <span className="hidden sm:inline">Free delivery on orders over 200 د.إ</span>
        </div>
      </div>

      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="/" className="text-lg sm:text-xl font-heading font-bold text-foreground tracking-tight">
          Elite-dxb
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {categories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => navigate(cat.path)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {cat.label}
            </button>
          ))}
          {/* Brands dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Brands <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-card border border-border/60 rounded-xl shadow-xl p-4 w-[340px] max-h-[320px] overflow-y-auto grid grid-cols-2 gap-1">
                {brands.map((brand) => (
                  <button
                    key={brand}
                    onClick={() => navigate(`/brand/${encodeURIComponent(brand)}`)}
                    className="text-sm text-left px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors truncate"
                  >
                    {brand}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onSearchOpen}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={() => setCartOpen(true)}
            className="relative p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItemCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primary text-primary-foreground text-[10px] flex items-center justify-center font-bold">
                {totalItemCount}
              </span>
            )}
          </button>
          <button
            className="lg:hidden p-2 text-muted-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl animate-slide-up max-h-[70vh] overflow-y-auto">
          <div className="flex flex-col p-4 gap-1">
            {/* Category links */}
            {categories.map((cat) => (
              <button
                key={cat.label}
                onClick={() => { navigate(cat.path); setIsOpen(false); }}
                className="text-left text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2 px-2 rounded-lg hover:bg-muted/40"
              >
                {cat.label}
              </button>
            ))}

            {/* Brands accordion */}
            <div className="border-t border-border/50 mt-2 pt-2">
              <button
                onClick={() => setBrandsOpen(!brandsOpen)}
                className="flex items-center justify-between w-full text-left text-base font-medium text-muted-foreground hover:text-foreground py-2 px-2 rounded-lg hover:bg-muted/40"
              >
                Brands
                <ChevronDown className={`w-4 h-4 transition-transform ${brandsOpen ? "rotate-180" : ""}`} />
              </button>
              {brandsOpen && (
                <div className="grid grid-cols-2 gap-1 mt-1 pl-1">
                  {brands.map((brand) => (
                    <button
                      key={brand}
                      onClick={() => { navigate(`/brand/${encodeURIComponent(brand)}`); setIsOpen(false); }}
                      className="text-sm text-left px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors truncate"
                    >
                      {brand}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
