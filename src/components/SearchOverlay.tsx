import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { searchProducts, Product } from "@/data/products";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchOverlay = ({ isOpen, onClose }: SearchOverlayProps) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setQuery("");
      setResults([]);
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    if (query.length >= 2) {
      setResults(searchProducts(query).slice(0, 12));
    } else {
      setResults([]);
    }
  }, [query]);

  const handleSelect = (id: string) => {
    onClose();
    navigate(`/product/${id}`);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl animate-fade-in">
      <div className="container mx-auto px-4 pt-6 pb-4 max-w-2xl">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <Search className="w-5 h-5 text-muted-foreground flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, brands..."
            className="flex-1 bg-transparent text-lg text-foreground placeholder:text-muted-foreground outline-none"
          />
          <button onClick={onClose} className="p-2 text-muted-foreground hover:text-foreground">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-4 max-h-[calc(100vh-120px)] overflow-y-auto">
          {query.length >= 2 && results.length === 0 && (
            <p className="text-center text-muted-foreground py-12">No products found for "{query}"</p>
          )}
          {results.length > 0 && (
            <div className="grid grid-cols-2 gap-3">
              {results.map((product) => (
                <button
                  key={product.id}
                  onClick={() => handleSelect(product.id)}
                  className="flex gap-3 p-3 rounded-xl border border-border/50 hover:border-primary/40 bg-card transition-all text-left"
                >
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                    loading="lazy"
                  />
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground uppercase">{product.brand}</p>
                    <p className="text-sm font-medium text-foreground truncate">{product.name}</p>
                    <p className="text-sm font-bold text-primary mt-1">{product.salePrice} د.إ</p>
                  </div>
                </button>
              ))}
            </div>
          )}
          {query.length < 2 && (
            <p className="text-center text-muted-foreground py-12 text-sm">Type at least 2 characters to search</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
