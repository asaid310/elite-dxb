import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getDebugLog,
  clearDebugLog,
  isDebugEnabled,
  type TikTokDebugEntry,
} from "@/lib/tiktokPixel";

const EXPECTED_EVENTS = ["ViewContent", "Search", "AddToCart", "InitiateCheckout", "Purchase"];

const TikTokDebug = () => {
  const [entries, setEntries] = useState<TikTokDebugEntry[]>([]);
  const [debugOn, setDebugOn] = useState(isDebugEnabled());
  const [pixelLoaded, setPixelLoaded] = useState(false);

  useEffect(() => {
    setEntries(getDebugLog());
    setPixelLoaded(typeof window !== "undefined" && !!window.ttq?.track);
    const onLog = () => setEntries(getDebugLog());
    window.addEventListener("tt-debug-log", onLog);
    const t = setInterval(() => {
      setPixelLoaded(!!window.ttq?.track);
    }, 1000);
    return () => {
      window.removeEventListener("tt-debug-log", onLog);
      clearInterval(t);
    };
  }, []);

  const toggleDebug = () => {
    if (debugOn) {
      localStorage.removeItem("tt_debug");
      setDebugOn(false);
    } else {
      localStorage.setItem("tt_debug", "1");
      setDebugOn(true);
    }
  };

  const fired = new Set(entries.map((e) => e.event));

  return (
    <div className="min-h-screen bg-background text-foreground p-6 font-mono">
      <div className="max-w-4xl mx-auto space-y-6">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">TikTok Pixel Debug</h1>
          <Link to="/" className="text-primary text-sm underline">
            ← Home
          </Link>
        </header>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-lg border border-border bg-card">
            <div className="text-xs text-muted-foreground">Pixel script</div>
            <div className={pixelLoaded ? "text-green-400" : "text-red-400"}>
              {pixelLoaded ? "✓ Loaded (window.ttq)" : "✗ Not loaded (blocked or pending)"}
            </div>
          </div>
          <div className="p-4 rounded-lg border border-border bg-card">
            <div className="text-xs text-muted-foreground">Verbose console</div>
            <button onClick={toggleDebug} className="mt-1 text-sm text-primary underline">
              {debugOn ? "ON — click to disable" : "OFF — click to enable"}
            </button>
          </div>
        </div>

        <section>
          <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
            Expected events
          </h2>
          <div className="flex flex-wrap gap-2">
            {EXPECTED_EVENTS.map((e) => (
              <span
                key={e}
                className={`px-3 py-1 rounded-full text-xs border ${
                  fired.has(e)
                    ? "border-green-400 text-green-400"
                    : "border-border text-muted-foreground"
                }`}
              >
                {fired.has(e) ? "✓" : "○"} {e}
              </span>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground">
              Event log ({entries.length})
            </h2>
            <button
              onClick={() => clearDebugLog()}
              className="text-xs text-muted-foreground hover:text-foreground underline"
            >
              Clear
            </button>
          </div>
          {entries.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              No events yet. Browse the site (open a product, search, add to cart) then come back.
            </p>
          ) : (
            <ul className="space-y-2">
              {entries.map((e, i) => (
                <li
                  key={i}
                  className="p-3 rounded-lg border border-border bg-card text-xs"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-primary">{e.event}</span>
                    <span className="text-muted-foreground">
                      {new Date(e.ts).toLocaleTimeString()}{" "}
                      {e.delivered ? (
                        <span className="text-green-400">✓ sent</span>
                      ) : (
                        <span className="text-red-400">✗ not delivered</span>
                      )}
                    </span>
                  </div>
                  <pre className="overflow-x-auto whitespace-pre-wrap break-all text-muted-foreground">
                    {JSON.stringify(e.params, null, 2)}
                  </pre>
                </li>
              ))}
            </ul>
          )}
        </section>

        <footer className="text-xs text-muted-foreground pt-4 border-t border-border">
          Tip: append <code>?ttdebug=1</code> to any URL to enable verbose console logging.
          Use <code>?ttdebug=0</code> to disable. Purchase fires on Shopify's checkout domain — install
          the TikTok pixel in Shopify admin to capture it.
        </footer>
      </div>
    </div>
  );
};

export default TikTokDebug;
