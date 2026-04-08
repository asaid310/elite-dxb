import { useState } from "react";
import { ShoppingBag, Menu, X, Search, MapPin, ChevronDown } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const brandLinks = [
  { name: "Acne Studios", href: "#brands" },
  { name: "Ralph Lauren", href: "#brands" },
  { name: "Golden Goose", href: "#brands" },
  { name: "Goyard", href: "#brands" },
  { name: "Essentials", href: "#brands" },
  { name: "Chrome Hearts", href: "#brands" },
  { name: "Burberry", href: "#brands" },
  { name: "Cole Buxton", href: "#brands" },
  { name: "Corteiz", href: "#brands" },
  { name: "Gallery Dept", href: "#brands" },
  { name: "Synaworld", href: "#brands" },
];

const navItems = [
  { label: "New Drops", href: "#trending" },
  { label: "Sneakers", href: "#sneakers" },
  { label: "Streetwear", href: "#streetwear" },
  { label: "Accessories", href: "#accessories" },
  { label: "Brands", href: "#brands", hasDropdown: true },
  { label: "Sale 🔥", href: "#sale" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [brandsOpen, setBrandsOpen] = useState(false);
  const { totalItems, setIsOpen: setCartOpen } = useCart();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/80">
      <div className="border-b border-border/30 bg-muted/30">
        <div className="container mx-auto flex items-center justify-between py-1.5 px-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3 h-3" />
            <span>🇦🇪 UAE · AED (د.إ)</span>
          </div>
          <span>Free delivery on orders over 200 د.إ</span>
        </div>
      </div>

      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#" className="text-2xl font-heading font-bold text-gradient">
          DRIP.DEALS
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              <a
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                onMouseEnter={() => item.hasDropdown && setBrandsOpen(true)}
                onMouseLeave={() => item.hasDropdown && setBrandsOpen(false)}
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-3 h-3" />}
              </a>
              {item.hasDropdown && brandsOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                  onMouseEnter={() => setBrandsOpen(true)}
                  onMouseLeave={() => setBrandsOpen(false)}
                >
                  <div className="bg-card border border-border rounded-xl shadow-lg p-3 min-w-[180px] animate-fade-in">
                    {brandLinks.map((brand) => (
                      <a
                        key={brand.name}
                        href={brand.href}
                        className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                      >
                        {brand.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={() => setCartOpen(true)}
            className="relative p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primary text-primary-foreground text-[10px] flex items-center justify-center font-bold">
              {totalItems}
            </span>
          </button>
          <button
            className="md:hidden p-2 text-muted-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl animate-slide-up">
          <div className="flex flex-col p-4 gap-4">
            {navItems.map((item) => (
              <div key={item.label}>
                <a
                  href={item.href}
                  className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => !item.hasDropdown && setIsOpen(false)}
                >
                  {item.label}
                </a>
                {item.hasDropdown && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    {brandLinks.map((brand) => (
                      <a
                        key={brand.name}
                        href={brand.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {brand.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
