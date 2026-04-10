import { useState, useEffect, useRef } from "react";
import { Search, X, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { fetchProducts, type ShopifyProduct } from "@/lib/shopify";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchOverlay = ({ isOpen, onClose }: SearchOverlayProps) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(false);
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
    if (query.length < 2) {
      setResults([]);
      return;
    }
    const timeout = setTimeout(() => {
      setLoading(true);
      fetchProducts(12, `title:*${query}*`)
        .then((data) => setResults(data))
        .catch(() => setResults([]))
        .finally(() => setLoading(false));
    }, 300);
    return () => clearTimeout(timeout);
  }, [query]);

  const handleSelect = (handle: string) => {
    onClose();
    navigate(`/product/${handle}`);
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
          {loading && (
            <div className="flex justify-center py-12">
              <Loader2 className="w-6 h-6 animate-spin text-primary" />
            </div>
          )}
          {!loading && query.length >= 2 && results.length === 0 && (
            <p className="text-center text-muted-foreground py-12">No products found for "{query}"</p>
          )}
          {!loading && results.length > 0 && (
            <div className="grid grid-cols-2 gap-3">
              {results.map((product) => {
                const p = product.node;
                const imageUrl = p.images.edges[0]?.node.url;
                const price = parseFloat(p.priceRange.minVariantPrice.amount);
                const currency = p.priceRange.minVariantPrice.currencyCode === "AED" ? "د.إ" : p.priceRange.minVariantPrice.currencyCode;
                return (
                  <button
                    key={p.id}
                    onClick={() => handleSelect(p.handle)}
                    className="flex gap-3 p-3 rounded-xl border border-border/50 hover:border-primary/40 bg-card transition-all text-left"
                  >
                    {imageUrl && (
                      <img
                        src={imageUrl}
                        alt={p.title}
                        className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                        loading="lazy"
                      />
                    )}
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">{p.title}</p>
                      <p className="text-sm font-bold text-primary mt-1">{price.toFixed(2)} {currency}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
          {query.length < 2 && !loading && (
            <p className="text-center text-muted-foreground py-12 text-sm">Type at least 2 characters to search</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
