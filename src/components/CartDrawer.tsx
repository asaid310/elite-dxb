import { useEffect, useState } from "react";
import { X, Plus, Minus, Trash2, ShoppingBag, ExternalLink, Loader2, Copy, Check } from "lucide-react";
import { toast } from "sonner";
import { useCartStore } from "@/stores/cartStore";
import { filterDisplayOptions, isPerfumeProduct } from "@/lib/productDisplay";
import { useCurrencyStore } from "@/stores/currencyStore";

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, isLoading, isSyncing, updateQuantity, removeItem, getCheckoutUrl, clearCart, syncCart, totalItems, totalPrice } = useCartStore();
  const format = useCurrencyStore(state => state.format);

  useEffect(() => {
    if (isOpen) syncCart();
  }, [isOpen, syncCart]);

  const [copied, setCopied] = useState(false);

  const handleCheckout = () => {
    const checkoutUrl = getCheckoutUrl();
    if (checkoutUrl) {
      // Redirect in same tab — works in TikTok, Instagram, and all in-app browsers
      window.location.href = checkoutUrl;
    }
  };

  const handleCopyCheckoutLink = async () => {
    const checkoutUrl = getCheckoutUrl();
    if (checkoutUrl) {
      try {
        await navigator.clipboard.writeText(checkoutUrl);
        setCopied(true);
        toast.success("Checkout link copied! Paste it in your browser.");
        setTimeout(() => setCopied(false), 2000);
      } catch {
        // Fallback for browsers that don't support clipboard API
        const textArea = document.createElement('textarea');
        textArea.value = checkoutUrl;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setCopied(true);
        toast.success("Checkout link copied! Paste it in your browser.");
        setTimeout(() => setCopied(false), 2000);
      }
    }
  };

  if (!isOpen) return null;

  const itemCount = totalItems();
  const total = totalPrice();

  return (
    <>
      <div className="fixed inset-0 bg-background/60 backdrop-blur-sm z-50" onClick={() => setIsOpen(false)} />
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-card border-l border-border z-50 flex flex-col animate-slide-in-right shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-border">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-heading font-bold text-foreground">Your Cart</h2>
            <span className="px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-xs font-bold">{itemCount}</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="p-2 rounded-full hover:bg-muted transition-colors">
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-5">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-muted-foreground">
              <ShoppingBag className="w-16 h-16 opacity-30" />
              <p className="font-medium">Your cart is empty</p>
              <button onClick={() => setIsOpen(false)} className="text-sm text-primary hover:underline">Continue shopping →</button>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {items.map((item) => {
                const imgUrl = item.product.node.images?.edges?.[0]?.node.url;
                const isPerfume = isPerfumeProduct({
                  title: item.product.node.title,
                  description: item.product.node.description,
                });
                const displayOptions = filterDisplayOptions(item.selectedOptions, isPerfume);

                return (
                  <div key={item.variantId} className="flex gap-3 p-3 rounded-xl bg-muted/30 border border-border/50">
                    {imgUrl ? (
                      <img src={imgUrl} alt={item.product.node.title} className="w-20 h-20 rounded-lg object-cover flex-shrink-0" />
                    ) : (
                      <div className="w-20 h-20 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                        <ShoppingBag className="w-6 h-6 text-muted-foreground" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-foreground text-sm truncate">{item.product.node.title}</p>
                      {displayOptions.length > 0 && (
                        <p className="text-xs text-muted-foreground mt-0.5">{displayOptions.map(o => o.value).join(' • ')}</p>
                      )}
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2">
                          <button onClick={() => updateQuantity(item.variantId, item.quantity - 1)} className="p-1 rounded-md bg-muted hover:bg-muted/80 transition-colors">
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-sm font-bold w-5 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.variantId, item.quantity + 1)} className="p-1 rounded-md bg-muted hover:bg-muted/80 transition-colors">
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-primary">{format(parseFloat(item.price.amount) * item.quantity)}</span>
                          <button onClick={() => removeItem(item.variantId)} className="p-1 text-muted-foreground hover:text-destructive transition-colors">
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border p-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground font-medium">Total</span>
              <span className="text-xl font-heading font-bold text-foreground">{format(total)}</span>
            </div>
            <button
              onClick={handleCheckout}
              disabled={items.length === 0 || isLoading || isSyncing}
              className="w-full py-3.5 rounded-full bg-gradient-hero text-primary-foreground font-heading font-semibold glow-primary hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isLoading || isSyncing ? <Loader2 className="w-4 h-4 animate-spin" /> : <><ExternalLink className="w-4 h-4" /> Checkout with Shopify</>}
            </button>
            <button
              onClick={handleCopyCheckoutLink}
              className="w-full py-2.5 rounded-full border border-border text-foreground font-medium text-sm hover:bg-muted transition-colors flex items-center justify-center gap-2"
            >
              {copied ? <><Check className="w-4 h-4 text-green-500" /> Link Copied!</> : <><Copy className="w-4 h-4" /> Copy Checkout Link</>}
            </button>
            <p className="text-xs text-muted-foreground text-center">Using TikTok or Instagram? Copy the link and paste it in your browser</p>
            <button onClick={clearCart} className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors">
              Clear cart
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
