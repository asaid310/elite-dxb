import { useState } from "react";
import { ShoppingBag, Menu, X, Search, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "@/stores/cartStore";
import { getAllBrands } from "@/data/products";

const navItems = [
  { label: "New Drops", href: "#trending" },
  { label: "Sneakers", href: "#sneakers" },
  { label: "Clothes", href: "#clothes" },
  { label: "Accessories", href: "#accessories" },
  { label: "Sale 🔥", href: "#sale" },
];

interface NavbarProps {
  onSearchOpen?: () => void;
}

const Navbar = ({ onSearchOpen }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
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
            <span>🇦🇪 UAE · AED (د.إ)</span>
          </div>
          <span className="hidden sm:inline">Free delivery on orders over 200 د.إ</span>
        </div>
      </div>

      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="/" className="text-lg sm:text-xl font-heading font-bold text-foreground tracking-tight">
          Elite-dxb
        </a>

        {/* Desktop nav: brand links */}
        <div className="hidden lg:flex items-center gap-5 overflow-x-auto">
          {brands.slice(0, 8).map((brand) => (
            <button
              key={brand}
              onClick={() => navigate(`/brand/${encodeURIComponent(brand)}`)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
            >
              {brand}
            </button>
          ))}
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

      {isOpen && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl animate-slide-up max-h-[70vh] overflow-y-auto">
          <div className="flex flex-col p-4 gap-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="border-t border-border/50 pt-3 mt-1">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Brands</p>
              <div className="flex flex-wrap gap-2">
                {brands.map((brand) => (
                  <button
                    key={brand}
                    onClick={() => { navigate(`/brand/${encodeURIComponent(brand)}`); setIsOpen(false); }}
                    className="px-3 py-1.5 rounded-full text-sm bg-muted text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {brand}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
