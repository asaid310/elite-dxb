import { useState, useEffect } from 'react';
import { fetchProducts, type ShopifyProduct } from '@/lib/shopify';

export function useShopifyProducts(count = 50, query?: string) {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    fetchProducts(count, query)
      .then((data) => {
        if (!cancelled) {
          setProducts(data);
          setError(null);
        }
      })
      .catch((err) => {
        if (!cancelled) setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => { cancelled = true; };
  }, [count, query]);

  return { products, loading, error };
}