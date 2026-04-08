import { useState } from "react";
import { ShoppingBag, Menu, X, Search, MapPin } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/80">
      {/* Top bar */}
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
          {["New Drops", "Sneakers", "Streetwear", "Accessories", "Sale 🔥"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s|🔥/g, "")}`}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="relative p-2 text-muted-foreground hover:text-foreground transition-colors">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primary text-primary-foreground text-[10px] flex items-center justify-center font-bold">
              0
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
            {["New Drops", "Sneakers", "Streetwear", "Accessories", "Sale 🔥"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s|🔥/g, "")}`}
                className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
